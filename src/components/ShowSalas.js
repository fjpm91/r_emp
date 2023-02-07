
import React, { useEffect, useState, useRef } from 'react'; //imr
import { Link } from 'react-router-dom'
import MenuNavbar from '../layouts/MenuNavbar'
import DataTable from 'react-data-table-component'
import { useNavigate, useParams } from 'react-router-dom';
import { tableCustomStyles } from './estilo';
import axios from "../api/AxiosApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash, faTrashCan} from "@fortawesome/free-solid-svg-icons";
const ShowSalas = () => {
    const data = []

    const [salas, setSalas] = useState([])
      useEffect (()=> {
          getSalas()
      },[])
  
      const getSalas = async () =>{
        try{
        const response = await axios.get(`/salas`)
        const data = response.data
        //axios serializa por defecto, fetch no
        setSalas(data)
        }
        catch(error){
          if(error.response){
              alert(error.response.data.message);
          }else{
              alert(error)
          }
      }
    }
  
    const deleteSala = async (id) =>{
      const response = await axios.delete(`/sala/${id}`)
      getSalas()       
  }
  
  
    const columns = [
      {
        name:"ID",
        selector: row => row.id
      },
      {
        name:"NOMBRE",
        selector: row => row.nombre
      },
      {
        name:"CAPACIDAD",
        selector: row => row.capacidad
      },
      {
        name:"TV",
        selector: row => (row.televisor) == 0 ? "NO" : "SÍ"
      },
      {
        name:"PROYECTOR",
        selector: row => row.proyector == 0 ? "NO" : "SÍ"
      },
      {
        name:"",
        selector: row => 
        <Link to={`/formSala/${row.id}`} className='btn btn-warning'> <FontAwesomeIcon icon={faEdit} /></Link>    
      },
      {
        name:"",
        style:{width:"100px"},
        selector: row => 
        <button onClick={()=>{
          if(window.confirm(`¿Desea eliminar la sala ${row.id}`)){
          deleteSala(row.id)
        }}} 
        className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
      }
      // {
      //   name:"",
      //   style:{width:"100px"},
      //   selector: row => 
      //   <Link to={`/showExtintor/${row.id}`} className='btn btn-info text-white'>Show</Link>    
      // },
      
    ]
  
  return (
    <>
    
    <div className="container">
      <div className="mt-3">
        {/* <PDFDownloadLink document={<PrintSoldes prop={{id:1}}/>} filename={`Soldes1`}>
        {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
        </PDFDownloadLink> */}
      </div>
        <div className='col2'>
          <label className='titulo'><strong>SALAS</strong></label>
          <div className='mt-3'>
            <Link to="/formSala" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nueva</Link>
        </div>
        </div>

        
        <div className="row mt-2">
          <DataTable
          customStyles={tableCustomStyles}
          columns={columns}
          data={salas}
          pagination
            />
        </div>
    </div>
    </>
  )
}

export default ShowSalas