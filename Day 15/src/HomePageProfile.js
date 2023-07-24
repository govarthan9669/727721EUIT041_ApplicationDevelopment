// import React, { useRef } from "react";
// import "./Profile.css";
// import { useDetectOutsideClick } from "./useDetectOutsideClick";
// import {Link} from 'react-router-dom'

// /*
//  * Read the blog post here:
//  * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
//  */
// export default function HomePageProfile() {
//   const dropdownRef = useRef(null);
//   const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
//   const onClick = () => setIsActive(!isActive);

//   return (
//     <div className="container">
//       <div className="menu-container">
//         <button onClick={onClick} className="menu-trigger">
//           <span>User</span>
//           <img
//             src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
//             alt="User avatar"
//           />
//         </button>
//         <nav
//           ref={dropdownRef}
//           className={`menu ${isActive ? "active" : "inactive"}`}
//         >
//           <ul>
//             <li>
            
//            <Link to="/ProfileP" >  Profile </Link>
              
//             </li>
//             <li>
//               <Link to="/order">Track your Order</Link>
//             </li>
//             <li>
//               <Link to="/FeedbackM">Feedback</Link>
//             </li>
//             <li>
//               <a href="#">Log-out</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import "./Profile.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Person, LocalShipping, Chat, ExitToApp } from '@mui/icons-material';

export default function HomePageProfile() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  // Inline styles for the icons
  const iconStyle = { marginRight: '13px' };

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
          <Avatar
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
              <Link to="/ProfileP">
                <Person fontSize="small" style={iconStyle} />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/order">
                <LocalShipping fontSize="small" style={iconStyle} />
                Track your Order
              </Link>
            </li>
            <li>
              <Link to="/FeedbackM">
                <Chat fontSize="small" style={iconStyle} />
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/">
                <ExitToApp fontSize="small" style={iconStyle} />
                Log-out
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
