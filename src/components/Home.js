import React from 'react'
import logoreunion from '../img/reunion.png'
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from "@fortawesome/free-solid-svg-icons";
const logoEstilo = {width: '250px'};
const Home = () => {
  return (
    <>
  <div className='container'>
    <div className="card-group p-4">
    <img className='card-img-top' src={logoreunion} style={logoEstilo}/>
    <div className='container'>
      <p> Bienvenidos al nuevo sistema de reserva de salas</p>
      <p>El objetivo de esta aplicación es compartir de manera pacífica las distintas salas de reunione disponibles en empacar</p>
      <p>esperamos sea de mucha ayuda atentamente los desarrolladores</p>
      <div>
    <FontAwesomeIcon icon={faEye} />
  </div>
    </div>
    </div>
  </div>
    </>
  );
};

export default Home