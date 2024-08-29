import "../assets/pages/Home.css";
import { Link } from "react-router-dom";

const TopPicksDetails = [
  {
    id: 1,
    image: "./pick1.png",
    name: "Trenton modular sofa_3",
    price: "$25,000.00",
  },
  {
    id: 2,
    image: "./pick2.png",
    name: "Granite dining tale with dining chair",
    price: "$18,000.00",
  },
  {
    id: 3,
    image: "./pick3.png",
    name: "Outdoor bar table and stool",
    price: "$25,000.00",
  },
  {
    id: 4,
    image: "./pick4.png",
    name: "Plain console with teak mirror",
    price: "$20,000.00",
  },
];

function TopPick() {
  return (
    <div className="top">
      <div className="top-head">
        <h2>Top Picks For You</h2>
        <p>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="top-container">
        {TopPicksDetails.map((top) => (
          <ul key={top.id}>
            <li>
              <img src={top.image} alt={top.name} />
              <div>
                <p className="top-li-p">{top.name}</p>
                <strong>{top.price}</strong>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <Link to="/shop">View More</Link>
    </div>
  );
}

export default TopPick;
