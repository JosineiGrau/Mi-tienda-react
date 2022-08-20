import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart);

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        } else{
            const cartUpdate = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                   const productUpdate = {...prod, quantity: productToAdd.quantity +=1}     
                   return productUpdate
                } else{
                    return prod
                }
            })
            setCart(cartUpdate)
        }
    }


    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCartWithOutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithOutProduct)
    }

    const getQuantity = () =>{
        let acc = cart.length
        return acc
    }

    const getPrice =  () => {
        const acc = cart.reduce((acc,prod) => acc + prod.price * prod.quantity, 0)
        return acc
    }
    const aumentar = (id) => {
        const newCart = cart.map(prod => {
            if(prod.id === id){
                const productoActualizado = {...prod, quantity: prod.quantity < prod.stock ? prod.quantity += 1 : prod.quantity = prod.stock}
                return productoActualizado       
            }
            else{
                return prod
            }
        })
        setCart(newCart)
            
        
    }

    const descontar = (id) => {
        const newCart = cart.map(prod => {
            if(prod.id === id){
                const productoActualizado = {...prod, quantity: prod.quantity > 1 ? prod.quantity -= 1 : prod.quantity = 1}
                return productoActualizado 
            }
            else{
                return prod
            }
        })
        setCart(newCart)
    }


    return(
        <CartContext.Provider value={{cart , addItem, getQuantity, removeItem, clearCart, getPrice, aumentar,descontar}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext