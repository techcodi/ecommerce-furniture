import "../assets/pages/Home.css";
import { Link } from "react-router-dom";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const Blogs = [
  {
    id: 0,
    image: "./Rectangle 13.png",
    title: "Going all-in with milennial design",
    time: "5 min",
    calendar: "12 Oct 2022",
  },
  {
    id: 1,
    image: "./Rectangle 14.png",
    title: "Going all-in with milennial design",
    time: "5 min",
    calendar: "12 Oct 2022",
  },
  {
    id: 2,
    image: "./Rectangle 15.png",
    title: "Going all-in with milennial design",
    time: "5 min",
    calendar: "12 Oct 2022",
  },
];

function HomeBlogs() {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  return (
    <div className="blogs">
      <div className="blog-head">
        <h2>Our Blogs</h2>
        <p>Find a bright ideal to suit your taste with our great selection</p>
      </div>
      <div className="blog-container">
        {Blogs.map((blog) => (
          <ul className="blog-ul">
            <li>
              <img src={blog.image} alt={blog.title} />
              <small>{blog.title}</small>
              <a href="/blog">Read More</a>
              <div className="b-small">
                <small>
                  {" "}
                  <AccessTimeFilledOutlinedIcon /> {blog.time}{" "}
                </small>

                <small>
                  <CalendarMonthOutlinedIcon /> {currentDate} / {currentMonth} /{" "}
                  {currentYear}
                </small>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="blog-head">
        <a href="/blog">View All Post</a>
      </div>

      <div className="instagram">
        <div className="insta-detail">
          <h2>Our Instagram </h2>
          <p>Follow our store on instagram</p>
          <span>
            {" "}
            <a href="https://www.instagram.com/">Follow Us</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogs;
