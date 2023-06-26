import Card from "../components/Card";
import data from "../models/data.json";
import { Link } from "react-router-dom";
import "../styles/shop.css"


export const Shop = () => {
  return (
    <div className="container">
      <h1>La boutique</h1>
      <div className="card_container">
        {data.items.map((item) => (
           <Link to={`:${item.id}`} key={item.id}>
            <Card
              id={item.id}
              source={item.source}
              title={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
