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
        <div className="info">
          <div className="info-group">
            <img className="info-img" src="https://i.gifer.com/1Ktv.gif" />
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
              pulvinar vitae dolor.
            </div>
          </div>
          <div className="info-group column-reverse">
            <div className="desc text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
              pulvinar vitae dolor.
            </div>
            <img className="info-img" src="https://i.gifer.com/1Ktv.gif" />
          </div>
          <div className="info-group">
            <img className="info-img" src="https://i.gifer.com/1Ktv.gif" />
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
              pulvinar vitae dolor.
            </div>
          </div>
        </div>
        {/* <Widget /> */}
      </IndexWrapper>
    </Layout>
  );
}
