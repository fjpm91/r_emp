
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";

import './styles.css';
const FormAdmin = () => {
    const navigate = useNavigate();

    const {id} = useParams()
    const [salas, setSalas] = useState([])
      useEffect (()=> {
          getSalas()
      },[])
  
      const getSalas = async () =>{
        const response = await axios.get(`/salas`)
        const data = response.data
        setSalas(data)
    }
    const previewSize = {
        width:"350px"
        
    }
    
    
    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
        defaultValues:{
            username: "",
            nombre: "",
            correo: "",
            sala:"",
        }
    });

    useEffect(() => {
        if (id){
            getAdminById()
        }else{

        }
    }, [])

    const getAdminById = async () =>{
        const response = await axios.get(`/sala_admin/${id}`)
        console.log(response.data);
        setValue('username',response.data.username)
        setValue('nombre',response.data.nombre)
        setValue('correo',response.data.correo)
        setValue('id_sala',response.data.id_sala)               
        
      }
    const store = async (data) =>{
        try{
            console.log(data)
            const response = await axios.post('/sala_admin',data);
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
            const response = await axios.put(`/sala_admin/${id}`,data);
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

  return (
    
    <div className="bg-image">
    <div className="container-fluid">
    
    <center><h3 className="font-weight-bold mt-4 mb-2">ADMINISTRADORES</h3></center>
    <div className='border container col-5 mt-3'>
    <form onSubmit={handleSubmit((id) ? update : store)}>

    <div className='p-2 pt-3'>
        <label>Nombre de Usuario</label>
            <div className=''>
            <input type="text" className='form-control' id="username" {...register('username',{
            required:true
            })}/>
        {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div>  

    <div className='p-2'>
        <label>Nombre</label>
            <div className=''>
            <input type="text" className='form-control' id="nombre" {...register('nombre',{
            required:true
            })}/>
        {errors.ubicacion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div> 

     <div className='p-2'>
        <label>Correo Electrónico</label>
            <div className=''>
            <input type="text" className='form-control' id="correo" {...register('correo',{
                required:true
                })}/>
            {errors.formato?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div>   

    <div className='p-2'>
        <label>Sala a Administrar</label>
            <div className=''>
            <select className='form-control' {...register('id_sala',{
                required:true
            })}>
                <option value="">Seleccione una sala</option>
                {salas.map((sala)=>(
                    <option key={sala.id} value={sala.id}>{sala.nombre}</option>
                ))}
            </select>

        {errors.capacidad?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
            </div>
    </div>     

   <div className='col2'>
   <div className="row">
        <div className="col-2 m-2">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">CERRAR</button>
        </div>
    </div>
   <div className='reg mr-10'>
        <end><input className="btn btn-danger pr-10" type="submit" value='REGISTRAR'/></end>
        
      </div>
      
   </div>
      
        
    </form>
    </div>
    </div>
    </div>
  )
}

export default FormAdmin