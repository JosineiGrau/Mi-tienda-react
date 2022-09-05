import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { getProduct } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/async";
const ItemDetailContainer = () => {
  const { productoId } = useParams();

  const getProductFromFirestore = () => getProduct(productoId);

  const { data, error, isLoading } = useAsync(getProductFromFirestore, [
    productoId,
  ]);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    console.error(error);
  }
  return <section className="item-section">{<ItemDetail {...data} />}</section>;
};

export default ItemDetailContainer;
