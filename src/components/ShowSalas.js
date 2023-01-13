import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import esLocale from '@fullcalendar/core/locales/es';
import FormReunion from './FormReunion';

import { Modal, Button } from 'react-bootstrap';

const ShowSalas = () => {
    const [show, setShow] = useState(false);
    const [salaid, setSalaid] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const handleSala = (e) => {
      setSalaid(e.target.value)
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
            <option value="1">Sala 1</option>
            <option value="2">Sala 2</option>
            <option value="3">Sala 3</option>
            <option value="4">Sala 4</option>
            <option value="5">Sala 5</option>
            <option value="6">Sala 6</option>
        </select>
        </div>
    </div>
    <div className="row mt-2">
        <button className="btn btn-success" onClick={()=>handleShow()}>Programar reunion</button>
    </div>

    <Modal show={show} onHide={handleClose} className="modal-md">
        <Modal.Header closeButton>
          <Modal.Title>Nueva Reunión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormReunion salaid={salaid}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    <div className="row mt-2">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridWeek"
            locale={esLocale}
        />
    </div>
    </div>
  )
}

export default ShowSalas