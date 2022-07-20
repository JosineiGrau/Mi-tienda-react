import "./NavBar.css"
import CarWidget from "../CarWidget/CarWidget"
import HeartWidget from "../HeartWidget/HeartWidget"
import SearchWidget from "../SearchWidget/SearchWidget"

const NavBar = () =>{
    return(
        <header>
            <div className="header-top">
                <div className="top-info">
                    <div className="info">
                        <button>Ayuda</button>
                        <button>Iniciar Sesión</button>
                        <button>Registrarse</button>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="nav-bar">
                    <h1>MiTienda</h1>
                    <div className="nav">
                        <div className="blur-nav"></div>
                        <nav>
                            <button className="close" id="close-nav"><i className="fa-solid fa-x"></i></button>
                            <ul>
                                <li><button title="hombre">Hombre <i className="fa-solid fa-angle-right"></i></button></li>
                                <li><button title="mujer" >Mujer <i className="fa-solid fa-angle-right"></i></button></li>
                                <li><button title="niños" >Niños <i className="fa-solid fa-angle-right"></i></button></li>
                                <li><button title="ofertas" >Ofertas <i className="fa-solid fa-angle-right"></i></button></li>
                                <li><button title="tecnología" >Tecnología <i className="fa-solid fa-angle-right"></i></button></li>
                            </ul>
                            <div className="preguntas">
                                <button title="ayuda">Ayuda <i className="fa-solid fa-circle-question"></i></button>
                            </div>    
                            <div className="iniciar-sesion">
                                <button title="registrarse"  className="register">Registrarse</button>
                                <button title="iniciar sesion"  className="sing-up">Iniciar Sesión</button>
                            </div>
                        </nav>
                        <div className="nav-carrito" id="carrito">
                            <div className="row-1">
                                <button className="close-car"><i className="fa-solid fa-x"></i></button>
                                <span className="textCarrito">CARRITO</span>
                            </div>
                            <div className="row-2">
                                <div className="producto-carrito" id="producto-carrito">
                                    <i className="fa fa-cart-shopping"></i>
                                    <p>El carrito esta vació</p>
                                </div>
                            </div>            
                        </div>
                    </div>
                    <div className="search-heart-car">
                        <SearchWidget/>
                        <HeartWidget/>
                        <CarWidget/>
                        <button className="menu-hamburguesa">
                            <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.25 22.5H11.25V20H26.25V22.5ZM26.25 16.25H3.75V13.75H26.25V16.25ZM26.25 10H11.25V7.5H26.25V10Z" fill="black"/>
                            </svg>   
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar