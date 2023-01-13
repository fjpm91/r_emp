
import React, { useEffect, useState, useRef } from 'react'; //imr
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "../api/AxiosApi";


const FormReunion = (props) => {
    const [sala_id, setSala_id] = useState()
    const { register, handleSubmit, setValue, formState:{errors} } = useForm({
        defaultValues:{
          
        }
    });

    useEffect(()=>{
        setSala_id(props.salaid)
    })


  return (
    <div className="container">
        <h4>Sala_id:{props.salaid}</h4>
        <div className='row mt-2'>
            <label className="col-form-label">Titulo</label>
            <input type="text" className='form-control' {...register('titulo',{
            required:true
            })}/>
        {errors.titulo?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
        </div>

        <div className='row mt-2'>
            <label className="col-form-label">Descripcion</label>
            <input type="text" className='form-control' {...register('descripcion',{
            required:true
            })}/>
        {errors.descripcion?.type === 'required' && <small className='text-danger'>El campo no puede estar vacío</small>}
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

    </div>
  )
}

export default FormReunion