import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../styles/cart.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Cart (cart) {
  const {  cartItems } = useContext(CartContext);


const pricesArray = cartItems.map(itemPrice => {
return itemPrice.price
});
  
const totalPrice = pricesArray.reduce((prev, curr) => prev + curr, 0)

if (cartItems.length > 0){
  return (
    <main>
    <div className="cart">
    <h1>Mon panier</h1>
    <div className="cart__items">
      {cartItems.length > 0 && cartItems.map((item) => (
        <Card className="cart__card"
        key={item.id}
          source={item.source}
          title={item.title}
          subtitle={item.subtitle}
          price={item.price}
          size={item.size}
          id ={item.id}
        />
      ))}
    </div>
    <div className="cart__payment">
      <h2>Total {totalPrice} €</h2>
      <div>
        <h3>Sous-total</h3>
        <span>
          {totalPrice.toFixed(2)} €
        </span>
      </div>
      <div>
        <h3>Livraison</h3>
        <span>Gratuit</span>
      </div>
      <button ><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">PAYER</a></button>
    </div>
  </div>
  </main>
  )
} else {
  return (
    <main>
    <div className="cart">
    <h1>Mon panier</h1>
    <div className="cart__container">
      <p>Votre panier est vide. </p>
      <p><Link className="link" to={"/shop"}>Voir la boutique.</Link></p>
    </div>
    </div>
    </main>
  )
}

};
