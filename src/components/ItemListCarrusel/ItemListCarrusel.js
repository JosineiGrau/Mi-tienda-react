import "./ItemListCarrusel.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/async";
import ItemCarrusel from "../ItemCarrusel/ItemCarrusel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemListCarrusel = ({ greeting, genero }) => {
  const sliderRef = useRef(undefined);
  const getProductsFromFirestore = () => getProducts(genero);

  const { dataCarrusel, error } = useAsync(getProductsFromFirestore, [genero]);

  if (error) {
    console.error(error);
  }

  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    speed: 800,
    dots: false,
  };
  return (
    <section className="carrusel container-content">
      <div className="carrusel-widget">
        <div>
          <h2>{greeting}</h2>
          <Link to={`/${genero}`}>Ver Todos</Link>
        </div>
        <div className="buttons">
          <button
            className="carrusel-arrow carrusel-prev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="carrusel-arrow carrusel-next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <div className="carrusel-list">
        <Slider ref={sliderRef} {...settings}>
          {dataCarrusel?.map(({ name, price, img, id, stock }) => {
            return (
              <ItemCarrusel
                key={id}
                name={name}
                price={price}
                img={img}
                id={id}
                stock={stock}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ItemListCarrusel;
