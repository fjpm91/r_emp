import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../api/AxiosApi";
import dayjs from 'dayjs';
import ReunionBox from "./ReunionBox";

const ShowReunionesTv=()=>{
    const [reuniones, setReuniones]=useState([])
    const [salas, setSalas] = useState([]);
    const sala_id = useRef(0)
    const sala_name = useRef('')
    // const opcion={width:"50px"}
    
    //const {id} = useParams()
    useEffect(()=>{
        getSalas()
        const intervalId = setInterval(() => {
            console.log(`El texto parpadeando es: 2`);
          });
    }, [])

    // useEffect(()=>{
    //     getReuniones()
    // }, [salas])

    const hoy = dayjs().format("YYYY-MM-DD");
    const manana=dayjs().add(1, 'day').format("YYYY-MM-DD")
    const pmanana=dayjs().add(2, 'day').format("YYYY-MM-DD")
    const rango_fechas = useRef({
        inicio:hoy,
        fin:pmanana
    })

    const letra={
        fontSize: "40px"
    }
    const color={
        
    }

    const getSalas = async ()=>{
        try{
        const response = await axios.get(`/salas`);
        //console.log(response.data);
        setSalas(response.data)
        }
        catch(error){
          if(error.response){
              alert(error.response.data.message);
          }else{
              alert(error)
          }
        }
    }

    const getReuniones = async (id)=>{
        try{
            rango_fechas.current.id = id
          const response = await axios.post(`/reuniones_date/${id}`,rango_fechas.current);
          console.log(response.data);
          setReuniones(response.data)
        }catch(error){
            if(error.response){
              alert(error.response.data.message);
            }else{
                alert(error)
            }
          }
      }

    const handleSala = (e) => {
        sala_id.current = e.target.value
        
        let sel = document.getElementById('select_sala')
        sala_name.current = sel.options[sel.selectedIndex].text

        getReuniones(sala_id.current)   
        document.getElementById('rowSelect').setAttribute("hidden",true)
      }

    

    return(
        <>
            <div className="container" id="rowSelect">
            <h1>Calendario Salas</h1>
            <div className="row mt-2" >
                <div className="col">
                <select name="select_sala" id="select_sala" onChange={handleSala} className="form-control">
                    <option value="">Seleccione una sala</option>
                    {
                    salas.map((sala) => (
                    <option key={sala.id} value={sala.id}>{sala.nombre}</option>
                    ))
                    }
                </select>
                </div>
            </div>
            </div>

            <div className="container" id="cont2">
            <center><h1>{sala_name.current}</h1></center>

            </div>

            <div className="col3" style={{color: "white", backgroundColor: "#585F62", fontSize: "60px", height:"80px"}}>
            <center>{dayjs().format("DD-MM-YYYY")}</center>
            <center>{dayjs().add(1, 'day').format("DD-MM-YYYY")}</center>
            <center>{dayjs().add(2, 'day').format("DD-MM-YYYY")}</center>
            </div>
            <div className='' style={{color: "white", fontSize: "60px", height:"80px", textAlign: "center"}}>
                <div className='col3'>
                    <div className="">
                    {
                        reuniones.filter(reunion => (reunion.fecha == hoy)).map((reunion)=>{
                            return <ReunionBox key={reunion.id} reunion={reunion} color={"#0FCD34"}></ReunionBox>
                        })
                    }
                    </div>

                    
                    <div className="">
                    {
                            reuniones.filter(reunion => (reunion.fecha == manana)).map((reunion)=>{
                                return <ReunionBox key={reunion.id} reunion={reunion} color={"#1F566E"}></ReunionBox>   
                            })
                    }
                    </div>
                    
                    <div className="">
                    {
                        reuniones.filter(reunion => (reunion.fecha == pmanana)).map((reunion)=>{
                            return <ReunionBox key={reunion.id} reunion={reunion} color={"#032239"}></ReunionBox>
                        })
                    }
                    </div>
                </div>
            </div>
            
            
        </>
    )
}
export default ShowReunionesTv;