import React, { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    const saveStateToLocalStorage = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('cartState', serializedState);
        } catch (error) {
            console.error('Error saving cart state to local storage:', error);
        }
    };

    const loadStateFromLocalStorage = () => {
        try {
          const serializedState = localStorage.getItem('cartState');
          if (serializedState === null) {
            return [];
          }
          return JSON.parse(serializedState);
        } catch (error) {
          console.error('Error loading cart state from local storage:', error);
          return [];
        }
      };
    

    useEffect(() => {
        const loadedCartState = loadStateFromLocalStorage();
        setCartProducts(loadedCartState);
    }, []);

    useEffect(() => {
        if (cartProducts.length !== 0) {
            saveStateToLocalStorage(cartProducts);
        }
    }, [cartProducts]);

    const addToCart = (product) => {
        setCartProducts((currentItems) => {
            if (currentItems.find((item) => item.id === product.id) == null) {
                return [...currentItems, { ...product, cartQuantity: 1 }];
            } else {
                return currentItems.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, cartQuantity: item.cartQuantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeOne = (id) => {
        setCartProducts((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.cartQuantity === 1) {
                return currentItems.filter((item) => item.id !== id);
            } else {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, cartQuantity: item.cartQuantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeAll = (id) => {
        setCartProducts((currentItems) => {
            return currentItems.filter((item) => item.id !== id);
        });
    };

    const isInCart = (id)=>{
        return cartProducts.some((cartProduct) => cartProduct.id === id);
    }

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeOne, removeAll,isInCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartProducts() {
    const cartContext = useContext(CartContext);
    return cartContext;
}
