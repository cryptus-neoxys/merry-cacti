import styled from "styled-components";

export const IndexWrapper = styled.div`
  .container {
    padding: 0;
    max-width: 80vw;
    margin: 6em auto;
    display: flex;
    height: 65vh;
    align-items: center;
    justify-content: center;
    background-image: url("https://i.gifer.com/1Ktv.gif");
    background-position: center;
    background-repeat: no-repeat;
    p {
      font-family: "playfair-display";
      margin: 0;
      font-size: 6em;
      text-align: center;
    }
  }

  .info {
    margin-bottom: 5em;
    .info-group {
      display: flex;
      flex-direction: column;
      .info-img {
        width: 90%;
      }
      .desc {
        width: 90%;
        font-size: 20px;
        font-family: "playfair-display";
        padding: 1em;
        text-align: center;
      }
    }

    .center-info {
      font-size: 20px;
      font-family: playfair-display;
      width: 90%;
      margin: 1em auto;
    }

    .text-center {
      text-align: center;
    }
    .source {
      text-align: right;
      padding: 2em;
      font-size: 15px;
    }
    .column-reverse {
      flex-direction: column-reverse;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .container {
      width: 70vw;
      p {
        font-size: 10em;
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .info {
      .info-group {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .desc {
          width: 50%;
          text-align: left;
        }
        .info-img {
          width: 30%;
        }
        .text-right {
          text-align: right;
        }
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
