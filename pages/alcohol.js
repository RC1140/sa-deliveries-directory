import { useMemo, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GlobalStyle } from "../components/GlobalStyles";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ReactGA from "react-ga";

import { Footer } from "../components/Footer";
import { Status } from "../components/Status";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { Table } from "../components/Table/Table";
import {
  CheckboxFilter,
  SelectColumnFilter,
} from "../components/Table/filters";
//docs.google.com/spreadsheets/d/1kDcLSk7Kh-1plq0QTw7C_QceiD-P6MRof9UJ9liVACI/edit?usp=sharing

const sheetData = async () => {
  const data = await fetch(
    "https://spreadsheets.google.com/feeds/list/1kDcLSk7Kh-1plq0QTw7C_QceiD-P6MRof9UJ9liVACI/2/public/values?alt=json"
  )
    .then((data) => data.json())
    .then((json) => {
      const formattedData = json.feed.entry.reduce((formattedData, item) => {
        formattedData.push({
          title: item.gsx$establishmentname.$t,
          url: item.gsx$websiteurl.$t,
          spirits: item.gsx$stockistsofspirits.$t,
          wine: item.gsx$stockistsofwine.$t,
          beer: item.gsx$stockistsofbeer.$t,
          phone: item.gsx$phonenumber.$t,
          email: item.gsx$emailaddress.$t,
          store_city: item.gsx$primarycity.$t,
          store_province: item.gsx$province.$t,
        });

        return formattedData;
      }, []);

      return formattedData;
    });

  return data.reverse();
};

export default function Alcohol() {
  const router = useRouter();

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "title",
        filter: "fuzzyText",
        className: "title",
        width: "250px",
      },
      {
        Header: "Stockists of",
        align: "center",
        columns: [
          {
            Header: "🥃",
            accessor: "spirits",
            displayType: "tick",
            align: "center",
            Filter: CheckboxFilter,
            filter: "includes",
            width: "50px",
          },
          {
            Header: "🍷",
            accessor: "wine",
            displayType: "tick",
            align: "center",
            Filter: CheckboxFilter,
            filter: "includes",
            width: "50px",
          },
          {
            Header: "🍺",
            accessor: "beer",
            displayType: "tick",
            align: "center",
            Filter: CheckboxFilter,
            filter: "includes",
            width: "50px",
          },
        ],
      },
      {
        Header: "Location",
        align: "center",
        columns: [
          {
            Header: "City",
            accessor: "store_city",
            align: "center",
            Filter: SelectColumnFilter,
            filter: "includes",
          },
          {
            Header: "Province",
            accessor: "store_province",
            align: "center",
            Filter: SelectColumnFilter,
            filter: "includes",
          },
        ],
      },
      {
        Header: "Contact",
        align: "center",
        columns: [
          { Header: "✉️", accessor: "email", align: "center" },
          { Header: "☎️", accessor: "phone", align: "center" },
          { Header: "🔗", accessor: "url", align: "center", isLink: true },
        ],
      },
    ],
    []
  );

  const { status, data, error, isFetching } = useQuery("data", sheetData);

  useEffect(() => {
    ReactGA.initialize("UA-2422341-66");
    ReactGA.set({ page: router.pathname });
    ReactGA.pageview(router.pathname);
  }, [router.pathname]);

  return (
    <div className="container">
      <GlobalStyle></GlobalStyle>
      <Head>
        <title>
          List of South African Alcohol Retailers that offer delivery
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <Link href="/">
            <a id="link-home">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
              </svg>
            </a>
          </Link>
          <h1>
            <span>Directory for</span> <strong>Alcohol Delivery</strong>{" "}
            <span>in South Africa</span>
          </h1>
          <h2>
            A growing list of {data ? data.length : ""} South African alcohol
            retailers and wine farms (
            <button
              onClick={() => {
                const confirming = confirm(
                  "Have you used the search to confirm you're adding something new?\n\n(Search in the 'name' column)"
                );
                if (confirming)
                  window.open("https://forms.gle/TFAkWpnWCqMmkjVh9");
              }}
            >
              Contribute to the list
            </button>
            )
          </h2>
        </Header>

        {isFetching && (
          <Status state="info" style={{ position: `absolute` }}>
            Updating in the background
          </Status>
        )}
        {status === "loading" ? (
          <Status state="loading">Loading...</Status>
        ) : status === "error" ? (
          <Status state="error">Borked :( {error.message}</Status>
        ) : (
          <>
            <Table columns={columns} data={data}></Table>
          </>
        )}
      </Main>

      <Footer>
        <p>
          Made by some oke in Cape Town who enjoy's a drink, almost as much as
          he enjoys a good special and home delivery
        </p>

        <p>
          <a
            href="https://sacoronavirus.co.za/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            STAY SAFE
          </a>
        </p>
      </Footer>
    </div>
  );
}
