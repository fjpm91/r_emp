import React, {useEffect, useState, useRef} from 'react';
import MenuNavbar from '../layouts/MenuNavbar'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; //another plugin
import esLocale from '@fullcalendar/core/locales/es';
import FormReunion from './FormReunion';
import axios from "../api/AxiosApi";
import {  useParams } from 'react-router-dom';


const ShowIdReuniones = () => {
    //const calendarRef = React.createRef()
    const {id} = useParams()
    const calendarRef = useRef()
    const [show, setShow] = useState(false);
    const [salas, setSalas] = useState([]);
 
    const salaid = useRef(0)
    const reunion = useRef()
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    useEffect(() => {
    getReuniones()
    
    }, [])
    

    const [reuniones, setReuniones] = useState()

    const handleSala = (e) => {
      //setSalaid(e.target.value)
      salaid.current = e.target.value
      console.log(salaid.current)
      getReuniones(salaid.current)
    }


    
    const getReuniones = async ()=>{
      try{

        const response = await axios.get(`/reuniones/${id}`);
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

    // const onEventAdded = (event) => {
    //   //console.log(event)
    //   //setEventonuevo(event)
    //   const api = calendarRef.current.getApi();
    //   api.addEvent(event);
    // };
    


  return (
    <>
    <div className="container">




    <div className="row mt-2">
        <FullCalendar
            ref={calendarRef}
            plugins={[ dayGridPlugin, timeGridPlugin ]}
            headerToolbar={{
              center: "timeGridDay,timeGridWeek,dayGridMonth"
            }}
            initialView="timeGridWeek"
            locale={esLocale}
            events={reuniones}
            eventDisplay="block"
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }}
            displayEventTime="true"
            displayEventEnd="true"
            eventClick={(info)=>{reunion.current = info.event; handleShow()}}
        />
    </div>
    </div></>
  )
}

export default ShowIdReuniones