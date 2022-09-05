import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const cartUpdate = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdate = { ...prod, quantity: productToAdd.quantity };
          return productUpdate;
        } else {
          return prod;
        }
      });
      setCart(cartUpdate);
    }
  };

  useEffect(() => {
    const dataCarrito = JSON.parse(sessionStorage.getItem("cart"));
    if (dataCarrito) {
      setCart(dataCarrito);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const newCartWithOutProduct = cart.filter((prod) => prod.id !== id);
    setCart(newCartWithOutProduct);
  };

  const getQuantity = () => {
    let acc = cart.length;
    return acc;
  };

  const getPrice = () => {
    const acc = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    return acc;
  };
  const aumentar = (id) => {
    const newCart = cart.map((prod) => {
      if (prod.id === id) {
        const productoActualizado = {
          ...prod,
          quantity:
            prod.quantity < prod.stock
              ? (prod.quantity += 1)
              : (prod.quantity = prod.stock),
        };
        return productoActualizado;
      } else {
        return prod;
      }
    });
    setCart(newCart);
  };

  const descontar = (id) => {
    const newCart = cart.map((prod) => {
      if (prod.id === id) {
        const productoActualizado = {
          ...prod,
          quantity:
            prod.quantity > 1 ? (prod.quantity -= 1) : (prod.quantity = 1),
        };
        return productoActualizado;
      } else {
        return prod;
      }
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getQuantity,
        removeItem,
        clearCart,
        getPrice,
        aumentar,
        descontar,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
