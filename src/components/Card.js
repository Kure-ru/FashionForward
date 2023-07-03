import '../styles/card.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Card = ({ id, source, title, price, size }) => {
  const { setCartItems, cartItems } = useContext(CartContext);


  const handleClick = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
  }
  
  return (
    <li>
        <img src={source} alt={title}/>
        <div className='card__text'>
          <h3>{title}</h3>
        {price && <p>{price} €</p>}
        {size && <p>Taille {size} </p>}
        </div>
        <div onClick={() => handleClick(id)} className='card__close'>
          <AiOutlineCloseCircle/>
        </div>
    </li>
  )
  }

export default Card