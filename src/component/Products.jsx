import { useReducer } from "react";
import productItems from "../data/products";
import "../assets/pages/Shop.css";
import { Link } from "react-router-dom";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import { useNavigate } from "react-router-dom";

function ShopHead() {
  return (
    <div className="shopHead">
      <div className="shopHead_Container">
        <div className="shop-cont-details">
          <img src="./shopHeadLogo.png" alt="sgopinLogo" />
          <h2>Shop</h2>
          <span>
            <Link to="/">Home</Link> <NavigateNextOutlinedIcon /> Shop
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductFaq() {
  return (
    <div className="productFaq">
      <div className="faq_con">
        <div>
          <h3>Free Delivery</h3>
          <p>For all orders over $50, consectetur adipm scing eit.</p>
        </div>
        <div>
          <h3>90 Days Return</h3>
          <p>If goods have problems, consectetur adipm scing eit.</p>
        </div>
        <div>
          <h3>Secure Payment</h3>
          <p>100% secure payment, consectetur adipm scing eit.</p>
        </div>
      </div>
    </div>
  );
}

const initialState = {
  productItems: [],
  index: 0,
  searchQuery: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "next":
      return {
        ...state,
        index: state.index + 1,
      };

    case "search":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return {
        index,
      };
  }
}
export default function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // I use this currentItems when i dont want to add search input
  // const currentItems = productItems[state.index].items;
  const searchFilter = productItems[state.index].items.filter((item) =>
    item.title.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  return (
    <section>
      <ShopHead />
      <div className="shop-filter">
        <div className="shop-f-container">
          <div className="s-f-left">
            <span>
              <TuneOutlinedIcon />
              <b>Filter</b>
            </span>
            <GrainOutlinedIcon />
            <ViewDayOutlinedIcon />
          </div>
          <SearchInput dispatch={dispatch} />
        </div>
      </div>
      <div className="section-conatiner">
        {searchFilter.length > 0 ? (
          <ul className="grid">
            {searchFilter.map((item) => (
              <ProductList item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <NotFoundItem />
        )}

        <div className="btns">
          {searchFilter.length > 0 ? (
            <ButtonNext dispatch={dispatch} searchFilter={searchFilter} />
          ) : null}
        </div>
      </div>

      <ProductFaq />
    </section>
  );
}

function SearchInput({ dispatch, searchQuery }) {
  return (
    <input
      type="search"
      placeholder="Search for more products here..."
      value={searchQuery}
      onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
    />
  );
}

function ProductList({ item }) {
  const navigate = useNavigate();
  return (
    <li key={item.id}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <b>{item.price}</b>
      <button onClick={() => navigate(`/product/${item.id}`)}>Select</button>
    </li>
  );
}

function ButtonNext({ dispatch }) {
  return (
    <>
      <button className="btn-next" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    </>
  );
}

function NotFoundItem() {
  return (
    <h2 style={{ textAlign: "center", padding: "4rem 2rem" }}>
      ⛔Item not found
    </h2>
  );
}
