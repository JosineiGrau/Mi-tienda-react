import "./Register.css";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Register = () => {
  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setFormUser({ ...formUser, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(formUser.email, formUser.password);
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Campo vacio");
      }
      if (error.code === "auth/invalid-email") {
        setError("Correo electrónico no válido");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener más de 6 caracteres");
      }
      if (error.code === "auth/missing-email") {
        setError("Correo electrónico faltante");
      }
    }
  };
  return (
    <section className="registrarse">
      <form className="form-register" onSubmit={handleSubmit}>
        <Link className="volver-inicio" to="/">
          <FaAngleLeft />
          Volver a Inicio
        </Link>
        <div className="modal-registrarse">
          <h1>REGÍSTRATE</h1>
          <p>¡SI ERES NUEVO!</p>
          <div className="formulario">
            <div className="email">
              <input
                type="email"
                name="email"
                maxlength="50"
                onChange={handleChange}
              />
              <label htmlFor="email">Correo electronico</label>
              {error === "Correo electrónico no válido" && (
                <span className="error">{error}</span>
              )}
              {error === "Correo electrónico faltante" && (
                <span className="error">{error}</span>
              )}
            </div>
            <div className="password">
              <input type="password" name="password" onChange={handleChange} />
              <label htmlFor="password">Contraseña</label>
              {error === "La contraseña debe tener más de 6 caracteres" && (
                <span className="error">{error}</span>
              )}
              {error === "Campo vacio" && (
                <span className="error">{error}</span>
              )}
            </div>
          </div>
          <button type="submit" className="btn-registrarse">
            REGISTRARSE<i className="fa-solid fa-arrow-right-long"></i>
          </button>
          <div className="btn-login">
            <Link to="/login">
              Login<i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
