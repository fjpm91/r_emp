
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import logoUsuario from '../img/logouser.png'
import fondo from '../img/fondoazul.jpg'
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import axios from "../api/AxiosApi";
import './styles.css';
const FormLogin = (props) => {
    const logoEstilo = {width: '250px'};
    const bigcheckbox = {
        width: "25px", 
        height: "25px"
    };
    const navigate = useNavigate();
    const {id} = useParams()
    const previewSize = {
        width:"350px"
    }

    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
        defaultValues:{
            usuario: "",
            nombre: "",
            correo: "",
            sala:"",
        }
    });

    useEffect(() => {
        if (id){
            getUserById()
        }else{

        }
    }, [])

    const getUserById = async () =>{
        const response = await axios.get(`/user/${id}`)
        console.log(response.data);
        
      }

    const store = async (data) =>{
        try{
            
            console.log(data)
            const response = await axios.post('/user',data);
            alert(response.data.message);
            navigate("/showAdmin");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert(error)
            }
        }
    }

    const update = async (data) =>{
        try{
            
            console.log(data)
            const response = await axios.put('/user',data);
            alert(response.data.message);
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert(error)
            }
        }
    }

  return (
    
    <div className="bg-image">
    <div className="container-fluid">
 
    <div className="row d-flex justify-content-center mt-3">
            <img src={logoUsuario} style={logoEstilo}/>
    </div>
    <center><h3 className="font-weight-bold">LOGIN</h3></center>
    <div className='border container col-6'>
    <form onSubmit={handleSubmit((id) ? update : store)}>
    <div>

    </div>
    <div className='p-2 pt-3'>
        <label>Usuario</label>
            <div className=''>
            <input type="text" className='form-control' id="user" {...register('user',{
            required:true
            })}/>
        {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div>  

    <div className='p-2'>
        <label>Contraseña</label>
            <div className=''>
            <input type="text" className='form-control' id="password" {...register('password',{
            required:true
            })}/>
        {errors.ubicacion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div> 

   
      <div className='mt-3 mb-3'>
        <button onClick={() => navigate('/home')} className="btn btn-secondary">INGRESAR</button>
      </div>
        
    </form>
    </div>
    </div>
    </div>
  )
}

export default FormLogin