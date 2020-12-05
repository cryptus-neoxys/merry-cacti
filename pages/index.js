import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";
// import { Widget } from "react-chat-widget";
// import "react-chat-widget/lib/styles.css";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <IndexWrapper>
        <div className="container">
          <p>
            <span>HANG IN</span> <br /> THERE
          </p>
        </div>
        {/* <Widget /> */}
      </IndexWrapper>
    </Layout>
  );
}
