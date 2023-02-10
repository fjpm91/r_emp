import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../api/AxiosApi";
import dayjs from 'dayjs';
import ReunionBox from "./componente";

const ViewReuniones=({id})=>{
    const [reunion, setReuniones]=useState([])
    //const {id} = useParams()
    useEffect(()=>{
        console.log(id)
        getReuniones()
    }, [])
    const hoy = dayjs().format("YYYY-MM-DD");
    const mañana=dayjs().add(1, 'day').format("YYYY-MM-DD")
    const pmañana=dayjs().add(2, 'day').format("YYYY-MM-DD")

    const letra={
        fontSize: "40px"
    }
    const color={
        
    }
    const getReuniones=async()=>{
        try{
            const response=await axios.get(`/reuniones`)
            setReuniones(response.data)
        }
        catch(error){
            if(error.response){
                alert(error.response.data.message)
            }
            else{
                alert(error)
            }
        }
    }
    const lista =()=>{

    }

    return(
        <>
            <div  style={{color: "white", backgroundColor: "#585F62", fontSize: "60px", height:"90px", textAlign: "center"}} className="col3">
                <div >{dayjs().format("DD-MM-YYYY")}</div>
                <div>{dayjs().add(1, 'day').format("DD-MM-YYYY")}</div>
                <div>{dayjs().add(2, 'day').format("DD-MM-YYYY")}</div>

            </div>
            <div className="col3">
            <ReunionBox reunion={reunion} color={"#148D8D"} fecha1={hoy} id={id}></ReunionBox>
            <ReunionBox reunion={reunion} color={"#1B4D5E"} fecha1={mañana} id={id}></ReunionBox>
            <ReunionBox reunion={reunion} color={"#0E2C40"} fecha1={pmañana} id={id}></ReunionBox>
            
            {/* <div>{
            
            reunion.filter(reuniones=>reuniones.fecha==hoy).map((reuniones) =>
            
            <div  className="pt-9">
                <div style={{backgroundColor: "#0E2C40"}} className="reunion">
                    <div style={letra}>{reuniones.titulo}</div>
                    <div>{reuniones.fecha}</div>
                    <div className="col2"><div style={letra}> Hora Inicio: {reuniones.hora_inicio}</div><div style={letra}>Hora Fin: {reuniones.hora_fin}</div></div>
                </div>
            </div>)}</div> */}
            
            {/* <div>{         
            reunion.filter(reuniones=>reuniones.fecha==mañana).map((reuniones) =>           
            <div>
                <div style={{backgroundColor: "#1B4D5E"}} className="reunion">
                    <div style={letra}>{reuniones.titulo}</div>
                    <div>{reuniones.fecha}</div>
                    <div className="col2"><div style={letra}> Hora Inicio: {reuniones.hora_inicio}</div><div style={letra}>Hora Fin: {reuniones.hora_fin}</div></div>
                </div>
            </div>)}</div>

            <div>{          
            reunion.filter(reuniones=>reuniones.fecha==pmañana).map((reuniones) =>           
            <div>
                <div className="reunion">
                    <div style={letra}>{reuniones.titulo}</div>
                    <div>{reuniones.fecha}</div>
                    <div className ="col2" style={letra}><div> Hora Inicio: {reuniones.hora_inicio}</div><div>Hora Fin: {reuniones.hora_fin}</div></div>
                </div>
            </div>)}</div> */}
            
            </div>
        </>
    )
}
export default ViewReuniones;