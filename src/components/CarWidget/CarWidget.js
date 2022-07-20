import "./CarWidget.css"

const CarWidget = ()=>{
    return(
        <button className="car">
            <i className="fa fa-cart-shopping"></i>
            <span id="contadorCarrito">+</span>
        </button>
    )
}
export default CarWidget