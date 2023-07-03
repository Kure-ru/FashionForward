import { Link, useParams, useOutletContext } from "react-router-dom";
import data from "../models/data.json";
import { BsArrowLeft } from "react-icons/bs";
import "../styles/shopitem.css";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
const generateUniqueId = require('generate-unique-id');

function getItemById(id) {
  return data.items.find((item) => item.id === id);
}

export default function ShopItem() {
  const { setCartItems, cartItems } = useContext(CartContext);

  let { id } = useParams();
  const itemId = Number(id[1]);
  const item = getItemById(itemId);

  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(size){
    const id = generateUniqueId();
    const newCartItem = {
      id: id,
      source: item.source,
      title: item.title,
      price: item.price,
      size: size,
    };

    setCartItems([...cartItems, newCartItem]);
    console.log(cartItems);
  }};

  return (
    <main className="container" >
      <div>
        <img className="container__img" alt={item.title} src={item.source} />
      </div>
      <div className="container__text">
        <Link to={"/shop"}>
          <BsArrowLeft className="arrow" />
        </Link>
        <div>
        <h1>{item.title}</h1>
        <h2>{item.price} €</h2>
        </div>
        

        <form onSubmit={handleSubmit}>
          <div>
            <label>Taille </label>
            <select
              name="size"
              id="size-select"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">-- Selectionnez une taille</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div></div>
          <button type="submit" name="cart">
            Ajouter au panier
          </button>
        </form>
      </div>
    </main>
  );
}
