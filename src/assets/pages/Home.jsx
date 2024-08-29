import Navpage from "./Navpage";
import HeaderHome from "../../component/HeaderHome";
import HomeSide from "../../component/HomeSide";
import TopPick from "../../component/TopPick";
import Group from "../../component/Group";
import HomeBlogs from "../../component/HomeBlogs";
import Footer from "../pages/Footer";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

function Home() {
  const [isLoading, setISLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetch = () => {
      setISLoading(true);
      setTimeout(() => {
        setItem();
        setISLoading(false);
      }, 2000);
    };

    fetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader">
          {" "}
          <div className="custom-loader"></div>
        </div>
      ) : (
        <header>
          <Navpage />
          <HeaderHome />
          <HomeSide />
          <TopPick />
          <Group />
          <HomeBlogs />
          <Footer />
          <MobileNav />
        </header>
      )}
    </>
  );
}

export default Home;
