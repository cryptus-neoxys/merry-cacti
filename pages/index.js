import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <IndexWrapper>
        <div className="container">
          <p>
            <span>HANG IN</span> <br /> THERE
          </p>
        </div>
      </IndexWrapper>
    </Layout>
  );
}
