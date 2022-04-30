import React, { useState, useEffect } from "react";
import Music from "../MUSICA/musica";



function ChatGameRoom({points}){
    
    const [listSuccess, setListSuccess] = useState([])

    useEffect(() =>{
        points.name &&
        setListSuccess([...listSuccess, points])
    }, [points])


    return (
                <div >
                    <h2 className="title">Aciertos</h2>
                 <div>
        <div className="containerChatGame">
                <div style={{heigth:50 + "px"}} disabled={true} > 
                    {
                        listSuccess?.map((success) => {
                            return (
                                <p key={`${Math.random()}${success.name}}`} 
                                        style={{textAlign: "justify", wordBreak: "break-word"}} 
                                >
                                    {`${success?.name} + ${success?.point} pts!`}
                                </p> 
                            )
                        })
                    }
                </div>
        </div>
        
                        </div>
                        
        </div>

    )
}

export default ChatGameRoom;
