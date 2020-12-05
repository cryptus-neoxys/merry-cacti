import React from "react";
import moment from "moment";
import { CommentWrapper } from "./CommentWrapper";

export const Comment = ({ data }) => {
  return (
    <CommentWrapper>
      <div className="main">
        <div className="comment-container">
          <div className="meta">
            <a href="https://www.reddit.com/user/Merry-Cacti/" className="blue">
              {" "}
              {data.author}
            </a>{" "}
            <a href={data.link_permalink} className="mute-gray">
              {data.link_title}
            </a>{" "}
            • <a className="bold">{data.subreddit_name_prefixed}</a>•{" "}
            <span className="mute-gray">Posted by u/{data.link_author}</span>
          </div>
          <div className="body">
            <div className="left-border"></div>
            <div className="container">
              <div className="header">
                <span href="https://www.reddit.com/user/Merry-Cacti/">
                  {data.author}{" "}
                </span>
                <span className="mute-gray">
                  {" "}
                  {data.score} point · {moment(data.created * 1000).fromNow()}
                </span>
              </div>
              <div className="comment">{data.body}</div>
              <div className="response">
                <a href={data.link_url} className="loud-gray">
                  Reply
                </a>
                <a href={data.link_url} className="loud-gray">
                  {" "}
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  );
};
