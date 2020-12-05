import Link from "next/link";
import { NavBarWrapper } from "./NavBarWrapper";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">Merry Cacti</Link>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <Link href="/reddit">Reddit</Link>
          </div>
          <div className="nav-item">
            <Link href="/about">About</Link>
          </div>
          <div className="nav-item">
            <Link href="/team">Team</Link>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
