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
              We created this application to help the users suffering from
              mental health illness and comfort them. Merry Cacti is a reddit
              bot which finds the user's post which implies depressive and self
              destructive sentiments and replies happy thoughts and redirects
              them to our website where we provide a platform to help such users
              express themselves anonymously and help each other using a
              subreddit.
            </div>
            <div className="info">
              We at first extracted the data to train our model by using the
              reddit json file and then process the data to create a final csv
              file. We used nltk and spacy to pre-process the Reddit post text
              data and analyse if the text is suicidal or depressive, and
              comment on the post accordingly. We created a website where people
              can view our bot replies on Reddit and chat with our bot
              integrated into the website.
            </div>
          </div>
        </div>
      </AboutWrapper>
    </Layout>
  );
}
