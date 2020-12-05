// import styles from "../styles/Home.module.css";
import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";

export default function Home() {
  return (
    <Layout>
      <IndexWrapper>
        <div className="main">
          <div className="heading">Home</div>
        </div>
      </IndexWrapper>
    </Layout>
  );
}
