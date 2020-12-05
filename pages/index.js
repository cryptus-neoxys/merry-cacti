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
            <img className="info-img" src="https://i.gifer.com/Ayeo.gif" />
            <div className="desc">
              Depression is a common illness worldwide, with more than 264
              million people affected. Depression is different from usual mood
              fluctuations and short-lived emotional responses to challenges in
              everyday life. Especially when long-lasting and with moderate or
              severe intensity, depression may become a serious health
              condition. It can cause the affected person to suffer greatly and
              function poorly at work, at school and in the family. At its
              worst, depression can lead to suicide. Close to 800 000 people die
              due to suicide every year. Suicide is the second leading cause of
              death in 15-29-year-olds
            </div>
          </div>
          <div className="info-group column-reverse">
            <div className="desc text-right">
              Although there are known, effective treatments for mental
              disorders, between 76% and 85% of people in low- and middle-income
              countries receive no treatment for their disorder. Barriers to
              effective care include a lack of resources, lack of trained
              health-care providers and social stigma associated with mental
              disorders. Another barrier to effective care is inaccurate
              assessment. In countries of all income levels, people who are
              depressed are often not correctly diagnosed, and others who do not
              have the disorder are too often misdiagnosed and prescribed
              antidepressants.
            </div>
            <img className="info-img" src="https://i.gifer.com/EaDl.gif" />
          </div>

          <div className="center-info text-center">
            The burden of depression and other mental health conditions is on
            the rise globally. A World Health Assembly resolution passed in May
            2013 has called for a comprehensive, coordinated response to mental
            disorders at the country level.
          </div>

          <div className="source">Source: WHO </div>
        </div>
        {/* <Widget /> */}
      </IndexWrapper>
    </Layout>
  );
}
