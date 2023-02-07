import { ErrorResponse } from '@remix-run/router';
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";
import MenuNavbar from '../layouts/MenuNavbar'

const FormSala = () => { 
    const bigcheckbox = {
        width: "25px", 
        height: "25px"
    };
    const navigate = useNavigate();
    const {id} = useParams()
    const[sala, setSala]=useState();
    const [television, setTelevision]=useState(false);
    const [proyector, setProyector]=useState(false);
    //const [imagen, setImagen] = useState()
    const previewSize = {
        width:"350px"
    }
    const opcion={width:"50px"}
    
    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
        defaultValues:{
            televisor: false,
            proyector: false,
            nombre: "",
            descripcion: "",
            ubicacion: ""
        }
    });

    useEffect(() => {
        if (id){
            getSalaById()
        }else{

        }
    }, [])

    const getSalaById = async () =>{
        const response = await axios.get(`/sala/${id}`)
        console.log(response.data);
        setValue('nombre',response.data.nombre)
        setValue('capacidad',response.data.capacidad)
        setValue('descripcion',response.data.descripcion)
        setValue('ubicacion',response.data.ubicacion)
        setTelevision(response.data.televisor==1?true:false)
        //setProyector(response.data.proyector==1?true)
        setProyector(response.data.proyector==1?true:false)
        console.log(proyector)
        console.log(television)
      }
     

    // const store = async (data) => {
    //     await console.log (data)
    // }

//recomiendan usar formData para enviar archivos, pero veré si puedo saltar eso
    const store = async (data) =>{
        try{
            
            console.log(data)
            const response = await axios.post('/sala',data);
            alert(response.data.message);
            navigate("/showSalas");
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
            const response = await axios.put(`/sala/${id}`,data);
            alert(response.data.message);
            navigate("/showSalas");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert(error)
            }
        }
    }

    const test =  (data) =>{
        //data.imagen = imgref.current
        console.log(data)
    }

    return (
        <>
    <MenuNavbar/>

        <div className='container'>
            <div className='row mt-3'>
                <center>
                    <h3>{(id) ? `Editar Sala #${id}` : "Nueva Sala"}</h3>
                </center>
            </div>
            <form onSubmit={handleSubmit((id) ? update : store)}>


            <div className='row mt-2'>
                <div className='col'>
                  <label className="col-form-label">Nombre</label>
                </div>
                <div className='col'>
                <input type="text" className='form-control' id="nombre"{...register('nombre',{
                required:true
                })}/>
            {errors.nombre?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
                </div>
            </div>
            <div className='row mt-2 '>
                <div className='col'>
                    <label className="col-form-label">Televisor</label> 
                </div>
                <div className='col'>
                <select className='form-control' style={opcion} {...register('televisor',{
                        required:true
                        })}>
                        <option value="">Seleccione una Opcion</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>        
                </div>
            </div>
            <div className='row mt-2 '>
                <div className='col'>
                    <label className="col-form-label">Proyector</label> 
                </div>
                <div className='col'>
                <select className='form-control' style={opcion} {...register('proyector',{
                        required:true
                        })}>
                        <option value="">Seleccione una Opcion</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>        
                </div>
            </div>
            
   
            {/* <div className='row mt-2 '>
                <div className='col'>
                    <label className="col-form-label">Televisor</label> 
                </div>
                <div className='col'>
                <input type="checkbox" className="form-check-input" defaultChecked={{television}} style={bigcheckbox} id="televisor" {...register('televisor',{
                })}/>               
                </div>
            </div>

            <div className="row mt-2 ">
                <div className="col">
                    <label className="col-form-label">Proyector</label>
                </div>
                <div className="col">
                <input type="checkbox" className="form-check-input" defaultChecked={false}  style={bigcheckbox} id="proyector" {...register('proyector',{
                })}/>
                </div>
            </div> */}

           

            <div className="row mt-2">
                <div className="col">
                <label className="col-form-label">Capacidad</label>
                </div>
                <div className="col">
                <input type="number" className='form-control' id="capacidad" step="1"{...register('capacidad',{
                    required:true
                })}/>
                {errors.capacidad?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col'>
                  <label className="col-form-label">Descripcion</label>
                </div>
                <div className='col'>
                <input type="text" className='form-control' id="descripcion"{...register('descripcion',{
                required:true
                })}/>
            {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col'>
                  <label className="col-form-label">Ubicacion</label>
                </div>
                <div className='col'>
                <input type="text" className='form-control' id="ubicacion"{...register('ubicacion',{
                required:true
                })}/>
            {errors.ubicacion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
                </div>
            </div>


            <div className="row my-4">
            <button type="submit" className="btn btn-success">{(id) ? `Actualizar` : "Registrar"}</button>
            </div>
            {/* <input className="btn btn-success" type="submit" value='ENVIAR'/> */}
            
            </form>
        </div>
        </>
    );
}
export default FormSala;