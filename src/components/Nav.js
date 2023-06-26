import { GrCart } from 'react-icons/gr'
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Nav = () => {

  const cart = useContext(CartContext)
  console.log(cart)
  return (
    <nav>
        <h2><Link to={'/'}>Fashion Forward</Link></h2>
        <div>
        <Link to={'/cart'}><span id='cart--num'>{cart.cartItems.length}</span><GrCart/></Link>
        </div>
    </nav>
  )
}

export default Nav