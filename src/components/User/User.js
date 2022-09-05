import "./User.css";
import { useRef } from "react";

const User = ({ myOnclick }) => {
  const subMenu = useRef();

  const handleClick = () => {
    subMenu.current.classList.toggle("mostrar");
  };

  return (
    <div className="user">
      <div className="user-img" onClick={handleClick}>
        <img
          src="https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo.png"
          alt="user-anomymo"
        />
      </div>
      <ul className="sub-menu-user" ref={subMenu}>
        <li>
          <button onClick={myOnclick}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default User;
