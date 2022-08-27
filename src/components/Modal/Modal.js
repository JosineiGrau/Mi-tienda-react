import "./Modal.css"

const Modal = ({children,pH,pV,setModal,modal,width,height="100px",message="alert",mostrarHeader}) => {
    return(
        <>
            {
                modal && 
                    <div className="overlay" style={{justifyContent: pH, alignItems: pV }}>
                        <div className="modal" style={{width:width, minHeight:"100px", height:height}}>
                            {
                                mostrarHeader && 
                                    <div className="modal-header">
                                        <h3>{message}</h3>
                                    </div>
                            }
                           
                            <button className="icon-x" onClick={() => setModal(false)}>
                                <i className="fa-solid fa-x"></i>
                            </button>
                            <div className="modal-content">
                                {children}
                            </div>
                        </div>
                    </div>
                
            }
        </>
    )
}
export default Modal