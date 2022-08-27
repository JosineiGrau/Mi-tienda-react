import { useRef, useState } from "react"
import Modal from "../Modal/Modal"
import "./NewSletter.css"

const NewSletter = () => {

    const [correo, setCorreo] = useState("")

    const [modal , setModal] = useState(false)

    const handleChange = (e) => {
        setCorreo(e.target.value)
    }
    const form = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
        form.current.reset()
    }

    return(
        <>
        <section className="NewSletter">
            <div className="NewSletter-div">
                <div className="NewSletter-content"> 
                    <h4 className="NewSletter-title">NewSletter entérate de todas las novedades</h4>
                    <form className="NewSletter-form" onSubmit={handleSubmit} ref={form}>
                        <input type="email" placeholder="Correo Electronico" onChange={handleChange}/>
                        <button onClick={() => setModal(true)} disabled={correo === ""}>Enviar</button>
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
                mostrarHeader= {true}
            >
                <h4>Gracias por tu tiempo</h4>
                <span>{correo}</span>
            </Modal>
        </section>
        </>
    )
}

export default NewSletter