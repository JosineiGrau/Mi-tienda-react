import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart);

    const addItem = (productToAdd) =>{
        setCart([...cart, productToAdd])
    }


    const clearCart = () =>{
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithOutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithOutProduct)
    }

    const getQuantity = () =>{
        let acc = 0

        cart.forEach(prod =>{
        acc = acc + prod.quantity
        })
        return acc
    }

    return(
        <CartContext.Provider value={{cart , addItem, getQuantity, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}