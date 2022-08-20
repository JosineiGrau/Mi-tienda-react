import { useContext} from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartList = ({myOnClick, myCondition, other}) => {

    const {cart, removeItem, getPrice, aumentar,descontar} = useContext(CartContext)



    const PrecioTotal = getPrice()
    
    return(
        <div className= {`${other || ""} ${myCondition === true && "activo"}`}>
            <div className="row-1">
                <button onClick={myOnClick} className="close-car"><i className="fa-solid fa-x"></i></button>
                <span className="textCarrito">CARRITO</span>
            </div>
            {
                cart.length === 0 ? (
                    <div className="row-2">
                        <div className="producto-carrito" id="producto-carrito">
                            <i className="fa fa-cart-shopping"></i>
                            <p>El carrito esta vació</p>
                        </div>
                    </div>  
                ) : (
                    <div className="lista-y-comprar">
                        <div className="lista-carrito">
                            <div className="productos-en-carrito">
                                {cart.map(prod => {
                                    const {img,name,price,quantity,id,stock} = prod
                                    return(
                                        <div className="producto-en-carrito" key={id}>
                                            <img src= {img} alt={name}/>
                                            <div className="filtro-nombre-precio">
                                                <div className="nombre-producto">
                                                    <Link to= {`/tecnologia/detail/${id}`}>{name}</Link>
                                                    <button onClick={()=> removeItem(id)}>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                                <div className="filtro-precio">
                                                    <div className="cantidad">
                                                        <button onClick={() => descontar(id)} disabled={quantity === 1 ? true : null}> - </button>
                                                        <span className="numeroCantidad">{quantity}</span>
                                                        <button onClick={() => aumentar(id)} disabled={quantity  === stock ? true :  null} > + </button>
                                                    </div>
                                                    <span>S/.{quantity * price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}               
                            </div>
                        </div>
                        <div className="comprar-ahora" id="comprar-ahora">
                            <div className="precioTotal">
                                <p>Precio Total: S/.<span>{PrecioTotal}</span></p>  
                            </div>
                                <p>Simula el costo de envío en el siguiente paso.</p>
                            <div className="comprar">
                                <Link to={"/cart-checkout"} >COMPRAR AHORA</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CartList