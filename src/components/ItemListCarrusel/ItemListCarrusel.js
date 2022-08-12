import { useState, useEffect, useRef } from "react"
import { productsList } from "../../asyncMock"
import ItemCarrusel from "../ItemCarrusel/ItemCarrusel"
import "./ItemListCarrusel.css"

const ItemListCarrusel = ({greeting}) => {
    const [products, setProducts] = useState([])

    const slideShow = useRef(undefined) 

    const getProducts = () =>{
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(productsList)
            },100)
        })
    }

    const getProductsFromBack = async () => {
        try{
            const data = await getProducts()
            setProducts(data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getProductsFromBack()
    },[]);

    

    const siguiente = ()=>{
        //comprobamos si el slideShow tiene elementos
        if(slideShow.current.children.length > 0) {
            //obtenemos el primer elemento del slideShow
            const primerElemento = slideShow.current.children[0]
            //establecemos la transicion para el slideShow
            slideShow.current.style.transition = `1000ms ease-out all`;

            const tamañaSlide = slideShow.current.children[0].offsetWidth

            //movemos el slideShow
            slideShow.current.style.transform = `translateX(-${tamañaSlide + 80}px)`;

            const transicion = () =>{
                //reiniciamos la posicion del slideShow
                slideShow.current.style.transition= `none`
                slideShow.current.style.transform = `translateX(0px)`;

                //tomamos el primer elemento y lo mandamos al final
                slideShow.current.appendChild(primerElemento)
                slideShow.current.removeEventListener("transitionend", transicion)
            }
            //Evenlistener para cuando termina la animacion
            slideShow.current.addEventListener("transitionend", transicion)
        }
    }
    const anterior = ()=>{
        if(slideShow.current.children.length > 0){
            //obtenemos el ultimo elemento del slideShow
            const index = slideShow.current.children.length - 1
            const ultimoElemento = slideShow.current.children[index]
            slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild)

            slideShow.current.style.transition = "none";
            const tamañaSlide = slideShow.current.children[0].offsetWidth

            //movemos el slideShow
            slideShow.current.style.transform = `translateX(-${tamañaSlide + 80}px)`;
            
            setTimeout(()=>{
                slideShow.current.style.transition = "1000ms ease-out all";
                slideShow.current.style.transform = `translateX(0)`;
            },10)
        }
    }
    
    return(
        <section className="carrusel container-content">
            <div className="carrusel-widget">
                <h2>{greeting}</h2>
                <div className="buttons">
                    <button onClick={anterior} className="carrusel-arrow carrusel-prev"><i className="fa-solid fa-angle-left"></i></button>
                    <button onClick={siguiente} className="carrusel-arrow carrusel-next"><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
           
            <div className="carrusel-list" >
                <div className="productos" ref={slideShow}>
                    {products.map(({nombre, precio, img, id, stock}) => {
                        return(
                            <ItemCarrusel 
                            key={id}
                            nombre={nombre}
                            precio={precio}
                            img={img}
                            id={id}
                            stock={stock}
                            />
                            
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default ItemListCarrusel