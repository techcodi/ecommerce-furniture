import { useState, useEffect } from "react";
import "../component/Loader.css";

function Loader() {
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
  return (
    <div className="loader">
      {" "}
      <div className="custom-loader"></div>
    </div>
  );
}

export default Loader;
