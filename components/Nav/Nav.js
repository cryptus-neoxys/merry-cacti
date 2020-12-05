import Link from "next/link";
import { NavWrapper } from "./NavWrapper";

const Nav = () => {
  return (
    <NavWrapper>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">Merry Cacti</Link>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <Link href="/">Home</Link>
          </div>
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
    </NavWrapper>
  );
};

export default Nav;
