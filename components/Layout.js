import { Main } from "next/document";
// import { Footer } from "./Footer";

const Layout = () => {
  return (
    <>
      <Main />

      <footer
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "30px 5%",
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
        }}
      >
        <p
          style={{
            maxWidth: "500px",
            textAlign: "right",
            fontSize: "0.7rem",
            color: "rgba(0, 0, 0, 0.5)",
            "&:firstOfType": { marginBottom: "5px" },
          }}
        >
          Made by{" "}
          <a
            href="https://twitter.com/iaremarkus"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            some oke
          </a>{" "}
          in Cape Town who enjoy's a drink, almost as much as he enjoys a good
          special and home delivery
        </p>

        <p>
          <a
            href="https://sacoronavirus.co.za/"
            target="_blank"
            rel="nofollow noreferrer"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "600",
              textTransform: "uppercase",
              textDecoration: "none",
              fontSize: "0.7rem",
            }}
          >
            STAY SAFE
          </a>
        </p>
      </footer>
    </>
  );
};

export { Layout };
