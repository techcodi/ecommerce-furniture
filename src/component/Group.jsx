import "../assets/pages/Home.css";
import { Link } from "react-router-dom";

function Group() {
  return (
    <div className="group">
      <div className="group-container">
        <img src="./group (2).png" alt="groupimage" />
        <div className="group-left">
          <p>New Arrivals</p>
          <h3>Asgaard Sofa</h3>
          <a>Order Now</a>
        </div>
      </div>
    </div>
  );
}

export default Group;
