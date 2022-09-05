import CategoryList from "../components/CategoryList/CategoryList";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Mujer = ({ greeting }) => {
  return (
    <section>
      <h1>{greeting}</h1>
      <CategoryList
        genero="Mujer"
        f1="Zapatillas-Mujer"
        f2="Ropa-Mujer"
        f3="Zapatos-Mujer"
        f4="Cuidado-Personal-Mujer"
        f5="Accesorios-Mujer"
        img1="https://i.ibb.co/grNrm2w/1a0c1fb4-564f-441d-93a2-f41dc5007bcd.webp"
        img2="https://falabella.scene7.com/is/image/FalabellaPE/882451387_1?wid=240&hei=240&qlt=70"
        img3="https://cdn.shopify.com/s/files/1/0536/6297/4132/products/101233ARENA_6_600x.jpg?v=1651685328"
        img4="https://www.proveedores.com/site/company/8b/54659/images/87090/proveedores-natura-siberica_crs2.jpg"
        img5="https://falabella.scene7.com/is/image/FalabellaPE/882249379_1?wid=240&hei=240&qlt=70"
        N1="Zapatillas Mujer"
        N2="Ropa Mujer"
        N3="Zapatos Mujer"
        N4="Cuidado Personal"
        N5="Accesorios Mujer"
      />
      <ItemListContainer genero="Mujer" />
    </section>
  );
};
export default Mujer;
