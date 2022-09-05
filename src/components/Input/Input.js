import "./Input.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Input = ({
  type,
  name,
  label,
  estado,
  cambiarEstado,
  coloresBorder,
  error,
  expresionRegular,
}) => {
  const handleChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: true });
      } else {
        cambiarEstado({ ...estado, valido: false });
      }
    }
  };

  return (
    <div className="dato">
      <div className="grupo-input">
        <input
          type={type}
          name={name}
          onChange={handleChange}
          style={
            estado.valido
              ? { border: coloresBorder.correcto }
              : estado.valido === false
              ? { border: coloresBorder.error }
              : { border: "1px solid black" }
          }
          onKeyUp={validacion}
          onBlur={validacion}
        />
        {estado.valido ? (
          <FaCheckCircle size="20px" color="blue" />
        ) : estado.valido === false ? (
          <FaTimesCircle size="20px" color="red" />
        ) : null}
      </div>
      <label
        htmlFor={name}
        style={
          estado.valido
            ? {
                color: "blue",
                borderLeft: coloresBorder.correcto,
                borderRight: coloresBorder.correcto,
              }
            : estado.valido === false
            ? {
                color: "red",
                borderLeft: coloresBorder.error,
                borderRight: coloresBorder.error,
              }
            : {
                color: "black",
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
              }
        }
      >
        {label}
      </label>

      {estado.valido === false && <span>{error}</span>}
    </div>
  );
};

export default Input;
