
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import meetingicon from '../img/meetingicon.png'
import fondo from '../img/fondoazul.jpg'
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";

import './styles.css';
const FormLogin = (props) => {
    const logoEstilo = {width: '250px'};
    const bigcheckbox = {
        width: "25px", 
        height: "25px"
    };
    const navigate = useNavigate();
    const previewSize = {
        width:"350px"
    }

    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
    });

      const login = async (data) =>{
        try{            
            const response = await axios.post('/login',data);
            //alert(response.data.message);
            localStorage.setItem('username', response.data.username);
            navigate("/home");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert(error)
            }
        }
    }

    const login2 = async (data) =>{
        console.log(data)
    }

  

  return (
    
    <div className="container">
        <div className="row d-flex justify-content-center mt-3">
            <img src={meetingicon} style={logoEstilo}/>
        </div>
        <center><h3 className="font-weight-bold">RESERVA DE SALAS</h3></center>

        <div className='border container col-6'>
        <form onSubmit={handleSubmit(login)}>
        <div className='p-2 pt-3'>
            <label>Usuario</label>
                <div className=''>
                <input type="text" className='form-control' {...register('username',{
                required:true
                })}/>
            {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
                </div>
        </div>  

        <div className='p-2'>
            <label>Contraseña</label>
                <div className=''>
                <input type="password" className='form-control' {...register('password',{
                required:true
                })}/>
            {errors.ubicacion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
                </div>
        </div> 
        <div className='mt-3 mb-3'>
            {/* <button onClick={() => navigate('/home')} className="btn btn-secondary">INGRESAR</button> */}
            <center><button className="btn btn-secondary">INGRESAR</button></center>
         </div>
        </form>
        </div>
    </div>
    

  )
}

export default FormLogin