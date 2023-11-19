import React, { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    const saveStateToLocalStorage = (state) => {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    };

    const loadStateFromLocalStorage = () => {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
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

    const addToCart = (product,n) => {
        setCartProducts((currentItems) => {
            if (currentItems.find((item) => item.id === product.id) == null) {
                return [...currentItems, { ...product, cartQuantity: n }];
            } else {
                return currentItems.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, cartQuantity: item.cartQuantity + n };
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
                const arr = currentItems.filter((item) => item.id !== id)
                saveStateToLocalStorage(arr)
                return arr;
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
            const arr = currentItems.filter((item) => item.id !== id)
            saveStateToLocalStorage(arr)
            return arr;
        });
    };

    const isInCart = (id) => {
        return cartProducts.some((cartProduct) => cartProduct.id === id);
    }

    const clearCart = () => {
        saveStateToLocalStorage([])
        setCartProducts([])
    }

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeOne, removeAll, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartProducts() {
    const cartContext = useContext(CartContext);
    return cartContext;
}
