import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <div className="footer-content container">
                    <div className="footer-resumen">
                        <div className="footer-css footer-informacion">
                            <span>INFORMACIÓN DE LA TIENDA</span>
                            <div className="enlace">
                                <Link to= "/"><p>Acerca de nuestra tienda</p></Link>
                            </div>
                            
                        </div>
                        <div className="footer-css footer-productos">
                            <span>PRODUCTOS</span>
                            <div className="enlace">
                                <Link to= "/"><p>Zapatillas</p></Link>
                                <Link to= "/"><p>CLinklzLinkdo</p></Link>
                                <Link to= "/"><p>Chimpunes</p></Link>
                                <Link to= "/"><p>Ropa</p></Link>
                            </div>
                            
                        </div>
                        <div className="footer-css footer-deportes">
                            <span>DEPORTES</span>
                            <div className="enlace">
                                <Link to= "/"><p>Fútbol</p></Link>
                                <Link to= "/"><p>Running</p></Link>
                                <Link to= "/"><p>Gym</p></Link>
                                <Link to= "/"><p>Skateboarding</p></Link>
                            </div>
                        </div>
                        <div className="footer-css footer-servicio-cliente">
                            <span>SERVICIO AL CLIENTE</span>
                            <div className="enlace">
                                <Link to= "/"><p>Condiciones</p></Link>
                                <Link to= "/"><p>Sugerencias/Reclamos</p></Link>
                                <Link to= "/"><p>Guia de Tallas</p></Link>
                                <Link to= "/"><p>Cambios y Devoluciones</p></Link>
                            </div>
                        </div>
                        <div className="footer-css footer-contacto">
                            <span>CONTACTANOS</span>
                            <div className="enlace">
                                <div className="ubicacion"><i className="fa-solid fa-location-dot"></i></div>
                                <div className="telefono"><i className="fa-solid fa-phone"></i></div>
                                <div className="correo"><i className="fa-solid fa-envelope"></i></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="redes-sociales">
                        <Link to= "/" ><i className="fa-brands fa-instagram"></i></Link>
                        <Link to= "/" ><i className="fa-brands fa-facebook-square"></i></Link>
                    </div>
                </div>
            </div>
            <div className="franja">
                <div className="franja-content">
                    <p>&copy;Mi tienda 2022</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer