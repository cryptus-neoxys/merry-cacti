import styled from "styled-components";

export const CommentWrapper = styled.div`
  .main {
    .comment-container {
      border: 1px solid black;
      .meta {
        margin: 4px;
      }
      .body {
        margin: 4px;
        display: flex;
        flex-direction: row;

        .left-border {
          border: 1px dashed gray;
          margin: 0 10px;
        }

        .container {
          padding: 4px;
          background-color: lightgray;
          border-radius: 3px;
          flex-grow: 1;
        }
      }
      .mute-gray {
        font-size: 0.9em;
        color: gray;
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
