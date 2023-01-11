//import './App.css';

import {Route, Routes, Navigate } from 'react-router-dom';

import Home from '../components/Home';
import ShowSalas from '../components/ShowSalas';
//import Protected from '../Protected';




const RouterConfig = () =>{
    return (
        <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/showSalas' element={<ShowSalas/>}/>
      {/* <Route path='/login' element={<Login/>}/>
      
      <Route path='/formSoldes' element={<FormSoldes/>}/>
      <Route path='/formSoldes/:id' element={<FormSoldes/>}/>
      <Route path='/showSoldes' element={<ShowSoldes/>}/>
      <Route path='/showProductos' element={<ShowProducts/>}/>
      <Route path='/printSoldes/' element={<PrintSoldes/>}/>
      <Route path='/printSoldes/:id' element={<PrintSoldes/>}/> */}
      
      


      </Routes>
    );
}

export default RouterConfig;