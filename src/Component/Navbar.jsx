import { useState } from "react";
import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import{MdOutlineClose} from "react-icons/md"
import Logo from "../image/taxsolutin.png";


const Navbar = () => {
  const[isNavShowing,setIsNavShowing]=useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={()=>setIsNavShowing(false)}>
          <img src={Logo} alt="Nav-logo" style={{  "width": "250px",
  "height": "72px"}}/>
        </Link>
        <ul className={`nav__links ${isNavShowing?"show__nav":"hide__Nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}  >
                <NavLink to={path} className={({isActive})=>isActive?"active-nav":" "} onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
         {
          isNavShowing?<MdOutlineClose/>:<GoThreeBars/>
         }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
