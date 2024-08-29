import Navpage from "./Navpage";
import Products from "../../component/Products";
import MobileNav from "../pages/MobileNav";
import Footer from "../pages/Footer";
import { useState, useEffect } from "react";
function Shop() {
  const [loading, setLoading] = useState();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetch = () => {
      setLoading(true);
      setTimeout(() => {
        setItem();
        setLoading(false);
      }, 2000);
    };
    fetch();
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          {" "}
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="shop">
          <Navpage />
          <Products />
          <Footer />
        </div>
      )}

      <MobileNav />
    </>
  );
}

export default Shop;
