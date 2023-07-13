import React, { useRef } from "react";
import "./Profile.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import {
    AiOutlineSetting,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineProfile,
    AiOutlineDelete
  } from "react-icons/ai";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function HomePageProfile() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
            
              <a href="#">Profile</a>
              
            </li>
            <li>
              <a href="#">Add account</a>
            </li>
            <li>
              <a href="#">Log-out</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
