import styled from "styled-components";

export const NavBarWrapper = styled.div`
  .nav-container {
    padding: 0.2em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    .nav-logo {
      font-size: 1.2em;
      font-weight: normal;
    }
    .nav-items {
      display: flex;
      .nav-item {
        margin: 0 1.5em;
      }
    }
  }
`;
