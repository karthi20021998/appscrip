import { RiSearch2Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

import TopBar from "../TopBar";
import "./index.css";

const languageOptions = [
  {
    id: 1,
    displayText: "ENG",
  },
  {
    id: 2,
    displayText: "TAMIL",
  },
  {
    id: 3,
    displayText: "HINDI",
  },
];

const Header = () => (
  <>
    <TopBar />
    <nav className="header-container">
      <div className="logo-container">
        <GiHamburgerMenu className="hamburger-icon" />
        <img
          src="https://res.cloudinary.com/dghnaymwn/image/upload/v1712461977/appscrip/Logo_xzreg4.png"
          alt="header-logo"
          className="header-logo"
        />
      </div>
      <h1 className="header-title">LOGO</h1>
      <div className="header-icons-card">
        <RiSearch2Line className="header-icons" />
        <GrFavorite className="header-icons" />
        <HiOutlineShoppingBag className="header-icons" />
        <CgProfile className="header-profile-icon" />
        <select className="header-language-card">
          {languageOptions.map((eachOption) => (
            <option key={eachOption.id} value={eachOption.displayText}>
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </nav>
    <div className="tabs-container">
      <h2 className="tabs-text">SHOP</h2>
      <h2 className="tabs-text">SKILLS</h2>
      <h2 className="tabs-text">STORIES</h2>
      <h2 className="tabs-text">ABOUT</h2>
      <h2 className="tabs-text">CONTACT US</h2>
    </div>
  </>
);

export default Header;
