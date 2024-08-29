import { useState } from "react";
import "../pages/SingleProduct.css";
import Stars from "../../data/Stars";
const descripton = [
  {
    title:
      "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
    details:
      "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
  },
];

function CardDescription() {
  return (
    <div className=" CardDescription">
      <CardList descripton={descripton} />
    </div>
  );
}

export default CardDescription;

function CardButtons({ select, num, name, des }) {
  return (
    <button
      className={des === num ? "activer" : "card-D-btn"}
      onClick={() => select(num)}
    >
      {name}
    </button>
  );
}

function CardList() {
  const [des, setDes] = useState(0);
  return (
    <div className="CardList">
      <div>
        <CardButtons des={des} select={setDes} num={0} name="Description" />
        <CardButtons
          des={des}
          select={setDes}
          num={1}
          name="Additional Information"
        />
        <CardButtons des={des} select={setDes} num={2} name="Reviews [5]" />
      </div>
      {des <= 0 ? (
        <CardDes descripton={descripton} />
      ) : <Review /> && des == 1 ? (
        <CardAddInfo descripton={descripton} />
      ) : (
        <Review />
      )}

      <div className="card-imgs">
        <img src="/Group 106.png" alt="group" />
        <img src="/Group 107.png" alt="group" />
      </div>
    </div>
  );
}

function CardDes({ descripton }) {
  return (
    <div className="Card_des">
      {descripton.map((desc) => (
        <>
          <p>{desc.title}</p>
          <p className="des-des">{desc.details}</p>
        </>
      ))}
    </div>
  );
}

function CardAddInfo({ descripton }) {
  return (
    <div className="Card_des">
      {descripton.map((desc) => (
        <>
          <p>{desc.details}</p>
          <p>{desc.title}</p>
        </>
      ))}
    </div>
  );
}

function Review() {
  return (
    <h1>
      <Stars maxRating={5} />
    </h1>
  );
}
