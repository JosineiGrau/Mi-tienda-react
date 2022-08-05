import "./Footer.css"

const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <div className="footer-content container">
                    <div className="footer-resumen">
                        <div className="footer-css footer-informacion">
                            <span>INFORMACIÓN DE LA TIENDA</span>
                            <div className="enlace">
                                <a href="#"><p>Acerca de nuestra tienda</p></a>
                            </div>
                            
                        </div>
                        <div className="footer-css footer-productos">
                            <span>PRODUCTOS</span>
                            <div className="enlace">
                                <a href="#"><p>Zapatillas</p></a>
                                <a href="#"><p>Calzado</p></a>
                                <a href="#"><p>Chimpunes</p></a>
                                <a href="#"><p>Ropa</p></a>
                            </div>
                            
                        </div>
                        <div className="footer-css footer-deportes">
                            <span>DEPORTES</span>
                            <div className="enlace">
                                <a href="#"><p>Fútbol</p></a>
                                <a href="#"><p>Running</p></a>
                                <a href="#"><p>Gym</p></a>
                                <a href="#"><p>Skateboarding</p></a>
                            </div>
                        </div>
                        <div className="footer-css footer-servicio-cliente">
                            <span>SERVICIO AL CLIENTE</span>
                            <div className="enlace">
                                <a href="#"><p>Condiciones</p></a>
                                <a href="#"><p>Sugerencias/Reclamos</p></a>
                                <a href="#"><p>Guia de Tallas</p></a>
                                <a href="#"><p>Cambios y Devoluciones</p></a>
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
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-square"></i></a>
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