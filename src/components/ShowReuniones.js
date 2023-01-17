
import React, {useEffect, useState, useRef} from 'react';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; //another plugin
import esLocale from '@fullcalendar/core/locales/es';
import FormReunion from './FormReunion';
import axios from "../api/AxiosApi";

import { Modal, Button } from 'react-bootstrap';

const ShowReuniones = () => {
    const [show, setShow] = useState(false);
    const [salas, setSalas] = useState([]);
    //const [salaid, setSalaid] = useState('');
    const salaid = useRef(0)
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
    }

    const getSalas = async ()=>{
      const response = await axios.get(`/salas`);
      console.log(response.data);
      setSalas(response.data)
  }

    
    const getReuniones = async (id)=>{
        const response = await axios.get(`/reuniones/${id}`);
        console.log(response.data);
        setReuniones(response.data)
    }


  return (
    <div className="container">
    <div className="row mt-2">
    <h1>Calendario Salas</h1>
    </div>
    <div className="row mt-2">
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
    <div className="row mt-2">
        <button className="btn btn-success" onClick={()=>{reunion.current = null;handleShow()}}>Programar reunion</button>
    </div>

    <Modal show={show} onHide={handleClose} className="modal-md">
        {/* <Modal.Header closeButton>
          <Modal.Title>Nueva Reunión</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
            <FormReunion salaid={salaid.current} reunion={reunion.current}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    <div className="row mt-2">
        <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin ]}
            headerToolbar={{
              center: 'timeGridWeek,dayGridMonth'
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
    </div>
  )
}

export default ShowReuniones