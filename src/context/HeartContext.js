import { createContext, useState } from "react";

const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
  const [heart, setHeart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInHeart(productToAdd.id)) {
      setHeart([...heart, productToAdd]);
    } else {
      const newHeart = heart.filter((prod) => prod.id !== productToAdd.id);
      setHeart(newHeart);
    }
  };

  const getHeart = () => {
    let acc = heart.length;
    return acc;
  };
  const isInHeart = (id) => {
    return heart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const newHeartWithOutProduct = heart.filter((prod) => prod.id !== id);
    setHeart(newHeartWithOutProduct);
  };

  return (
    <HeartContext.Provider value={{ heart, addItem, getHeart, removeItem }}>
      {children}
    </HeartContext.Provider>
  );
};

export default HeartContext;
