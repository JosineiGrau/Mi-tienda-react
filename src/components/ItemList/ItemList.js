import "./ItemList.css";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/async";

const ItemList = ({ genero }) => {
  const { categoryId, marca } = useParams();

  const getProductsFromFirestore = () => getProducts(genero, categoryId, marca);

  const { data, error, isLoading } = useAsync(getProductsFromFirestore, [
    categoryId,
    marca,
    genero,
  ]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    console.error(error);
  }

  return (
    <div className="productos-filtros container-content">
      <div className="productos">
        {data?.length === 0 ? (
          <div className="sin-productos">
            <h2>En este momento no hay productos</h2>
          </div>
        ) : (
          data?.map(({ name, price, img, id, stock, genero }) => {
            return (
              <Item
                key={id}
                name={name}
                price={price}
                img={img}
                id={id}
                genero={genero}
                stock={stock}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default ItemList;
