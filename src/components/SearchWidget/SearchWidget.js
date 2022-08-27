import "./SearchWidget.css"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"

const SearchWidget = () => {
    // const navigate = useNavigate()

    const [busqueda, setBusqueda] = useState("")
    // console.log(busqueda);

    const handleSubmit = (e)=>{
        e.preventDefault()
        // navigate(`/Tecnologia/${busqueda}`)
    }

    const handleChange = (e)=>{
        setBusqueda(e.target.value);
    }
    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Buscar" value={busqueda}/>
                <button className="btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchWidget