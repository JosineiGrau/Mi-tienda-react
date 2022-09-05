import "./CarWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CarWidget = ({ myOnClick }) => {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();

  return (
    <button onClick={myOnClick} className="car">
      <FaShoppingCart size="20px" />
      <span>{quantity}</span>
    </button>
  );
};
export default CarWidget;
