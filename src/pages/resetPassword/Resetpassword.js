import { useState, useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NotificationContext from "../../components/Notification/Notification";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const { setNotification } = useContext(NotificationContext);

  const [formUser, setFormUser] = useState({
    email: "",
  });

  const [error, setError] = useState();

  const { resetPassword } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setFormUser({ ...formUser, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleResetPassword = async () => {
    try {
      await resetPassword(formUser.email);
      navigate("/login");
      setNotification(
        "Rebice su correo le llegara un link para restablecer su contraseña",
        "correcto",
        "productToCart"
      );
    } catch (error) {
      if (error.code === "auth/missing-email") {
        setError("Correo Electronico faltante");
      }
      if (error.code === "auth/invalid-email") {
        setError("Correo electrónico no válido");
      }
    }
  };

  return (
    <section className="form-reset-password">
      <form onSubmit={handleSubmit}>
        <div className="modal-reset-password">
          <div className="email">
            <input
              type="email"
              name="email"
              maxlength="50"
              onChange={handleChange}
            />
            <label htmlFor="email">Correo electronico</label>
            {error === "Correo Electronico faltante" && (
              <span className="error">{error}</span>
            )}
            {error === "Correo electrónico no válido" && (
              <span className="error">{error}</span>
            )}
          </div>
          <button onClick={handleResetPassword} className="btn-reset-password">
            Resetear Contraseña<i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
