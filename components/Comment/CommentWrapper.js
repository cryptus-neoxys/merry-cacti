import styled from "styled-components";

export const CommentWrapper = styled.div`
  .main {
    font-size: 14px;
    margin: 20px 5px;

    a:hover {
      text-decoration: underline;
    }

    .comment-container {
      border: 1.5px solid #bbb;
      border-radius: 3px;
      .meta {
        margin: 10px;
      }
      .body {
        margin: 10px;
        display: flex;
        flex-direction: row;

        .left-border {
          border: 1px dashed gray;
          margin: 0 10px 0 4px;
        }

        .container {
          padding: 10px;
          background-color: #f3f7fd;
          border-radius: 3px;
          flex-grow: 1;

          .comment {
            font-size: 1.4em;
            margin: 0.5em 0;
          }
        }
      }
      .mute-gray {
        font-size: 0.9em;
        color: gray;
      }
      .loud-gray {
        font-size: 1.1em;
        color: gray;
        font-weight: 600;
        margin-right: 6px;
      }
      .blue {
        color: blue;
      }
      .bold {
        font-weight: bold;
      }
    }
  }
`;
