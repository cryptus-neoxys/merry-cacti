import Layout from "../components/Layout/Layout";
import { TeamWrapper } from "../styles/TeamWrapper";

export default function About() {
  return (
    <Layout title={"Team"}>
      <TeamWrapper>
        <div className="heading">Team</div>
        <div className="team-group">
          <div className="team-member">
            <img
              className="member-image"
              src="https://avatars1.githubusercontent.com/u/31622972"
              alt="aniket"
            />
            <div className="member-name">Aniket</div>
          </div>
          <div className="team-member">
            <img
              className="member-image"
              src="https://avatars1.githubusercontent.com/u/59837325"
              alt="apurva"
            />
            <div className="member-name">Apurva</div>
          </div>
          <div className="team-member">
            <img
              className="member-image"
              src="https://avatars1.githubusercontent.com/u/50591491"
              alt="dev"
            />
            <div className="member-name">Dev</div>
          </div>
          <div className="team-member">
            <img
              className="member-image"
              src="https://avatars1.githubusercontent.com/u/24913006  "
              alt="aniket"
            />
            <div className="member-name">Vinayak</div>
          </div>
        </div>
      </TeamWrapper>
    </Layout>
  );
}
