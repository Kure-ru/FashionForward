import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }){
    const [cartItems, setCartItems] = useState([]);
 
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item])
    console.log(cartItems)
}

return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart }}>
        {children}
    </CartContext.Provider>
)
}

export default CartContext;