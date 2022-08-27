import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import CategoryList from "../components/CategoryList/CategoryList"

const Tecnologia = ({greeting}) => {
    return  (
        <section>
            <h1>{greeting}</h1>
            <CategoryList 
                genero="Tecnologia" 
                f1="Celular" 
                f2="Tablet" 
                f3="Laptop" 
                f4="Televisor" 
                f5="SmartWatch" 
                img1="https://i.ibb.co/B4y3s97/galaxy-s22-phantom-black-lite-gray.webp" 
                img2="https://i.ibb.co/BVsdZQy/ipad-pro-11-3era-g.webp" 
                img3="https://i.ibb.co/k4mspbL/apple-macbook-pro.jpg" 
                img4="https://i.ibb.co/vDbPfsf/18891311-01.jpg" 
                img5="https://i.ibb.co/HC5g8nh/apple-watch-series-7.webp"
                N1="Celulares" 
                N2="Tablets" 
                N3="Laptops" 
                N4="Televisores" 
                N5="SmartWatch"/>
            <ItemListContainer genero="Tecnologia"/>
        </section>
    )
}
export default Tecnologia