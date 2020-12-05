import Layout from "./../components/Layout/Layout";
import { RedditWrapper } from "./../styles/RedditWrapper";

export default function Reddit() {
  return (
    <Layout title={"Reddit"}>
      <RedditWrapper>
        <div className="heading">Reddit</div>
      </RedditWrapper>
    </Layout>
  );
}
