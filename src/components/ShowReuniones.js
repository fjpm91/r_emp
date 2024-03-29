
import React, {useEffect, useState, useRef} from 'react';
import MenuNavbar from '../layouts/MenuNavbar'
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; //another plugin
import esLocale from '@fullcalendar/core/locales/es';
import FormReunion from './FormReunion';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../api/AxiosApi";

import { Modal, Button } from 'react-bootstrap';


const ShowReuniones = () => {
    //const calendarRef = React.createRef()
    const salaid = useRef(0)
    const calendarRef = useRef()
    const [show, setShow] = useState(false);
    const [salas, setSalas] = useState([]);
    const navigate = useNavigate();
    const reunion = useRef()
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    useEffect(() => {
      getSalas()
    }, [])
    

    const [reuniones, setReuniones] = useState()
    const handleSala = (e) => {
      //setSalaid(e.target.value)
      salaid.current = e.target.value
      console.log(salaid.current)
      getReuniones(salaid.current)
      //navigate(`/viewReuniones/${salaid.current}`);



      //document.querySelector('.calendario').style.display="none";
      //document.querySelector('.reu').style.display="block";     
   
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
    <div className="">
    <div className="container">
    <div className="row mt-2">
    
    </div>
    <h1>Calendario Salas</h1>
    <div className="row mt-2" id="rowSelect">
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
    <div className="row mt-2" id="rowButton">
      { ((localStorage.getItem('username')) ? 
        <button className="btn btn-success" onClick={()=>{reunion.current = null;handleShow()}}>Programar reunion</button> : null
        )}
    </div>
    </div>

    <Modal show={show} onHide={handleClose} className="modal-md">
        {/* <Modal.Header closeButton>
          <Modal.Title>Nueva Reunión</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
            <FormReunion salaid={salaid.current} reunion={reunion.current} 
            //onEventAdded={onEventAdded}
            getReuniones={getReuniones}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

        <div className='calendario'>
          <div className='container'>
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
    </div></div></div>
    {/* <div className="reu" style={{display: "none"}}>
    <ViewReuniones id={salaid.current}></ViewReuniones>
    </div> */}
    </div>
    </>
  )
}

export default ShowReuniones