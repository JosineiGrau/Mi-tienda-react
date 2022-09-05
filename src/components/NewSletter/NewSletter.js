import "./NewSletter.css";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const NewSletter = () => {
  const [correo, setCorreo] = useState({ campo: "", valido: null });

  const [modal, setModal] = useState(false);

  const expresiones = {
    email:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
  };

  const coloresForm = {
    correcto: "1px solid blue",
    error: "1px solid red",
  };

  const handleChange = (e) => {
    setCorreo({ ...correo, campo: e.target.value });
  };

  const validacion = () => {
    if (expresiones.email) {
      if (expresiones.email.test(correo.campo)) {
        setCorreo({ ...correo, valido: true });
      } else {
        setCorreo({ ...correo, valido: false });
      }
    }
  };

  const form = useRef();
  const button = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correo.valido === true) {
      setModal(true);
      form.current.reset();
    }
    setCorreo({ campo: "", valido: null });
  };

  return (
    <>
      <section className="NewSletter">
        <div className="NewSletter-div">
          <div className="NewSletter-content">
            <h4 className="NewSletter-title">
              NewSletter entérate de todas las novedades
            </h4>
            <form
              className="NewSletter-form"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="grupo">
                <div className="grupo-input">
                  <input
                    type="email"
                    placeholder="Correo Electronico"
                    onChange={handleChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    style={
                      correo.valido
                        ? { border: coloresForm.correcto }
                        : correo.valido === false
                        ? { border: coloresForm.error }
                        : { border: "1px solid black" }
                    }
                  />
                  {correo.valido ? (
                    <FaCheckCircle size="20px" color="blue" />
                  ) : correo.valido === false ? (
                    <FaTimesCircle size="20px" color="red" />
                  ) : null}
                </div>
                {correo.valido === false && (
                  <span>
                    El correo solo puede contener letras, numeros, puntos,
                    guiones y guien bajo.
                  </span>
                )}
              </div>
              <button
                disabled={correo.campo === "" || correo.valido === false}
                ref={button}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <Modal
          pH="center"
          pV="center"
          setModal={setModal}
          modal={modal}
          width="500px"
          height="300px"
          message="Correo Ingresado"
          mostrarHeader={true}
        >
          <h4>Gracias por tu suscribirte</h4>
          <span>
            Te estaran llegando mensajes a tu correo para que te enteres de
            todas las novedades
          </span>
        </Modal>
      </section>
    </>
  );
};

export default NewSletter;
