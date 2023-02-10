
import React, {useEffect, useNavigate, useState, useRef} from 'react';

import axios from "../api/AxiosApi";
import { Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import ShowReuniones from './ShowReuniones';
import ViewReuniones from './ShowReunion';

const VistaTele = () => {
    //const calendarRef = React.createRef()
    const calendarRef = useRef()
    const [show, setShow] = useState(false);
    const [salas, setSalas] = useState([]);
    const navigate = useNavigate();
    
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
      navigate("/showAdmin");
      
      document.querySelector('.calendario').style.display="none";
      document.querySelector('.reu').style.display="block";

      
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
return(
    <>
    <div className='calendario'>
        <ShowReuniones></ShowReuniones>
    </div>
    <div className="reu" style={{display: "none"}}>
        <ViewReuniones></ViewReuniones>
    </div>
    </>
)}
export default VistaTele();