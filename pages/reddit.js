import Layout from "./../components/Layout/Layout";
import { RedditWrapper } from "./../styles/RedditWrapper";

export default function Reddit() {
  return (
    <Layout title={"Reddit"}>
      <RedditWrapper>
        <div className="main">
          <div className="heading">Reddit</div>
        </div>
      </RedditWrapper>
    </Layout>
  );
}
