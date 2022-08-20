import "./Login.css"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {

    const [ user, setUser ] = useState({
        email: "",
        password: "",
    })

    const {login,loginWithGoogle} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()


    const handleChange = ({target: {name, value}}) => {
        setUser({...user ,[name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await login(user.email, user.password)
            navigate("/")

        } catch(error) {

            console.log(error.code);

            if (error.code === "auth/user-not-found"){
                setError("Cuenta no encontrada")
            }
            if (error.code === "auth/wrong-password") {
                setError("Contraseña incorrecta")
            }
            if (error.code === "auth/invalid-email") {
                setError("Correo electrónico no válido")
            }
            if (error.code === "auth/too-many-requests") {
               setError("Demasiados intentos")     
            }
            if(error.code === "auth/internal-error") {
               setError("Campo vacio")     
            }
        }
        
    }

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle()
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }
    return(
        <section className="iniciar-sesion">
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="modal-iniciar-sesion">
                    <h1>INICIAR SESIÓN</h1>
                    <div className="btns-terceros">
                        <div className="btns-login">
                            <div onClick={handleGoogleSignin} className="btn-iniciar-sesion-tercero"><i class="fa-brands fa-google"></i></div>
                        </div>
                    </div>   
                    {error === "Cuenta no encontrada" && <span className="error">{error}</span>}
                    {error === "Demasiados intentos" && <span className="error">{error}</span>}
                    <div className="email-password">
                        <div className="email">
                            <input type="email"  name="email" maxlength="50" onChange={handleChange}/>
                            <label htmlFor="email">Correo electronico</label>
                            {error === "Correo electrónico no válido" && <span className="error">{error}</span>}
                        </div>
                        <div className="password">
                            <input type="password"  name="password" onChange={handleChange} />
                            <label htmlFor="password">Contraseña</label>
                            {error === "Contraseña incorrecta" && <span className="error">{error}</span>}
                            {error === "Campo vacio" && <span className="error">{error}</span>}
                        </div>
                    </div>
                    {/* <div className="checkbox">
                        <input type="checkbox" name="sesion-abierta" /> 
                        <label htmlFor="sesion-abierta"> Mantener sesión abierta. <a href="#">Más información</a> </label>
                    </div> */}
                    <button type="submit" className="btn-iniciar-sesion">Iniciar Sesión<i className="fa-solid fa-arrow-right-long"></i></button>
                    <div className="btn-register">
                            <Link to ="/register">Registrarse<i className="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Login