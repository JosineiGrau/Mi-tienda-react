import ItemListCarrusel from "../ItemListCarrusel/ItemListCarrusel";

const ProductosEnCarrusel = () => {
  return (
    <>
      <ItemListCarrusel greeting="TECNOLOGIA" genero={"Tecnologia"} />
      <ItemListCarrusel greeting="HOMBRE" genero={"Hombre"} />
      <ItemListCarrusel greeting="MUJER" genero={"Mujer"} />
      <ItemListCarrusel greeting="NIÑO/A" genero={"Niño"} />
    </>
  );
};

export default ProductosEnCarrusel;
