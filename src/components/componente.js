import dayjs from 'dayjs';
import React, { useEffect, useState } from "react";

const ReunionBox=({reunion, color, fecha1, id})=>{

    useEffect(()=>{
        console.log(id)
    }, [])
    return(
        <div>{
            
            reunion.filter(reuniones=>reuniones.fecha==fecha1 && reuniones.id_sala==id).map((reuniones) =>
            
            <div  className="pt-9">
                <div style={{backgroundColor: color}} className="reunion">
                    <div style={{fontSize: "40px"}}>{reuniones.titulo}</div>
                    <div>{reuniones.fecha}</div>
                    <div className="col2"><div style={{fontSize: "40px"}}> Hora Inicio: {reuniones.hora_inicio}</div><div style={{fontSize: "40px"}}>Hora Fin: {reuniones.hora_fin}</div></div>
                </div>
            </div>)}</div>
    )
}
export default ReunionBox