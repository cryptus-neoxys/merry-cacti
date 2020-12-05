import Layout from "../components/Layout/Layout";
import { TeamWrapper } from "../styles/TeamWrapper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function About() {
  return (
    <Layout title={"Team"}>
      <TeamWrapper>
        <div className="main">
          <div className="heading">Team</div>
          <div className="team-group">
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/31622972"
                alt="aniket"
              />
              <div className="member-name">Aniket</div>
              <div className="socials">
                <a href="https://github.com/DiKwickley?">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/dikwickley/">
                  <LinkedInIcon />
                </a>

                <a href="https://twitter.com/dikwickley">
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/59837325"
                alt="apurva"
              />
              <div className="member-name">Apurva</div>
              <div className="socials">
                <a href="https://github.com/Apurva-tech">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/apurva-sharma-46a091190/">
                  <LinkedInIcon />
                </a>

                <a href="">
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/50591491"
                alt="dev"
              />
              <div className="member-name">Dev</div>
              <div className="socials">
                <a href="https://github.com/cryptus-neoxys">
                  <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/cryptus_neoxys/">
                  <LinkedInIcon />
                </a>

                <a href="https://twitter.com/cryptus_neoxys">
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/24913006  "
                alt="aniket"
              />
              <div className="member-name">Vinayak</div>
              <div className="socials">
                <a href="https://github.com/gvinayakgupta">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/vinayakguptaa/">
                  <LinkedInIcon />
                </a>

                <a href="https://twitter.com/vinayakguptaa">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </TeamWrapper>
    </Layout>
  );
}
