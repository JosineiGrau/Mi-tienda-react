import "./PageCart.css"
import { useContext, useRef } from "react"
import CartContext from "../../context/CartContext"
// import { Link } from "react-router-dom"

const PageCart = () => {

    const {cart, removeItem,descontar,aumentar,getPrice} = useContext(CartContext)
    
    const precioTotal = getPrice()

    const tyc = useRef()
    const finalizarCompra = useRef()
    // finalizarCompra.current.classList = "disabled"
    // console.log(tyc.current.value);

    // if (tyc.current.checked) {
    //     finalizarCompra.current.classList.remove("disabled")
    // } else{
    //     finalizarCompra.current.classList.add("disabled")
    // }
    // const handleClick = () => {
    //     finalizarCompra.current.classList.remove("disabled")
    // }

    return(
        <section class="container-cart">
            <div class="container-checkout" >
                <div class="cart-template">
                    <div class="cart-template-holder">
                        <div class="empty-cart-content">
                            <h2 class="empty-cart-title">Su carrito está vacío</h2>
                            <div class="empty-cart-message">
                                <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
                            </div>
                            <div class="empty-cart-links">
                                <a href="../index.html" class="btn">Elegir productos</a>
                            </div>
                        </div>
                        <div class="cart">
                            <table class="table cart-items">
                                <thead>
                                    <tr>
                                        <th class="product" colspan="2">Producto (s)</th>
                                        <th class="product-price">Precio</th>
                                        <th class="quantity">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(prod => {
                                            const {id,name,img,price,quantity} = prod
                                            return(
                                                <tr className="product-item">
                                                    <td class="product-image">
                                                        <a href="#"><img src={img} alt={name}/></a>
                                                    </td>
                                                    <td class="product-name">
                                                        <a href="#">{name}</a>
                                                    </td>
                                                    <td class="product-price">
                                                        <span class="list-price">S/.{price * quantity}</span>
                                                    </td>
                                                    <td class="product-quantity">
                                                        <button onClick={() => aumentar(id)}>+</button>
                                                        <span>{quantity}</span>
                                                        <button onClick={() => descontar(id)}>-</button>
                                                    </td>
                                                    <td class="product-remove">
                                                        <button onClick={() => removeItem(id)}>
                                                            <i class="fa-solid fa-trash-can"></i>
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
                    <div class="price-total-template">
                        <div class="summary">
                            <table class="table"> 
                                <tbody class="totalizers">
                                    <tr class="subtotal">
                                        <td class="info">Subtotal</td>
                                        <td class="monetary">S/.{precioTotal}</td>
                                    </tr>
                                    <tr class="gasto-envio">
                                        <td class="info">Gasto de envio</td>
                                        <td class="sinclass">S/.00.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="info">Total</td>
                                        <td class="monetary">S/.{precioTotal}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="finish-buy hide">
                            <div class="tyc">
                                <input type="checkbox" ref={tyc}/>
                                He leído y acepto los
                                <a href="#">Términos y condiciones</a>
                                y la
                                <a href="#">Política de Privacidad</a>
                            </div>
                            <div class="finalizar-compra" >
                                <a href="comprarealizada.html" class="btn disabled" ref={finalizarCompra}>Finalizar compra</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageCart