import "../assets/pages/Home.css";

function HomeSide() {
  return (
    <div className="h-side">
      <div className="side-home">
        <div className="side">
          <img src="./home2.png" alt="side-image" />
          <div>
            <p>Side table</p>
            <a href="/shop">View More</a>
          </div>
        </div>
        <div className="side">
          <img src="./home3.png" alt="side-image" />
          <div className="side-d">
            <p>Side table</p>
            <a href="/shop">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSide;
