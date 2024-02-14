import React, {useState} from 'react';


//mirar tamaño
function ScreenConElYesAgrandado({setBotonYesApretado}) {
    const lista = ["No", "otra oportunidad", "tercera oportunidad", "apreta si y te ganas algo"]
    const [botonConMasTamanio, setbotonConMasTamanio] = useState(0);
    const [textoDelBoton, settextoDelBoton] = useState(lista);
     

function aumentarTamanioDelBotonYesYCambiarElTextDelBoton(){
    setbotonConMasTamanio(10 + botonConMasTamanio) // le va aumentado el tamaño del boton haciend que se le agregue 10 + lo que ya tenía
    settextoDelBoton(textoDelBoton.slice(1)) //le mando una nueva lista basandome en la original y sacando el primer elmento
}


    return(
       
        <div style={{width: "100%", background: 'white',  padding: '10px',
        minHeight: '100vh', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center" 
        }}>
        <div style={{width: "100%", height:"100%",  display:"flex", justifyContent: "center" }}>
        <iframe title="gif" src="https://giphy.com/embed/vDhDcIEmShbUI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/love-pokemon-pretty-vDhDcIEmShbUI"></a></p>
        </div>    
            <div style={{width: "100%", height:"50%", display: 'flex', justifyContent: "center", marginTop:"30px" }}>
                <button onClick={() => setBotonYesApretado(true)} style={{ height: `${55 + botonConMasTamanio}px`, width: `${100 + botonConMasTamanio}px`, background:"green", color:"white", border:"none", borderRadius:"5px", fontSize:"15px", fontWeight: 'bold' }} >Si</button>
                <button onClick={() => aumentarTamanioDelBotonYesYCambiarElTextDelBoton()} style={{marginLeft:"5px", height: "55px", width: "100px", background:"red", color:"white", border:"none", borderRadius:"5px",  fontSize:"15px", fontWeight: 'bold' }}>{textoDelBoton[0]}</button>
            </div>
        </div>
    )
}

export default ScreenConElYesAgrandado;