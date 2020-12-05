import styled from "styled-components";

export const NavWrapper = styled.div`
  .nav-container {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1.2em;
    font-weight: bold;
    .nav-logo {
      font-size: 1.2em;
      font-weight: normal;
    }
    .nav-items {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-end;

      .nav-item {
        /* margin: 0 1em; */
        display: none;
      }
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .nav-container {
      .nav-items {
        flex-direction: row;
        .nav-item {
          margin: 0 1em;
          display: block;
        }
        .nav-menu {
          display: none;
        }
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
