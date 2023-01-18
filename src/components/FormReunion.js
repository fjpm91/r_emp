
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";


const FormReunion = (props) => {
    const [sala_id, setSala_id] = useState()
    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
        defaultValues:{
            titulo : "",
            descripcion : "",
            fecha : "",
            hora_inicio : "",
            hora_fin : ""
        }
    });

    useEffect(()=>{
        setSala_id(props.salaid)
        if (props.reunion){
            setProps()
        }
    },[])

    const setProps = () => {
        console.log(props.reunion)
        setValue('titulo', props.reunion.title)
        setValue('descripcion', props.reunion.extendedProps.descripcion)
        setValue('fecha', props.reunion.extendedProps.fecha)
        setValue('hora_inicio', props.reunion.extendedProps.hora_inicio)
        setValue('hora_fin', props.reunion.extendedProps.hora_fin)

    }

    

    const store = async (data) =>{
        try{
            data.id_sala = props.salaid
            data.usuario = "prueba"
            const response = await axios.post('/reunion',data);
            /*data.start = `${data.fecha} ${data.hora_inicio}`;
            data.end = `${data.fecha} ${data.hora_fin}`;
            data.title = data.titulo
            props.onEventAdded(data)*/
            props.getReuniones(props.salaid)
            alert(response.data.message);
            

            //navigate("/showSoldes");
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
            data.id_sala = props.salaid
            const response = await axios.put('/reunion',data);
            alert(response.data.message);
            //navigate("/showSoldes");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert(error)
            }
        }
    }


  return (
    <div className="container">
        <h4>{(props.reunion) ? `Editar Reunion #${props.reunion.id}` : "Nueva Reunion"}</h4>
        <form onSubmit={handleSubmit((props.reunion) ? update : store)}>

        <div className='row mt-2'>
            <label className="col-form-label">Titulo</label>
            <input type="text" className='form-control' {...register('titulo',{
            required:true
            })}/>
        {errors.titulo?.type === 'required' && <small className='text-danger text-uppercase'>El campo no puede estar vacío</small>}
        </div>

        <div className='row mt-2'>
            <label className="col-form-label">Descripcion</label>
            <input type="text" className='form-control' name="descripcion" {...register('descripcion',{
            required:true
            })}/>
        {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
        </div>

        <div className='row mt-2'>
            <label className="col-form-label">Fecha</label>
            <input type="date" className='form-control' {...register('fecha',{
            required:true
            })}/>
        {errors.fecha?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
        </div>

        <div className='row mt-2'>
            <label className="col-form-label">Hora Inicio</label>
            <input type="time" className='form-control' {...register('hora_inicio',{
            required:true
            })}/>
        {errors.hora_inicio?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
        </div>

        <div className='row mt-2'>
            <label className="col-form-label">Hora Fin</label>
            <input type="time" className='form-control' {...register('hora_fin',{
            required:true
            })}/>
        {errors.hora_fin?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
        </div>

        <div className="row my-4">
            <button type="submit" className="btn btn-success">{(props.reunion) ? `MODIFICAR` : "REGISTRAR"}</button>
        </div>
        </form>
    </div>
  )
}

export default FormReunion