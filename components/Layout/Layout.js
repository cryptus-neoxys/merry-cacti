import Link from "next/link";
import Head from "next/head";

import Nav from "../Nav/Nav";
import { LayoutWrapper } from "./LayoutWrapper";
import ChatBot from "../ChatBot/ChatBot";
import Footer from "./../Footer/Footer";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <LayoutWrapper>
      <Head>
        <title>Merry Cacti | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="header">
        <Nav />
      </div>

      <div className="main">{children}</div>
      <ChatBot />
      <footer>
        <Footer />
      </footer>
    </LayoutWrapper>
  );
}
