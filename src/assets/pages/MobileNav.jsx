import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "../pages/MobileNav.css";

function MobileNav() {
  return (
    <div className="mobile-nav">
      <div className="mobile_con">
        <Link to="/" className="active">
          <span>
            <HomeIcon />
          </span>
          <small>Home</small>
        </Link>
        <Link to="/shop">
          <span>
            <LocalGroceryStoreIcon />
          </span>
          <small>Shop</small>
        </Link>
        <Link to="/blog">
          <span>
            {" "}
            <BookIcon />{" "}
          </span>
          <small>Blog</small>
        </Link>
        <Link to="/account">
          <span>
            <PersonIcon />
          </span>
          <small>Contact</small>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
