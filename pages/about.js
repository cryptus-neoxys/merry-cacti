import Layout from "../components/Layout/Layout";
import { AboutWrapper } from "../styles/AboutWrapper";

export default function About() {
  return (
    <Layout title={"About"}>
      <AboutWrapper>
        <div className="heading">About</div>
      </AboutWrapper>
    </Layout>
  );
}
