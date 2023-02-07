import { ErrorResponse } from '@remix-run/router';
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";
const ViewSala = () => {
    const bigcheckbox = {
        width: "25px", 
        height: "25px"
    };
    const navigate = useNavigate();
    const {id} = useParams()
    //const [imagen, setImagen] = useState()
    const previewSize = {
        width:"350px"
    }
    
    
    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
        defaultValues:{
            compname: "",
            firstname: "",
            secondname: "",
            lastname:"",
            slastname:""
        }
    });
    const getUserById = async () =>{
    {/*console.log(response.data);
        setValue('nombre',response.data.nombre)
        setValue('capacidad',response.data.capacidad)
        setValue('descripcion',response.data.descripcion)
    setValue('ubicacion',response.data.ubicacion)*/}

      }
     

    // const store = async (data) => {
    //     await console.log (data)
    // }

//recomiendan usar formData para enviar archivos, pero veré si puedo saltar eso


    const test = async(data) =>{
        //data.imagen = imgref.current
        console.log(data)
    }
    return(
        <div className='container1'>
           <form onSubmit={handleSubmit(test)}>
    <div className='p-2 pt-3'>
        <label>Nombre</label>
            <div className=''>
            <input type="text" className='form-control' id="name" {...register('compname',{
            required:true
            })}/>
        {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div>  

    <div className='p-2'>
        <label>Contraseña</label>
            <div className=''>
            <input type="text" className='form-control' id="password" {...register('firstname',{
            required:true
            })}/>
        {errors.ubicacion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div> 
    <div className='p-2'>
        <label>Contraseña</label>
            <div className=''>
            <input type="text" className='form-control' id="password" {...register('secondname',{
            required:true
            })}/>
        {errors.ubicacion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div> 

   
      
    <div className='mt-3 mb-4'>
        <center><input className="btn btn-danger" type="submit" value='REGISTRAR'/></center>
      </div>
        
        
    </form>
        </div>
    )
}

export default ViewSala;