import "./Item.css"
const Item = ({nombre, precio, img, id, stock}) =>{
    return(
        <div className="producto">
            <div className="producto-card">
                <div className="producto-precio">
                    <a title={nombre}>{nombre}</a>
                    <p>S/.{precio}</p>
                </div>
                <button className="agregar-carrito">
                    <p>VER DETALLES</p>
                    <i className="fa fa-cart-shopping"></i>
                </button>
            </div>
            <a title={nombre} className="img-card"><img src= {img} alt={nombre} /></a>
            <button className="favorito">
                <i className="fa fa-heart"></i>
            </button>
        </div>
    )
}
export default Item