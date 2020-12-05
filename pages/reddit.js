import Layout from "./../components/Layout/Layout";
import Comment from "../components/Comment/Comment";
import { RedditWrapper } from "./../styles/RedditWrapper";

export default function Reddit() {
  return (
    <Layout title={"Reddit"}>
      <RedditWrapper>
        <div className="main">
          <div className="heading">Reddit</div>
        </div>
        <div className="heading">Reddit</div>
        <Comment />
      </RedditWrapper>
    </Layout>
  );
}
