import Layout from "../components/Layout/Layout";
import { AboutWrapper } from "../styles/AboutWrapper";

export default function About() {
  return (
    <Layout title={"About"}>
      <AboutWrapper>
        <div className="main">
          <div className="heading">About</div>
          <div className="about">
            <img className="gif" src="https://i.gifer.com/Vr6.gif" alt="help" />
            <div className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
              pulvinar vitae dolor.
            </div>
            <div className="info">
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
      </AboutWrapper>
    </Layout>
  );
}
