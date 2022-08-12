import "./SearchWidget.css"
import { useState } from "react"

const SearchWidget = () => {

    const [busqueda, setBusqueda] = useState("")
    console.log(busqueda);

    const handleSubmit = (e)=>{
        e.preventDefault()
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