import Navpage from "../pages/Navpage";
import "../pages/Blog.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SellIcon from "@mui/icons-material/Sell";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Footer from "../pages/Footer";
import "../pages/footer.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MobileNav from "../pages/MobileNav";
import { useState, useEffect } from "react";

const Blogs = [
  {
    id: 0,
    image: "./Rectangle 13.png",
    title: "Going all-in with milennial design",
    time: "5 min",
    calendar: "12 Oct 2022",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 1,
    image: "./Rectangle 14.png",
    title: "Going all-in with milennial design",
    time: "5 min",
    calendar: "12 Oct 2022",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 2,
    image: "./Rectangle 15.png",
    title: "Going all-in with milennial design",
    time: "5 min",
    calendar: "12 Oct 2022",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
];

const BlogsRigth = [
  {
    id: 0,
    image: "./Rectangle 69 (4).png",
    title: "Going all-in with milennial design",
  },
  {
    id: 1,
    image: "./Rectangle 69 (3).png",
    title: "Going all-in with milennial design",
  },
  {
    id: 2,
    image: "./Rectangle 69 (2).png",
    title: "Going all-in with milennial design",
  },
  {
    id: 3,
    image: "./Rectangle 69 (1).png",
    title: "Going all-in with milennial design",
  },
  {
    id: 4,
    image: "./Rectangle 69.png",
    title: "Going all-in with milennial design",
  },
];

function Blog() {
  const [load, setLoad] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoad(true);
      setTimeout(() => {
        setItem();
        setLoad(false);
      }, 2000);
    };

    fetchData();
  }, []);

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Navpage />

      {load ? (
        <div className="loader">
          {" "}
          <div className="custom-loader"></div>
        </div>
      ) : (
        <>
          <div className="shopHead">
            <div className="shopHead_Container">
              <div className="shop-cont-details">
                <img src="./shopHeadLogo.png" alt="sgopinLogo" />
                <h2>Shop</h2>
                <span>
                  <Link to="/">Home</Link> <NavigateNextOutlinedIcon /> Blog
                </span>
              </div>
            </div>
          </div>
          <div className="blogs_items">
            <div className="blog_left">
              {Blogs.map((blog) => (
                <ul>
                  <li>
                    <img src={blog.image} alt={blog.title} />
                    <div className="blog-icons">
                      <span>
                        <PersonIcon />
                        Admin
                      </span>
                      <span>
                        {currentDate} / {currentMonth} / {currentYear}{" "}
                        <SellIcon />
                      </span>
                      <span>
                        <Inventory2Icon /> Wood
                      </span>
                    </div>
                    <h4>{blog.title}</h4>
                    <p>{blog.detail}</p>
                    <a href="/" style={{ borderBottom: "1px solid #000" }}>
                      Read More
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="blog_rigth">
              <div className="b-right-input">
                <div className="b-input">
                  <input
                    type="search"
                    placeholder="Search for moore posts here..."
                  />
                  <SearchOutlinedIcon />
                </div>
                <div className="b-cat">
                  <h3>Categories</h3>
                  <div className="b-cat-detail">
                    <a href="/shop">
                      Craft <small>2</small>{" "}
                    </a>
                    <a href="/shop">
                      Design <small>8</small>{" "}
                    </a>
                    <a href="/shop">
                      Handmade <small>7</small>{" "}
                    </a>
                    <a href="/shop">
                      Interior <small>1</small>{" "}
                    </a>
                    <a href="/shop">
                      Wood <small>1</small>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <h3>Related Posts</h3>
              {BlogsRigth.map((blogs) => (
                <ul>
                  <li>
                    <img src={blogs.image} alt={blogs.title} />
                    <div>
                      <h5>{blogs.title}</h5>
                      <span>
                        {currentDate}/ {currentMonth} /{currentYear}
                      </span>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <Stack spacing={2}>
            <Pagination count={2} variant="outlined" shape="rounded" />
          </Stack>
          <Footer />{" "}
        </>
      )}
      <MobileNav />
    </>
  );
}

export default Blog;
