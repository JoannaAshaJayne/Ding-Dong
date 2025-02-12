import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

//styles
import "../styles/NavBar.css";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async (event) => {
    event.preventDefault();
    await logout();
    history.push("/");
  };

  return (
    <div className="StyledNavWrap">
      <ul className="StyledNav">
        {currentUser && (
          <>
            <li>
              <Link className="navLink" to="/">
                DingDong
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/create">
                Add Tennant
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/about-us">

                About
              </Link>
            </li>

            <li>
              <Link to="/" onClick={handleLogout}>
                Log out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default NavBar;
