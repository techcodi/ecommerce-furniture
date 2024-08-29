import "../pages/Blog.css";
import Navpage from "../pages/Navpage";
import { Link } from "react-router-dom";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import "../pages/acc.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateAcc() {
  const [show, setShow] = useState(null);
  function handleShow() {
    setShow((show) => (show = !show));
  }

  return (
    <div className="form-page">
      {show ? <SignUp /> : <Login />}
      <p>
        <span> {show ? "Already have an account?" : "Register"}</span>{" "}
        <small
          onClick={handleShow}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {show ? "  Log in" : "SignUp"}
        </small>
      </p>
    </div>
  );
}

export default CreateAcc;

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    preventDefault(e);
  }
  const isButtonDisabled = inputValue.trim() === "" || password.trim() === "";

  return (
    <div className="form-log">
      <div className="form">
        <h2>Log In</h2>
        <form onSubmit={handleChange}>
          <label for="email">Username or email address</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <label for="password">Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            {" "}
            <input type="checkbox" /> <small>Remember me</small>
          </span>
          <button
            type="submit"
            onClick={() => navigate(`/`)}
            disabled={isButtonDisabled}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

function SignUp() {
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    e.preventDefault();
  }
  const isButtonDisabled = emailValue.trim() === "" || password.trim() === "";

  return (
    <div className="form-log">
      <div className="form">
        <h2>Sign up</h2>
        <form onSubmit={handleChange}>
          <label for="username">Username</label>
          <input type="name" required placeholder="Password" />
          <label for="email"> Email address</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
          />
          <label for="password">Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span>
            {" "}
            <input type="checkbox" /> <small>Remember me</small>
          </span>
          <button
            type="submit"
            onClick={() => navigate(`/`)}
            disabled={isButtonDisabled}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
