import React from "react";
import { useState, useEffect } from "react";
import Navpage from "./Navpage";
import { useParams, Link } from "react-router-dom";
import productItems from "../../data/products"; // Adjust the path to your file
import "../pages/SingleProduct.css";
import CardDescription from "./CardDescription";
import Stars from "../../data/Stars";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Footer from "../pages/Footer";
import MobileNav from "../pages/MobileNav";
function SingleProduct() {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  // Find the product by ID across all product sets
  const product = productItems
    .flatMap((set) => set.items)
    .find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    if (count <= 0) {
      return null;
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setProducts();
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <>
      <>
        {loading ? (
          <div className="loader">
            {" "}
            <div className="custom-loader"></div>
          </div>
        ) : (
          <div className="single-pro">
            <Navpage />
            <div className="single-pro-con">
              <div className="single-p">
                <div className="single-img">
                  <img
                    src={`${/public/}/${product.image}`}
                    alt={product.title}
                  />
                </div>
                <div className="single_right">
                  <h3>{product.title}</h3>
                  <p className="s-price">{product.price}</p>
                  <div className="s-star">
                    <Stars maxRating={5} /> | <span>5 Customers Review</span>
                  </div>
                  <p className="s-detail">{product.details}</p>
                  <small style={{ color: "#9f9f9f" }}>Size</small>
                  <div className="s-small">
                    <small>L</small>
                    <small>XL</small>
                    <small>X5</small>
                  </div>
                  <small style={{ color: "#9f9f9f" }}>Color</small>
                  <div className="s-colors">
                    <span
                      className="blue"
                      style={{ backgroundColor: "#6d6dfa" }}
                    ></span>
                    <span
                      className="black"
                      style={{ backgroundColor: "black" }}
                    ></span>
                    <span
                      className="yellow"
                      style={{ backgroundColor: "yellow" }}
                    ></span>
                  </div>

                  <div className="s-down">
                    <Link to="/shop">Back</Link>

                    <div className="s-btns">
                      <button onClick={() => handleDecrease()}>-</button>
                      <span>{count}</span>
                      <button onClick={() => handleIncrease()}>+</button>
                    </div>

                    {count <= 0 ? null : (
                      <button className="s-add">Add To Cart</button>
                    )}
                  </div>
                  <div className="more_detaiils_card">
                    <div>
                      <small>SKU</small>
                      <small>Category</small>
                      <small>Tags</small>
                      <small>Share</small>
                    </div>
                    {/*  */}
                    <div>
                      <small>: SSD01</small>
                      <small>: Sofa</small>
                      <small>: Sofa Chair , Home , Shop</small>
                      <small>
                        <FacebookOutlinedIcon /> <LinkedInIcon />{" "}
                        <TwitterIcon />
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardDescription />
            <RelatedPosts />
            <Footer />
          </div>
        )}
      </>

      <MobileNav />
    </>
  );
}

export default SingleProduct;
const itemsRelated = [
  {
    id: 0,
    image: "/pick1.png",
    title: "Trenton modular sofa_3",
    price: "$25,000.00",
    details:
      " LEos, possimus ea facilis, eligendi reiciendis reprehenderit recusandae quam ducimus alias natus voluptate illum obcaecati iste dicta unde quaerat cum. Dignissimos, animi.",
  },
  {
    id: 1,
    image: "/shop2.png",
    title: "Kent coffee table ",
    price: "$25,000.00",
    details:
      " LEos, possimus ea facilis, eligendi reiciendis reprehenderit recusandae quam ducimus alias natus voluptate illum obcaecati iste dicta unde quaerat cum. Dignissimos, animi.",
  },
  {
    id: 2,
    image: "/shop3.png",
    title: "Round coffee table_color",
    price: "$25,000.00",
    details:
      " LEos, possimus ea facilis, eligendi reiciendis reprehenderit recusandae quam ducimus alias natus voluptate illum obcaecati iste dicta unde quaerat cum. Dignissimos, animi.",
  },
  {
    id: 3,
    image: "/shop4.png",
    title: "Reclaimed teak coffee table",
    price: "$25,000.00",
    details:
      " LEos, possimus ea facilis, eligendi reiciendis reprehenderit recusandae quam ducimus alias natus voluptate illum obcaecati iste dicta unde quaerat cum. Dignissimos, animi.",
  },
];
function RelatedPosts() {
  return (
    <>
      <h3 className="related-h3">Related post</h3>
      <div className="section-related-post">
        {itemsRelated.map((related) => (
          <ul className="related-grid">
            <li key={related.id}>
              <img src={related.image} alt={related.title} />
              <p>{related.title}</p>
              <b>{related.price}</b>
            </li>
          </ul>
        ))}
      </div>
      <span style={{ textAlign: "center" }}>
        <a href="/shop">View More</a>
      </span>
    </>
  );
}
