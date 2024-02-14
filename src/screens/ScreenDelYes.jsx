import React from 'react';
import pika from "../../src/img/pika.png";


//mirar tamaño
function ScreenDelYes() {

   const texto = "Te amo :3, te ganaste una comida que quieras"
    return(
       
            <div style={{width: "100%", background: 'linear-gradient(to right, #ffd3e8, #d0ace0)',  padding: '10px',
            minHeight: '100vh', 
            boxSizing: 'border-box'}}>
              <div style={{width: "100%", height:"100%",  display:"flex", justifyContent: "center" }}>
                <img src={pika} alt="pika enamorado" style={{width: "200px", height:"200px", marginTop:"150px"}}/>
              </div>
            <div style={{width: "100%", height:"50%", display:"flex", justifyContent: "center" }}>
                <h1 style={{ background: 'linear-gradient(to right, #ffcc, #ff6688)',
                WebkitBackgroundClip: 'texto',
                backgroundClip: 'texto',
                color: 'white',
                
                }}>{texto}</h1>
            </div>
        </div>
    )
}

export default ScreenDelYes;