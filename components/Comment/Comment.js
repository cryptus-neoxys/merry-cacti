import { CommentWrapper } from "./CommentWrapper";

export default function Comment() {
  return (
    <CommentWrapper>
      <div className="comment-container">
        <div className="meta">
          <div className="comment-icon">COM</div>
          <div className="meta-bod">
            <p>
              <a href="https://www.reddit.com/user/Merry-Cacti">Merry Cacti </a>
              <span className="mute">commented on </span> I know how to be
              happy.. <span className="loud">r/SuicideWatch </span>
              <span>Posted by u/Exteras</span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <Comment />
    </CommentWrapper>
  );
}
