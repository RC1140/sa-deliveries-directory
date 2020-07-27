import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { GlobalStyle } from "../components/GlobalStyles";
import ReactGA from "react-ga";

import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { LaunchPad } from "../components/LaunchPad";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("UA-2422341-66");
    ReactGA.set({ page: router.pathname });
    ReactGA.pageview(router.pathname);
  }, [router.pathname]);

  return (
    <div className="container">
      <GlobalStyle></GlobalStyle>

      <Head>
        <title>A Directory of South African Retailers That Do Home Delivery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <h1>
            <span>🇿🇦</span> ZA Delivery Directory
          </h1>
          <h2>
            A list of retailers in South Africa, for alcohol delivery, coffee
            delivery, and food delivery
          </h2>
        </Header>

        <LaunchPad>
          <Link href="/alcohol">
            <a id="link-alcohol">
              <i>🍷</i>
              <span>Directory for</span> <strong>Alcohol Delivery</strong>
            </a>
          </Link>

          <Link href="/coffee">
            <a id="link-coffee">
              <i>☕</i>
              <span>Directory for</span> <strong>Coffee Delivery</strong>
            </a>
          </Link>

          <Link href="/groceries">
            <a id="link-groceries">
              <i>🍞</i>
              <span>Directory for</span> <strong>Grocery Delivery</strong>
            </a>
          </Link>
        </LaunchPad>
      </Main>
    </div>
  );
}
