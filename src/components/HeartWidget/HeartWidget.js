import { useContext } from "react"
import HeartContext from "../../context/HeartContext"
import "./HeartWidget.css"

const HeartWidget = ({myOnclick}) => {

    const {getHeart} = useContext(HeartContext)

    const quantity = getHeart()

    return(
        <button onClick={myOnclick} className="heart">    
            <i className="fa fa-heart"></i>
            <span>{quantity}</span>
        </button>
    )
}
export default HeartWidget