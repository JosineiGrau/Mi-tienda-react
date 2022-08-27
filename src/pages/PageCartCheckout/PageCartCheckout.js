import "./PageCartCheckout.css"
import { useContext, useEffect, useRef, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import NotificationContext from "../../components/Notification/Notification"

const PageCartCheckout = () => {

    const {cart, removeItem,descontar,aumentar,getPrice} = useContext(CartContext)

    const [loading, setLoading] = useState(true)

    const { user } = useAuth()
    const {setNotification} = useContext(NotificationContext)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)    
        }, 1000);
    },[])
    
    const precioTotal = getPrice()
    const navigate = useNavigate()

    const tyc = useRef()
    const finalizarCompra = useRef()

    const handleClick = () => {
        finalizarCompra.current.classList.remove("disabled")
        tyc.current.checked === false &&  finalizarCompra.current.classList.add("disabled")
    }
    const finish = () => {
        navigate("/checkout")
        !user && setNotification("Debe iniciar sesión para continuar con la compra" , "error", "productRemove")
    }

    if(loading){
        return (
            <div className="preloader">
                <div className="preloader-content">
                    <div className="carga"></div>
                </div>
            </div>
        )
    }
    return(
        <section className="container-cart">
            <div className="container-checkout" >
                {
                    cart.length === 0 ? (
                            <div className="empty-cart-content">
                                <h2 className="empty-cart-title">Su carrito está vacío</h2>
                                <div className="empty-cart-message">
                                    <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
                                </div>
                                <div className="empty-cart-links">
                                    <Link to="/" className="btn">Elegir productos</Link>
                                </div>
                                
                            </div> 
                        ) : (
                            <div className="cart-template">
                                <div className="cart-template-holder">
                                    <div className="cart">
                                        <table className="table cart-items">
                                            <thead>
                                                <tr>
                                                    <th className="product" colspan="2">Producto (s)</th>
                                                    <th className="product-price">Precio</th>
                                                    <th className="quantity">Cantidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cart.map(prod => {
                                                        const {id,name,img,price,quantity} = prod
                                                        return(
                                                            <tr className="product-item" key={id}>
                                                                <td className="product-image">
                                                                    <Link to= {`/tecnologia/detail/${id}`}><img src={img} alt={name}/></Link>
                                                                </td>
                                                                <td className="product-name">
                                                                    <Link to= {`/tecnologia/detail/${id}`}>{name}</Link>
                                                                </td>
                                                                <td className="product-price">
                                                                    <span className="list-price">S/.{price * quantity}</span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <button onClick={() => aumentar(id)}>+</button>
                                                                    <span>{quantity}</span>
                                                                    <button onClick={() => descontar(id)}>-</button>
                                                                </td>
                                                                <td className="product-remove">
                                                                    <button onClick={() => removeItem(id)}>
                                                                        <i className="fa-solid fa-trash-can"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="price-total-template">
                                    <div className="summary">
                                        <table className="table"> 
                                            <tbody className="totalizers">
                                                <tr className="subtotal">
                                                    <td className="info">Subtotal</td>
                                                    <td className="monetary">S/.{precioTotal}</td>
                                                </tr>
                                                {/* <tr className="gasto-envio">
                                                    <td className="info">Gasto de envio</td>
                                                    <td className="sinclass">S/.00.00</td>
                                                </tr> */}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td className="info">Total</td>
                                                    <td className="monetary">S/.{precioTotal}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="finish-buy hide">
                                        <div className="tyc">
                                            <input type="checkbox" ref={tyc} onClick={handleClick}/>
                                            He leído y acepto los
                                            <Link to="/">Términos y condiciones</Link>
                                            y la
                                            <Link to="/">Política de Privacidad</Link>
                                        </div>
                                        <div className="finalizar-compra" >
                                            <button onClick={finish}  className={"btn disabled"} ref={finalizarCompra}>Finalizar compra</button>
                                        </div>
                                    </div>
                                </div>
                            </div>     
                        )                 
                }
            </div>
        </section>
    )
}

export default PageCartCheckout