import React from 'react';
import { NavLink } from 'react-router-dom'
import './estilo.css';
import Input from '../../Componentes/Input'



function Menu() {
 
  return (

    <div>
      <Input type="checkbox" id="check"></Input>
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>Menu</header>
       
        <NavLink to="/" className="active">
          <i className="fas fa-qrcode"></i><span>Inicio</span>
        </NavLink>
        

        <NavLink  to="/sobremim">
          <i className="far fa-question-circle"></i>
          <span>Sobre Mim</span>
        </NavLink>
         
      </div>
    </div >

  );
}

export default Menu;