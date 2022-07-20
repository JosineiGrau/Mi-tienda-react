import "./HeartWidget.css"

const HeartWidget = () => {
    return(
        <button className="heart">    
            <i className="fa fa-heart"></i>
            <span id="contadorFavoritos">+</span>
        </button>
    )
}
export default HeartWidget