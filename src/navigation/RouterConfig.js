//import './App.css';

import {Route, Routes, Navigate } from 'react-router-dom';


import Home from '../components/Home';
import ShowSalas from '../components/ShowSalas.js';
import FormSala from '../components/FormSala';
import ShowReuniones from '../components/ShowReuniones';
import FormAdmin from '../components/FormAdmin';
import FormLogin from '../components/FormLogin';
import ShowAdmin from '../components/ShowAdmin';
import Prueba from '../components/prueba';
import ViewSala from '../components/ViewSala';
import MenuNavbar from '../layouts/MenuNavbar';

//import Protected from '../Protected';




const RouterConfig = () =>{
    return (
      <Routes>
          <Route path='/login' element={<FormLogin/>}/>        
          <Route path='/home' element={<Home/>}/>
          <Route path='/showSalas' element={<ShowSalas/>}/>
          <Route path='/formSala' element={<FormSala/>}/>
          <Route path='/showReuniones' element={<ShowReuniones/>}/>
          <Route path='/formAdmin' element={<FormAdmin/>}/>
          <Route path='/showAdmin' element={<ShowAdmin/>}/>
          <Route path='/showSala/:id' element={<FormSala/>}/> 
          <Route path='/formSala/:id' element={<FormSala/>}/> 
          <Route path='/viewSala' element={<ViewSala/>}/>
          
          {/* <Route path='/*' element={<Home/>}/> */}
      </Routes>
    );
}

export default RouterConfig;