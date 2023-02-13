import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const ReunionBox = ({reunion, color}) => {
    const letra = {
        fontSize: "30px"
    }
    const letrachica = {
        fontSize: "20px"
    }
    const hora_inicio = moment(reunion.hora_inicio,'HH:mm:ss').format('HH:mm');
    const hora_fin = moment(reunion.hora_fin,'HH:mm:ss').format('HH:mm');
    // useEffect(()=>{
    //     console.log(id)
    // }, [])

    return(
        <>
            <div style={{backgroundColor: color}} className="reunion">
                    <div style={letra}>{reunion.title}</div>
                    {/* <div>{reunion.fecha}</div> */}
                    <div className="col">
                        <div style={letra}> {hora_inicio} - {hora_fin}</div>
                        <div style={letrachica}> {reunion.usuario.toUpperCase()}</div>
                    </div>
            </div>
        </>
    )
}
export default ReunionBox;