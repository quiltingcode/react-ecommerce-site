import { createContext, useEffect, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems container productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id
    );

    // If found, imcrement quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // return new array with modified cartItems/new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
        setCartCount(cartItems.length + 1)
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
    
}