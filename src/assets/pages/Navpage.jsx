import { NavLink } from "react-router-dom";
import "./Nav.css";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Navpage() {
  return (
    <nav>
      <div className="nav-container">
        <b>🛋️HomeTech</b>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/account">Contact</NavLink>
          </li>
        </ul>
        <div className="nav-icons">
          <NavLink to="/account">
            <PermIdentityIcon />
          </NavLink>
          <NavLink to="/shop">
            <SearchOutlinedIcon />
          </NavLink>
          <NavLink to="/account">
            <FavoriteBorderIcon />
          </NavLink>
          <NavLink>
            <ShoppingCartOutlinedIcon />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navpage;
