import "./Register.css"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [ user, setUser ] = useState({
        email: "",
        password: "",
    })

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()


    const handleChange = ({target: {name, value}}) => {
        setUser({...user ,[name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await signup(user.email, user.password)
            navigate("/login")

        } catch(error) {
            console.log(error.code);
            if (error.code === "auth/internal-error") {
                setError("Campo vacio")
            }
            if (error.code === "auth/invalid-email") {
                setError("Correo electrónico no válido")
            }
            if (error.code === "auth/weak-password"){
                setError("La contraseña debe tener más de 6 caracteres")
            }
            if(error.code === "auth/missing-email"){
                setError("Correo electrónico faltante")
            }
        }
        
    }
    return(
        <section className="registrarse">
            <form className="form-register" onSubmit={handleSubmit}>
                <div className="modal-registrarse">
                    <h1>REGÍSTRATE</h1>
                    <p>¡SI ERES NUEVO!</p>
                    <div className="formulario">
                        {/* <div className="nombre">
                            <input type="text" name="name" onChange={handleChange}/>
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="apellido">
                            <input type="text"  name="lastname" onChange={handleChange}/>
                            <label htmlFor="lastname">Apellido</label>
                        </div>
                        <div className="fecha-de-nacimiento">
                            <div className="dia">
                                <input  type="number"  name="day" onChange={handleChange} />
                                <label htmlFor="day">Día</label>
                            </div>
                            <div className="mes">
                                <input type="number"  name="month"  onChange={handleChange}/>
                                <label htmlFor="month">Mes</label>
                            </div>
                            <div className="año">
                                <input type="number" name="year"   onChange={handleChange}/>
                                <label htmlFor="year">Año</label>
                            </div>
                        </div> */}
                        
                        <div className="email">
                            <input type="email"  name="email" maxlength="50" onChange={handleChange}/>
                            <label htmlFor="email">Correo electronico</label>
                            {error === "Correo electrónico no válido" && <span className="error">{error}</span>}
                            {error === "Correo electrónico faltante" && <span className="error">{error}</span>}
                        </div>
                        <div className="password">
                            <input type="password" name="password"  onChange={handleChange}/>
                            <label htmlFor="password">Contraseña</label>
                            {error === "La contraseña debe tener más de 6 caracteres" && <span className="error">{error}</span>}
                            {error === "Campo vacio" && <span className="error">{error}</span>}
                        </div>
                        {/* <div className="sexo">
                            <div className="sexo-hombre">
                                <input type="radio"  name="sexo"  value= "hombre" onChange={handleChange}/>
                                <label htmlFor="sexo">Hombre</label>
                            </div>
                            <div className="sexo-mujer">
                                <input type="radio" name="sexo" value= "mujer" onChange={handleChange}/>
                                <label htmlFor="sexo">Mujer</label>
                            </div>
                            
                        </div> */}
                    </div>
                    <button type="submit" className="btn-registrarse">REGISTRARSE<i className="fa-solid fa-arrow-right-long"></i></button>
                </div>
            </form>
        </section>
    )
}

export default Register