import styled from "styled-components";

export const TeamWrapper = styled.div`
  .main {
    margin-top: 10px;
    .heading {
      font-size: 40px;
      text-align: center;
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
          margin-bottom: 5px;
        }
        .member-image {
          width: 200px;
          border: 2px solid #eeeeee;
        }
      }
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .main {
      margin-top: 100px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
