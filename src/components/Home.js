import logoreunion from '../img/reunion.png'
import './styles.css';
import DataTable from 'react-data-table-component'
import React, {useEffect, useState, useRef} from 'react';
import axios from "../api/AxiosApi";
import { tableCustomStyles } from './estilo';
import { Modal, Button } from 'react-bootstrap';

const logoEstilo = {width: '250px'};
const Home = () => {
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
        if(localStorage.getItem('username')){
          getReunion()
        }
     },[])
     
    //  const getSalas = async () =>{
    //   try{
    //   const response = await axios.get(`/salas`)
    //   const data = response.data
    //   //axios serializa por defecto, fetch no
    //   setSalas(data)
    //   }
    //   catch(error){
    //     if(error.response){
    //         alert(error.response.data.message);
    //     }else{
    //         alert(error)
    //     }
    //   }
    //   }
       const getReunion = async () =>{
         const response = await axios.get(`/reunionesx/${localStorage.getItem('username')}`)
         const data = response.data
         //axios serializa por defecto, fetch no
         setReunion(data)
         console.log(data)
     }


  const columns = [
    {
      name:"NOMBRE",
      selector: row => row.title
    },
    {
      name:"SALA",
      selector: row => row.id_sala
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
    
   
<div className='card-img-top'>
  <p className='bienvenido'>Bienvenido</p>
  
</div>
<h3 className='titulo2'> Reuniones</h3>
      <div className='divisor'></div>
  <div className='container'>
  <div id="toasts"></div>
    <div className="card-group">

    <div className='container'>
      

      <div className="row">
      <div>
          <DataTable
          customStyles={tableCustomStyles}
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

export default Home