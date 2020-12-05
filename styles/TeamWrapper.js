import styled from "styled-components";

export const TeamWrapper = styled.div`
  .heading {
    font-size: 40px;
    text-align: center;
    margin-top: 100px;
  }
  .team-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .team-member {
      margin: 2em 2em;
      display: flex;
      flex-direction: column;
      align-items: center;
      .member-name {
        font-size: 20px;
        margin: 20px 0px;
      }
      .member-image {
        width: 200px;
        border: 2px solid #eeeeee;
      }
    }
  }
`;
