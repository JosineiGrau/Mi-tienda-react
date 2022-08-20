import "./CarWidget.css";
import { useContext } from "react";
import CartContext  from "../../context/CartContext";


const CarWidget = ({myOnClick}) => {
  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()



  return (
      <button onClick={myOnClick} className="car">
        <i className="fa fa-cart-shopping"></i>
        <span>{quantity}</span>
      </button>
   
  );
};
export default CarWidget;
