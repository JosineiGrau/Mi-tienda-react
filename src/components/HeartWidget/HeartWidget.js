import "./HeartWidget.css";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import HeartContext from "../../context/HeartContext";

const HeartWidget = ({ myOnclick }) => {
  const { getHeart } = useContext(HeartContext);

  const quantity = getHeart();

  return (
    <button onClick={myOnclick} className="heart">
      <FaHeart size="20px" />
      <span>{quantity}</span>
    </button>
  );
};
export default HeartWidget;
