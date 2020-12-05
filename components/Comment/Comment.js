import React from "react";

import { CommentWrapper } from "./CommentWrapper";

export const Comment = () => {
  return (
    <CommentWrapper>
      <div className="main">
        <div className="comment-container">
          <div className="meta">
            <a className="blue"> Merry-Cacti</a>{" "}
            <span className="mute-gray">commented on Luvox</span> •{" "}
            <a className="bold">r/depression</a>•{" "}
            <span className="mute-gray">Posted byu/makaveli199010</span>
          </div>
          <div className="body">
            <div className="left-border"></div>
            <div className="container">
              <div className="header">Merry-Cacti 1 point · 6 hours ago</div>
              <div className="comment">
                you are such a huge inspiration to many of us
              </div>
              <div className="response">Reply Share</div>
            </div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  );
};
