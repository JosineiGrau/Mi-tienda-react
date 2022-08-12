import "./PageCart.css"


const PageCart = () => {
    return(
        <section className="container-cart ">
            <div className="container-checkout">
                <div className="cart-template">
                    <div className="cart-template-holder">
                        <div className="empty-cart-content">
                            <h2 className="empty-cart-title">Su carrito está vacío</h2>
                            <div className="empty-cart-message">
                                <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
                            </div>
                            <div className="empty-cart-links">
                                <a href="../index.html" className="btn">Elegir productos</a>
                            </div>
                        </div>
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
                                        <td className="monetary">S/.</td>
                                    </tr>
                                    <tr className="gasto-envio">
                                        <td className="info">Gasto de envio</td>
                                        <td className="sinclass">S/.00.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="info">Total</td>
                                        <td className="monetary">S/.</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="finish-buy hide">
                            <div className="tyc">
                                <input type="checkbox" value=""/>
                                He leído y acepto los
                                <a href="#">Términos y condiciones</a>
                                y la
                                <a href="#">Política de Privacidad</a>
                            </div>
                            <div className="finalizar-compra">
                                <a href="comprarealizada.html" className="btn">Finalizar compra</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageCart