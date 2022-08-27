import { createContext, useState } from "react";

const HeartContext = createContext()

export const HeartProvider = ({children}) => {
    const [heart , setHeart ] = useState([])
    console.log(heart);

    const addItem = (productToAdd) =>{
        if(!isInHeart(productToAdd.id)){
            setHeart([...heart, productToAdd])
        // } else {
        //     const heartUpdate = heart.map(prod =>{
        //         if(prod.id === productToAdd.id){
        //             const productUpdate = {...prod, quantity: prod.quantity = 1 && 1}
        //             return productUpdate
        //         } else{
        //             return prod
        //         }
        //     })
        //     setHeart(heartUpdate)
        }
    }

    const getHeart = () =>{
        let acc = heart.length
        return acc

    }
    const isInHeart = (id) => {
        return heart.some(prod => prod.id === id)
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