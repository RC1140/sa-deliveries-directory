import { useMemo, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";
import ReactGA from "react-ga";

import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { LaunchPad } from "../components/LaunchPad";

// global styles
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;

    @media (min-width: 767px) {
      font-size:16px;
    }

    @media (min-width: 1024px) {
      font-size:18px;
    }
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing:border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

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
        <title>List of South African Booze Sellers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <h1>
            <span>🇿🇦</span> ZA Delivery Directory
          </h1>
          <h2>
            A list of services in South Africa, for alcohol delivery, coffee
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

          <a
            onClick={() => {
              alert("Coming soon!");
            }}
            id="link-grocery"
          >
            <i>🍞</i>
            <span>Directory for</span> <strong>Grocery Delivery</strong>
          </a>
        </LaunchPad>
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
