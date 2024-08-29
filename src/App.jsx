import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Shop from "./assets/pages/Shop";
import MyAccount from "./assets/pages/MyAccount";
import Blog from "./assets/pages/Blog";

import SingleProduct from "./assets/pages/SingleProduct";
import CreateAccount from "./assets/pages/CreateAccount";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
