
import React, { useEffect, useState, useRef } from 'react'; //imr
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../api/AxiosApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash, faTrashCan} from "@fortawesome/free-solid-svg-icons";
 import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const ShowAdmin = () => {
    const data = []

    const [admin, setAdmin] = useState([])
      useEffect (()=> {
          getAdmin()
      },[])
  
      const getAdmin = async () =>{
        const response = await axios.get(`/sala_admins`)
        const data = response.data
        //axios serializa por defecto, fetch no
        setAdmin(data)
    }
  
    const deleteAdmin = async (id) =>{
      const response = await axios.delete(`/sala_admins/${id}`)
      getAdmin()       
  }
  
  
    const columns = [
      {
        name:"ID",
        selector: row => row.id
      },
      {
        name:"USERNAME",
        selector: row => row.username
      },
      {
        name:"NOMBRE",
        selector: row => row.nombre
      },
      {
        name:"SALA",
        selector: row => row.id_sala
      },
      {
        name:"",
        selector: row => 
        <Link to={`/formAdmin/${row.id}`} className='btn btn-warning'> <FontAwesomeIcon icon={faEdit} /></Link>    
      },
      {
        name:"",
        style:{width:"100px"},
        selector: row => 
        <button onClick={()=>{
          if(window.confirm(`¿Desea eliminar la sala ${row.id}`)){
          deleteAdmin(row.id)
        }}} 
        className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
      }

     
      
  
    ]
  
  return (
    <>

    <div className="container">
      <div className="mt-3">
      </div>
        <div className='mt-3'>
            <Link to="/formAdmin" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nueva</Link>
        </div>
        <div className="row mt-2">
          <DataTable
          columns={columns}
          data={admin}
          pagination
            />
        </div>
    </div>
    </>
  )
}

export default ShowAdmin