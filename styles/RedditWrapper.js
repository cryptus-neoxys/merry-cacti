import styled from "styled-components";

export const RedditWrapper = styled.div`
  .main {
    margin-top: 10px;
    .heading {
      font-size: 40px;
      text-align: center;
    }
    .info {
      font-size: 20px;
      width: 80%;
      text-align: center;
      margin: 30px auto;
    }
    .comments {
      margin-top: 10px;
      margin: 0 auto;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .main {
      margin-top: 100px;
      .info {
        width: 50%;
        text-align: center;
      }
      .comments {
        margin-top: 100px;
        max-width: 450px;
      }
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
