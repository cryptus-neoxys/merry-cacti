import { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { RedditWrapper } from "./../styles/RedditWrapper";
import { Comment } from "./../components/Comment/Comment";
import axios from "axios";

export default function Reddit() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("fetch data called");
    const data = await axios.get(
      "https://www.reddit.com/user/Merry-Cacti.json"
    );
    setData(data.data.data.children);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title={"Reddit"}>
      <RedditWrapper>
        <div className="main">
          <div className="heading">Reddit</div>
          <div className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </div>
          <div className="comments">
            {data
              ? data.map((comment, index) => {
                  return <Comment key={index} data={comment.data} />;
                })
              : "loading..."}
          </div>
        </div>
      </RedditWrapper>
    </Layout>
  );
}
