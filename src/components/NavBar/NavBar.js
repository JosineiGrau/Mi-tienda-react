import "./NavBar.css"
import { Link } from 'react-router-dom';
import CarWidget from "../CarWidget/CarWidget"
import HeartWidget from "../HeartWidget/HeartWidget"
import SearchWidget from "../SearchWidget/SearchWidget"
import { useState } from "react";
import CartList from "../CartList/CartList";
import HeartList from "../HeartList/HeartList";
import User from "../User/User";
import { useAuth } from "../../context/AuthContext";

const NavBar = () =>{
    const [visibilityCart , setVisibilityCart] = useState(false)
    const [visibilityHeart , setVisibilityHeart] = useState(false)

    const { user, logout } = useAuth()

    // const img = !user.photoURL && <img src="https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo.png" alt="user-anomymo"/> || <img src={user.photoURL} alt="Userimg"/>


    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
        
    }

    const activarCart = () => {
        setVisibilityCart(true)
    }
    const desactivarCart = () => {
        setVisibilityCart(false)
    }
    const activarHeart = () => {
        setVisibilityHeart(true)
    }
    const desactivarHeart = () => {
        setVisibilityHeart(false)
    }

    return(
        <header>
            <div className="header-top">
                <div className="top-info">
                    {
                        !user && <div className="info">
                                    <button>Ayuda</button>
                                    <Link to="/login">Iniciar Sesión</Link>
                                    <Link to="/register">Registrarse</Link>
                                </div>
                    }
                </div>
            </div>
            <div className="header">
                <div className="nav-bar">
                    <Link to="/">MiTienda</Link>
                    <div className="nav">
                        {
                            visibilityCart && <div className="blur-nav"></div>
                        }
                        {
                            visibilityHeart && <div className="blur-nav"></div>
                        }
                        <nav>
                            <button className="close" id="close-nav"><i className="fa-solid fa-x"></i></button>
                            <ul>
                                <li><Link to= "/Hombre/Hombre" title="hombre">Hombre <i className="fa-solid fa-angle-right"></i></Link></li>
                                <li><Link to= "" title="mujer" >Mujer <i className="fa-solid fa-angle-right"></i></Link></li>
                                <li><Link to= "" title="niños" >Niños <i className="fa-solid fa-angle-right"></i></Link></li>
                                <li><Link to= "" title="ofertas" >Ofertas <i className="fa-solid fa-angle-right"></i></Link></li>
                                <li><Link to= "/Tecnologia/Tecnologia" title="tecnología" >Tecnología <i className="fa-solid fa-angle-right"></i></Link></li>
                            </ul>
                            <div className="preguntas">
                                <button title="ayuda">Ayuda <i className="fa-solid fa-circle-question"></i></button>
                            </div>    
                            <div className="iniciar-sesion">
                                <button title="registrarse"  className="register">Registrarse</button>
                                <button title="iniciar sesion"  className="sing-up">Iniciar Sesión</button>
                            </div>
                        </nav>

                            <CartList myOnClick={desactivarCart} myCondition={visibilityCart} other={"nav-carrito"}/>
                            <HeartList myOnClick={desactivarHeart} myCondition={visibilityHeart} other={"nav-heart"}/>

                    </div>
                    <div className="search-heart-car">
                        <SearchWidget/>
                        <HeartWidget myOnclick={activarHeart}/>
                        <CarWidget myOnClick={activarCart}/>
                        {
                            user && <User myOnclick={handleLogout}/> 
                        }

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