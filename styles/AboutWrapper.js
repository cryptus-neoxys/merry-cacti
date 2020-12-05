import styled from "styled-components";

export const AboutWrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    .heading {
      font-size: 40px;
    }
    .about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin-top: 2em;
      width: 90%;
      .gif {
        width: 100%;
      }
      .heading {
        font-size: 32px;
        margin: 30px 0 30px 0;
      }
      .info {
        font-size: 20px;
        padding: 2em 0 0 0;
        text-align: justify;
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
      .about {
        width: 50%;
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
