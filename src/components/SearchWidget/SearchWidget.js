import "./SearchWidget.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
// import { useNavigate } from "react-router-dom"

const SearchWidget = () => {
  // const navigate = useNavigate()

  const [busqueda, setBusqueda] = useState("");
  // console.log(busqueda);

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/Tecnologia/${busqueda}`)
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Buscar"
          value={busqueda}
        />
        <button className="btn">
          <FaSearch color="white" size="15px" />
        </button>
      </form>
    </div>
  );
};

export default SearchWidget;
