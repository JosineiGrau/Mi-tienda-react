import { createContext, useState } from "react"
import "./Notification.css"

const Notification = ({message, color, icon}) =>{
    const icons = {
        productToCart  : <i className="fa-solid fa-circle-check"></i>,
        productoRemove : <i className="fa-solid fa-circle-xmark"></i>,
        productToHeart : <i class="fa-solid fa-heart"></i>,
    }

    const background = {
      correcto : "rgba(0,0,0,0.7)",
      error : "rgba(87,44,44,0.7)"
    }

    const styles = {
        background: background[color],
    }

    if (message === "") return

    return (
      <div className="notification" style={styles}>
          <div className="notification-p"><p>{message}</p></div>
          <div className="notification-icon">{icons[icon]}</div>
      </div>
    )
}


const NotificationContext = createContext()

export const NotificationProvider = ({children})=>{
    const [message, setMessage] = useState("")
    const [color , setColor ] = useState("")
    const [icon , setIcon] = useState("")

    const setNotification = (message, color,icon) =>{
        setMessage(message)
        setColor(color)
        setIcon(icon)
        setTimeout(() => {
            setMessage("")
        }, 3000);
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message= {message} color = {color} icon={icon}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext