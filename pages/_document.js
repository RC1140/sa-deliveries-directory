import Document, { Head, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Layout } from "../components/Layout";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((Layout) => (props) =>
      sheet.collectStyles(<Layout {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>

        <body>
          <Layout />
          <NextScript />
        </body>
      </html>
    );
  }
}
