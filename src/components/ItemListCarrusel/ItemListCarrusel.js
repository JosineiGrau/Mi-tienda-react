import { useState, useEffect, useRef } from "react"
import ItemCarrusel from "../ItemCarrusel/ItemCarrusel"
import { getDocs, collection, where, query } from "firebase/firestore" 
import { db } from "../../services/firebase"
import { Link } from "react-router-dom"
import "./ItemListCarrusel.css"

const ItemListCarrusel = ({greeting,genero}) => {
    const [products, setProducts] = useState([])

    const slideShow = useRef(undefined) 

    useEffect(()=>{

        const collectionRef = query(collection(db,"productsList"), where("genero", "==", genero))

        getDocs(collectionRef)
        .then((response => {
            const products = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(products.slice(0,5))
        }))
        
    },[genero]);
    
    console.log(products);
    

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
                <div>
                    <h2>{greeting}</h2>
                    <Link to={`/${genero}/${genero}`}>Ver Todos</Link>
                </div>
                <div className="buttons">
                    <button onClick={anterior} className="carrusel-arrow carrusel-prev"><i className="fa-solid fa-angle-left"></i></button>
                    <button onClick={siguiente} className="carrusel-arrow carrusel-next"><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
           
            <div className="carrusel-list" >
                <div className="productos" ref={slideShow}>
                    {products.map(({name, price, img, id, stock}) => {
                        return(
                            <ItemCarrusel 
                            key={id}
                            name={name}
                            price={price}
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