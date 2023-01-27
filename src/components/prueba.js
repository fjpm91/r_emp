import logoreunion from '../img/reunion.png'
import './styles.css';
import DataTable from 'react-data-table-component'
import React, {useEffect, useState, useRef} from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; //another plugin
import axios from "../api/AxiosApi";
import './prueba.css';
import { Modal, Button } from 'react-bootstrap';

const logoEstilo = {width: '250px'};
const Prueba = () => {
  const data = []
  createToast()
  function createToast() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText ='mensaje'
    setTimeout(() => {
    notif.remove()
  }, 10000)}
    const [reunion, setReunion] = useState([])
      useEffect (()=> {
          getReunion()
      },[])
  
      const getReunion = async () =>{
        const response = await axios.get(`/reuniones`)
        const data = response.data
        //axios serializa por defecto, fetch no
        setReunion(data)
    }
  const columns = [
    {
      name:"NOMBRE",
      selector: row => row.titulo
    },
    {
      name:"FECHA",
      selector: row => row.fecha
    },
    {
      name:"INICIO",
      selector: row => row.hora_inicio
    },
    {
      name:"FIN",
      selector: row => row.hora_fin
    },]
  
  return (
    <>
   
    <div id="hellobar-bar" className="regular closable">
    <div className="hb-content-wrapper">
        <div className="hb-text-wrapper">
            <div className="hb-headline-text">
                <p className='p-2'><span>El objetivo de esta aplicación es compartir de manera pacífica las distintas salas de reunione disponibles en EMPACAR</span></p>
                <p className='pb-2'><span>Esperamos sea de mucha ayuda atentamente los desarrolladores</span></p>
            </div>
        </div>
        
    </div>
    <div className="hb-close-wrapper">
        <a href="/home" className="icon-close">✖</a>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </div>
</div>
<div className='card-img-top'>
  <p className='bienvenido'>Bienvenido</p>
  
</div>
  <div className='container'>
  <div id="toasts"></div>
    <div className="card-group p-4">

    <div className='container'>
      <h3> Reuniones</h3>
      <div>
      <div className="row mt-2">
          <DataTable
          columns={columns}
          data={reunion}
          pagination
            />
        </div>
  </div>
    </div>
    </div>
  </div>
    </>
  );
};

export default Prueba