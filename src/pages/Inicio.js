import { useEffect, useState } from "react";
import BannerImg from "../components/BannerImg/BannerImg";
import ProductosEnCarrusel from "../components/ItemListCarruselContainer/ItemListCarruselContainer";
import NewSletter from "../components/NewSletter/NewSletter";
import Spinner from "../components/Spinner/Spinner";

const Inicio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <BannerImg img={"https://i.ibb.co/hgVm44D/Capa-1.png"} />
      <ProductosEnCarrusel />
      <NewSletter />
    </>
  );
};
export default Inicio;
