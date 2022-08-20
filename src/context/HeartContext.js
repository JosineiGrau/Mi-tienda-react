import { createContext, useState } from "react";

const HeartContext = createContext()

export const HeartProvider = ({children}) => {
    const [heart , setHeart ] = useState([])
    console.log(heart);

    const addItem = (productToAdd) =>{
        setHeart([...heart, productToAdd])
    }

    const getHeart = () =>{
        let acc = heart.length
        return acc

    }

    const removeItem = (id) => {
        const newHeartWithOutProduct = heart.filter(prod => prod.id !== id)
        setHeart(newHeartWithOutProduct)
    }


    return(
        <HeartContext.Provider value={{heart, addItem, getHeart, removeItem}}>
            {children}
        </HeartContext.Provider>
    )
}

export default HeartContext