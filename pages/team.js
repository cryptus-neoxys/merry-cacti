import Layout from "../components/Layout/Layout";
import { TeamWrapper } from "../styles/TeamWrapper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

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
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <InstagramIcon />
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
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <InstagramIcon />
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
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <InstagramIcon />
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
                <a href="">
                  <GitHubIcon />
                </a>
                <a href="">
                  <LinkedInIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </TeamWrapper>
    </Layout>
  );
}
