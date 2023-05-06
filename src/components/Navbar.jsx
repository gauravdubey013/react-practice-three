import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar =() => {
        setOpenLinks(!openLinks);
      }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src="https://thumbs.dreamstime.com/b/indian-food-logo-round-linear-turban-spoon-yellow-background-eps-166330970.jpg" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link><br/>
          <Link to="/signUp"> Sign Up </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/signUp"> Sign Up </Link>
        <button
          onClick={toggleNavbar}
        >
          <ReorderOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
