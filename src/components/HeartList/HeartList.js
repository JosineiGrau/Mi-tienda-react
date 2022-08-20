import { useContext } from "react";
import HeartContext from "../../context/HeartContext";
import { Link } from "react-router-dom";
import "./HeartList.css"

const HeartList = ({myCondition, myOnClick,other}) => {
    const {heart, removeItem} = useContext(HeartContext)
    
    return(
        <div className= {`${other || ""} ${myCondition === true && "activo"}`}>
            <div className="row-1">
                <button onClick={myOnClick} className="close-heart"><i className="fa-solid fa-x"></i></button>
                <span className="text-heart">FAVORITOS</span>
            </div>
            {
                heart.length === 0 ? (
                    <div className="row-2">
                        <div className="producto-heart">
                            <i className="fa fa-heart"></i>
                            <p>El corazón esta vació</p>
                        </div>
                    </div>  
                ) : (
                    <div className="lista">
                        <div className="lista-heart">
                            <div className="productos-en-heart">
                                {heart.map(prod => {
                                    const {img,name,price,id} = prod
                                    return(
                                        <div className="producto-en-heart" key={id}>
                                            <img src= {img} alt={name}/>
                                            <div class="nombre-precio">
                                                <div class="nombre-producto">
                                                    <Link to= {`/tecnologia/detail/${id}`}>{name}</Link>
                                                    <button onClick={()=> removeItem(id)}>
                                                        <i class="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                                <div class="precio">
                                                    <span>S/.{price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}               
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
    
}    

export default HeartList