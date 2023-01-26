//import './App.css';

import {Route, Routes, Navigate } from 'react-router-dom';

import Home from '../components/Home';
import ShowSalas from '../components/ShowSalas.js';
import FormSala from '../components/FormSala';
import ShowReuniones from '../components/ShowReuniones';
import FormAdmin from '../components/FormAdmin';
import FormLogin from '../components/FormLogin';
import ShowAdmin from '../components/ShowAdmin';
//import Protected from '../Protected';




const RouterConfig = () =>{
    return (
        <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/showSalas' element={<ShowSalas/>}/>
       <Route path='/formSala' element={<FormSala/>}/>
       <Route path='/showReuniones' element={<ShowReuniones/>}/>
       <Route path='/formAdmin' element={<FormAdmin/>}/>
       <Route path='/showAdmin' element={<ShowAdmin/>}/>
       <Route path='/login' element={<FormLogin/>}/>
       <Route path='/showSala/:id' element={<FormSala/>}/> 
       <Route path='/formSala/:id' element={<FormSala/>}/> 
      {
    //   <Route path='/formSoldes' element={<FormSoldes/>}/>
    //   <Route path='/formSoldes/:id' element={<FormSoldes/>}/>
    //   <Route path='/showSoldes' element={<ShowSoldes/>}/>
    //   <Route path='/showProductos' element={<ShowProducts/>}/>
    //   <Route path='/printSoldes/' element={<PrintSoldes/>}/>
    //   <Route path='/printSoldes/:id' element={<PrintSoldes/>}/> 
      
}


      </Routes>
    );
}

export default RouterConfig;