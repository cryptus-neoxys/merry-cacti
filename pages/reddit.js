import Layout from "./../components/Layout/Layout";
import { RedditWrapper } from "./../styles/RedditWrapper";
import { Comment } from "./../components/Comment/Comment";

export default function Reddit() {
  return (
    <Layout title={"Reddit"}>
      <RedditWrapper>
        <div className="main">
          <div className="heading">Reddit</div>
          <Comment />
        </div>
      </RedditWrapper>
    </Layout>
  );
}
