import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import readyDark from "../IMG/readyDark.png"
import readyGreen from "../IMG/readyGreen2.png"
import styles from "../STYLES/preGameRoom.module.css"


const Chat = ({ messages, sendMessage}) =>{
    const [listMessages, setListMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");
    const {preRoomUsers, user} = useSelector(state => state)

    useEffect(() =>{
        messages.text &&
    setListMessages([...listMessages, messages])
    }, [messages])

    function handleMessage(e){
        setNewMessage(e.target.value)
    }

    function handleSendMessage(e){
        e.preventDefault();
        sendMessage(newMessage);
        setNewMessage("");
    }


    return (
        <div>
            <div className={styles.readyPhone} >
            {
                !user?.host && preRoomUsers?.users?.find(us => us.id === user.id) &&
                (user?.ready 
                    ? <img width="70px" src={readyGreen} alt="ready"/>
                    : <img width="70px" src={readyDark} alt="notReady"/>)
            }
            </div>
            <p style={{fontSize: "12px"}}>Jugadores {preRoomUsers?.users?.length}/6</p>
            <div className={styles.containerChat}>
                <div style={{heigth:50 + "px"}} disabled={true} > 
                    {
                        listMessages?.map((message) => {
                            return (
                                        message.writtenByCurrentUser
                                            ? <p key={`${Math.random()}${message.name}${message?.text}`} 
                                                style={{textAlign: "justify", marginBottom: "0.4rem", fontSize: "1.1rem", color: "rgba(239, 158, 36, 0.925)", fontWeight: "bold"}} 
                                              >
                                                  {`Yo: ${message?.text}`}
                                              </p>
                                            : preRoomUsers.users.find(user => user.name === message.name)
                                                ? <p key={`${Math.random()}${message.name}${message?.text}`} 
                                                  style={{textAlign: "justify", wordBreak: "break-word", marginBottom: "0.4rem", fontSize: "1.1rem", color: "rgb(236, 221, 48)",  fontWeight: "bold"}} 
                                                >
                                                    {`${message?.name}: ${message?.text}`}
                                                </p> 
                                                : <p key={`${Math.random()}${message.name}${message?.text}`} 
                                                  style={{textAlign: "justify", wordBreak: "break-word", marginBottom: "0.4rem", fontSize: "1.1rem", color: "rgb(236, 221, 48)",  fontWeight: "bold"}} 
                                                >
                                                    {`${message?.name} (espectador): ${message?.text}`}
                                                </p> 
                            )
                        })
                    }
                </div>
            </div>
                <div className={styles.containerSendMessages}>
                    <form onSubmit={e => handleSendMessage(e)}>

                    <input 
                        type="text" 
                        placeholder="Escribe un mensaje..." 
                        value={newMessage} 
                        onChange={handleMessage} 
                        />
                    <button className="buttonSides lowgreen" onClick={e => handleSendMessage(e)} >Enviar</button>
                        </form>
                </div>
        </div>
    )
}

export default Chat;