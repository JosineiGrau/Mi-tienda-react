import "./Checkout.css";
import { FaCheckCircle, FaFrown, FaExclamationTriangle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";
import { getProductsCheckOut } from "../../services/firebase/firestore";

const Checkout = () => {
  const { cart, getPrice, clearCart, removeItem } = useContext(CartContext);
  const total = getPrice();

  const [productToShow, setProductToShow] = useState([]);

  const [loading, setLoading] = useState(true);

  const [loadingOrder, setLoadingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [productosSinStock, setProductosSinStock] = useState([]);

  const [name, setName] = useState({ campo: "", valido: null });
  const [lastname, setLastName] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [phone, setPhone] = useState({ campo: "", valido: null });
  const [address, setAddress] = useState({ campo: "", valido: null });
  const [formularioValido, setFormularioValido] = useState(null);

  const userOrder = {
    buyer: {
      name: name.campo,
      lastname: lastname.campo,
      email: email.campo,
    },
    phone: phone.campo,
    address: address.campo,
    items: cart,
    total,
    date: new Date(),
  };
  const expresiones = {
    name: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
    lastname: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
    email:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    telefono: /^\d{7,14}$/,
    address: /([a-z ]{2,}\s{0,1})(\d{0,3})(\s{0,1}\S{2,})?/i,
  };

  const coloresForm = {
    correcto: "1px solid blue",
    error: "1px solid red",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  const createOrder = async (e) => {
    e.preventDefault();
    try {
      if (
        name.valido === true &&
        lastname.valido === true &&
        email.valido === true &&
        phone.valido === true &&
        address.valido === true
      ) {
        setFormularioValido(true);

        setLoadingOrder(true);

        const ids = cart.map((prod) => prod.id);

        await getProductsCheckOut(
          ids,
          userOrder,
          setId,
          setError,
          setProductosSinStock,
          setOrderConfirmed,
          clearCart,
          cart
        );

        setProductToShow(cart);
      } else {
        setFormularioValido(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingOrder(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="checkout">
        <form className="form-checkout" onSubmit={createOrder}>
          <div className="modal-check-out">
            {error === "Hay productos que estan fuera de stock" ? (
              <div className="productos-sin-stock">
                <div className="error">
                  <h1>{error}</h1>
                  <FaFrown size="80px" />
                </div>
                {cart.length === 0 ? (
                  <div className="btns">
                    <Link to="/">Volver a inicio</Link>
                  </div>
                ) : (
                  <div className="producto-sin-stock">
                    {productosSinStock.map((prod) => {
                      const { img, name, genero, id } = prod;
                      return (
                        <>
                          <div className="producto-sin-stock-content" key={id}>
                            <div className="producto-sin-stock-img">
                              <Link to={`/${genero}/Detail/${id}`}>
                                <img src={img} alt="img-sin-stock" />
                              </Link>
                            </div>
                            <Link
                              to={`/${genero}/Detail/${id}`}
                              className="producto-sin-stock-name"
                            >
                              {name}
                            </Link>

                            <button
                              className="delete-product"
                              onClick={() => removeItem(id)}
                            >
                              Borrar Producto
                            </button>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : loadingOrder ? (
              <Spinner />
            ) : orderConfirmed ? (
              <>
                <h1>
                  Compra Realizada
                  <FaCheckCircle />
                </h1>
                <p>
                  <strong>El Id de tu compra es:</strong> {id}
                </p>
                <div className="datos-ingresados">
                  <div className="datos-mostrados">
                    <p>
                      <span>Name:</span>
                      {userOrder.buyer.name}
                    </p>
                  </div>
                  <div className="datos-mostrados">
                    <p>
                      <span>LastName:</span>
                      {userOrder.buyer.lastname}
                    </p>
                  </div>
                  <div className="datos-mostrados">
                    <p>
                      <span>Email:</span>
                      {userOrder.buyer.email}
                    </p>
                  </div>
                  <div className="datos-mostrados">
                    <p>
                      <span>Phone:</span>
                      {userOrder.phone}
                    </p>
                  </div>
                  <div className="datos-mostrados">
                    <p>
                      <span>Address:</span>
                      {userOrder.address}
                    </p>
                  </div>
                  <div className="datos-mostrados">
                    <p>
                      <span>Hora:</span>
                      {userOrder.date.toString()}
                    </p>
                  </div>
                  <div className="datos-mostrados">
                    <p>
                      <span>Productos Comprados:</span>
                    </p>
                    <div className="productos-comprados">
                      {productToShow.map((prod) => {
                        const { img, name, id } = prod;
                        return (
                          <div className="producto-comprado-content" key={id}>
                            <div className="producto-comprado-img">
                              <img src={img} alt="img-sin-stock" />
                            </div>
                            <p className="producto-comprado-name">{name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <Link to="/">Volver a inicio</Link>
                </div>
              </>
            ) : (
              <>
                <h1>Verifique sus Datos</h1>
                <div className="datos">
                  <Input
                    type="text"
                    name="name"
                    label="Nombre"
                    estado={name}
                    cambiarEstado={setName}
                    coloresBorder={coloresForm}
                    error="Debe comenzar con una Letra en Mayuscula, no puede tener números y si coloca el segundo nombre tambien debe comenzar con la primera letra en Mayuscula"
                    expresionRegular={expresiones.name}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    label="Apellido"
                    estado={lastname}
                    cambiarEstado={setLastName}
                    coloresBorder={coloresForm}
                    error="Debe comenzar con una Letra en Mayuscula, no puede tener números y si coloca el segundo apellido tambien debe comenzar con la primera letra en Mayuscula"
                    expresionRegular={expresiones.lastname}
                  />
                  <Input
                    type="email"
                    name="email"
                    label="Correo Electronico"
                    estado={email}
                    cambiarEstado={setEmail}
                    coloresBorder={coloresForm}
                    error="El correo solo puede contener letras, numeros, puntos, guiones y guien bajo."
                    expresionRegular={expresiones.email}
                  />
                  <Input
                    type="text"
                    name="phone"
                    label="Telefono"
                    estado={phone}
                    cambiarEstado={setPhone}
                    coloresBorder={coloresForm}
                    error="Debe contener al menos 7 a 14 digitos"
                    expresionRegular={expresiones.telefono}
                  />
                  <Input
                    type="text"
                    name="address"
                    label="Dirección"
                    estado={address}
                    cambiarEstado={setAddress}
                    coloresBorder={coloresForm}
                    error="Debe tener una Dirección Real"
                    expresionRegular={expresiones.address}
                  />
                </div>
                {formularioValido === false && (
                  <div className="form-invalido">
                    <span>
                      <FaExclamationTriangle />
                      Por favor rellena el formulario correctamente.
                    </span>
                  </div>
                )}
                <button type="submit" className="btn-crear-orden">
                  Crear Orden
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
