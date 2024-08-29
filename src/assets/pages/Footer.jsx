import "../pages/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div>
          <small className="f-cln">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </small>
        </div>
        <div className="footer-r">
          <div className="f-ul">
            <ul>
              <li>
                <a href="/" className="f-cln">
                  Links
                </a>
              </li>
              <li>
                <a href="/">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/shop">Shop</a>
              </li>
              <li>
                {" "}
                <a href="/about">About</a>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <li className="f-cln">Help</li>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <ul className="f-form">
              <li className="f-cln">Newsletter</li>

              <li>
                <input
                  type="text"
                  placeholder="Enter your email to subscribe to our newsletter"
                />
                <a href="/blog">SUBSCRIBE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <small>2022 Meubel House. All rights reverved</small>
      </div>
    </footer>
  );
}

export default Footer;
