import CategoryList from "../components/CategoryList/CategoryList"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Hombre = ({greeting}) => {
    return (
        <section>
            <h1>{greeting}</h1>
            <CategoryList 
                genero="Hombre" 
                f1="Zapatillas-Hombre" 
                f2="Ropa-Hombre" 
                f3="Zapatos-Hombre" 
                f4="Cuidado-Personal-Hombre" 
                f5="Accesorios-Hombre" 
                img1="https://i.ibb.co/T4W3230/4438864f-1632-483f-8c14-e804f2eda883.webp" 
                img2="https://i.ibb.co/fF5wTnh/132ec4ef-2d32-48b2-91b1-7a09a7ec2968.webp" 
                img3="https://home.ripley.com.pe/Attachment/WOP_5/2025247543750/2025247543750-2.jpg" 
                img4="https://images-na.ssl-images-amazon.com/images/I/81Eo248CKCL._SL1500_.jpg" 
                img5="https://static.dafiti.cl/p/casio-2929-34458-1-product.jpg" 
                N1="Zapatillas Hombre" 
                N2="Ropa Hombre" 
                N3="Zapatos Hombre" 
                N4="Cuidado Personal" 
                N5="Accesorios Hombre"/>
            <ItemListContainer genero="Hombre"/>
        </section>
    )
}
export default Hombre