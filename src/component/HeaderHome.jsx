import "../assets/pages/Home.css";
import { Link } from "react-router-dom";
function HeaderHome() {
  return (
    <div>
      <div className="header-contents">
        <div className="h-left">
          <h1>Rocket single seater</h1>
          <Link to="/shop">Shop Now</Link>
        </div>
        <img src="./Home1.png" alt="home-image" />
      </div>
    </div>
  );
}

export default HeaderHome;
