import styled from "styled-components";

export const ChatBotWrapper = styled.div`
  .chatbot {
    position: fixed;
    bottom: 15px;
    right: 15px;
    .switch {
      display: block;
      border-radius: 50%;
      padding: 15px;
      outline: none;
      border: none;
      height: 60px;
      margin: 5px 5px 5px auto;
      background-color: #0d69f2;
      color: #fff;
    }
    .chat-container {
      border-radius: 15px;
      box-shadow: 0 0 10px #0004;
      overflow: hidden;
      background-color: white;
      .chat-head {
        display: block;
        background-color: #0d66ff;
        padding: 7px;
        text-align: center;
        color: #fff;
        margin-bottom: 5px;
        font-size: 1.6rem;
      }
      .chat-messages {
        height: 240px;
        overflow-y: auto;
        .remote {
          width: 100%;
          margin-bottom: 10px;
          display: flex;
          justify-content: flex-start;
          div {
            max-width: 150px;
            min-width: 50px;
            padding: 5px 15px;
            font-size: 1.3em;
            background-color: #0d69f2;
            color: #fff;
            border-radius: 0 20px 20px 20px;
            margin-left: 5px;
            box-shadow: 1px 1px 2px rgb(124, 124, 124);
          }
        }
        .self {
          width: 100%;
          margin-bottom: 10px;
          display: flex;
          justify-content: flex-end;
          div {
            max-width: 150px;
            min-width: 50px;
            padding: 5px 15px;
            font-size: 1.3em;
            background-color: #f3f3f3;
            border-radius: 20px 0 20px 20px;
            margin-right: 5px;
            box-shadow: -1px 1px 2px rgb(124, 124, 124);
          }
        }
      }
      .chat-input {
        display: inline;
        margin-bottom: 5px;
        overflow: hidden;
        border-radius: 5px;
        input {
          padding: 2px 8px;
          border: 1px solid #00f;
          outline: none;
          height: 30px;
          border-radius: 15px 0px 0px 15px;
        }
        button {
          padding: 6px 16px;
          outline: none;
          border: none;
          height: 36px;
          border-radius: 0 15px 15px 0;
          margin: 5px 5px 5px auto;
          background-color: #0d69f2;
          color: #fff;
        }
      }
    }
  }
`;
