import { useContext, useEffect, useState } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../services/firebase"
import { addDoc, collection , documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"
import "./Checkout.css"


const Checkout = () => {
    const {cart, getPrice,clearCart} = useContext(CartContext)
    
    const[productToShow ,setProductToShow] = useState([])

    const [loading, setLoading] = useState(true)
    const [loadingOrder, setLoadingOrder] = useState(false)
    const [orderConfirmed, setOrderConfirmed] = useState(false)

    const [id, setId] = useState("")    

    const [error, setError] = useState("")

    const [productosSinStock,setProductosSinStock] = useState([])



    const total = getPrice()

    const [userOrder, setUserOrder] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        items: cart,
        total,
        date: new Date()
    })
    
    const handleChange = ({target:{name,value}}) => {
        setUserOrder({...userOrder, [name]:value })
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
    })

    const createOrder = async (e) => {
        e.preventDefault()
        try {
            setLoadingOrder(true)
            
            const ids = cart.map(prod => prod.id)
            
            const productRef = collection(db,"productsList")

            const productsAddedFromFB = await getDocs(query(productRef,where(documentId(), "in", ids)))
            
            const { docs } = productsAddedFromFB
            
            
            const productsOutOfStock = []
            

            setProductosSinStock(productsOutOfStock)
            
            const batch = writeBatch(db)

            docs.forEach(doc =>{
                const docData = doc.data()
                const stockFromFB = docData.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockFromFB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockFromFB - prodQuantity })
                } else {
                    productsOutOfStock.push({id: doc.id, ...docData})
                }
            })

            setProductToShow(cart)
            
            if (productsOutOfStock.length === 0) {
                await batch.commit()
                
                const orderRef = collection(db,"orders")
                const orderAdded = await addDoc(orderRef,userOrder)
                console.log(orderAdded);
                setId(orderAdded.id)
                clearCart()
                setOrderConfirmed(true)
            } else{
                setError("Hay productos que estan fuera de stock")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingOrder(false)
        }
        
    }

    if(loading) {
        return(
            <div className="preloader">
                <div className="preloader-content">
                    <div className="carga"></div>
                </div>
             </div>
        )
    }

    // const removeItems = () => {

    //     productosSinStock.forEach(doc =>{

    //         const newCartWithOutProduct = cart.filter(prod => prod.id !== doc.id)

    //         setCart(newCartWithOutProduct)

    //     })
    // }
    
    return(
        <>
            <section className="checkout">
                <form className="form-checkout" onSubmit={createOrder}>
                    <div className="modal-check-out">
                        {
                            error === "Hay productos que estan fuera de stock" ? (
                                <div className="productos-sin-stock">
                                    <div className="error">
                                        <h1>{error}</h1>
                                        <i class="fa-solid fa-face-frown"></i>
                                    </div>
                                    <div className="producto-sin-stock">
                                        {
                                            productosSinStock.map(prod=>{
                                                const {img,name,genero,id} = prod
                                                return(
                                                    <div className="producto-sin-stock-content" key={id}>
                                                        <div className="producto-sin-stock-img">
                                                            <Link to={`/${genero}/Detail/${id}`}><img src={img} alt="img-sin-stock"/></Link>
                                                        </div>
                                                        <Link to={`/${genero}/Detail/${id}`} className="producto-sin-stock-name">{name}</Link>
                                                    </div>
                                                )
                                            })
                                        } 
                                    </div>
                                    {/* <button>Eliminar productos del Carrito?</button> */}
                                </div>
                            ) : loadingOrder ? (
                                <div className="preloader">
                                    <div className="preloader-content">
                                        <div className="carga"></div>
                                    </div>
                                </div>
                            ) : orderConfirmed ? (
                                <>
                                    <h1>Compra Realizada<i className="fa-solid fa-circle-check"></i></h1>
                                    <p><strong>El Id de tu compra es:</strong> {id}</p>
                                    <div className="datos-ingresados">
                                        <div className="datos-mostrados">
                                            <p><span>Name:</span>{userOrder.name}</p>
                                        </div>
                                        <div className="datos-mostrados">
                                            <p><span>LastName:</span>{userOrder.lastname}</p>
                                        </div>
                                        <div className="datos-mostrados">
                                            <p><span>Email:</span>{userOrder.email}</p>
                                        </div>
                                        <div className="datos-mostrados"> 
                                            <p><span>Phone:</span>{userOrder.phone}</p>
                                        </div>
                                        <div className="datos-mostrados">
                                            <p><span>Address:</span>{userOrder.address}</p>
                                        </div>
                                        <div className="datos-mostrados">
                                            <p><span>Hora:</span>{userOrder.date.toString()}</p>
                                        </div>
                                        <div className="datos-mostrados">
                                            <p><span>Productos Comprados:</span></p>
                                            <div className="productos-comprados">
                                                {
                                                    productToShow.map(prod=>{
                                                        const {img,name,id} = prod
                                                        return(
                                                            <div className="producto-comprado-content" key={id}>
                                                                <div className="producto-comprado-img">
                                                                    <img src={img} alt="img-sin-stock"/>
                                                                </div>
                                                                <p className="producto-comprado-name">{name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btns"> 
                                        <Link to="/">Volver a inicio</Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                <h1>Verifique sus Datos</h1>
                                <div className="datos">
                                    <div className="name">
                                        <input type="text"  name="name" onChange={handleChange}/>
                                        <label htmlFor="name">Nombre</label>
                                    </div>
                                    <div className="lastname">
                                        <input type="text"  name="lastname" onChange={handleChange}/>
                                        <label htmlFor="lastname">Apellido</label>
                                    </div>
                                    <div className="email">
                                        <input type="email"  name="email" maxlength="50" onChange={handleChange}/>
                                        <label htmlFor="email">Correo electronico</label>
                                    </div>
                                    <div className="address">
                                        <input type="text"  name="address" onChange={handleChange}/>
                                        <label htmlFor="address">Dirección</label>
                                    </div>
                                    <div className="phone">
                                        <input type="text"  name="phone" onChange={handleChange}/>
                                        <label htmlFor="phone">Telefono</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn-crear-orden">Crear Orden</button>
                                </>
                            ) 
                        }
                    </div>
                </form>
            </section>
        </>
    )
    
}

export default Checkout