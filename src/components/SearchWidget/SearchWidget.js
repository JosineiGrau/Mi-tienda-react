import "./SearchWidget.css"

const SearchWidget = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Buscar"/>
            <div className="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default SearchWidget