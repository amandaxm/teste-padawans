import React from 'react';
import './style.css';
import {Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
const Menu = () => {
return (
<header>
   <div id="menu">
      <ul>
         <li>
            <Link className="link" to='/posts'>
            <FiLogIn size={16} color="rgb(95, 52, 115)" />
            Postagens
            </Link>
         </li>
         <br></br>
         <li>
            <Link className="link" to='/albums'>
            <FiLogIn size={16} color="rgb(95, 52, 115)" />
            Albuns
            </Link>
         </li>
         <br></br>
         <li>
            <Link className="link" to='/todos'>
            <FiLogIn size={16} color="rgb(95, 52, 115)" />
            TO-DOs</Link>
         </li>
         <br></br>
      </ul>
      <h1>Olá, está é a etapa técnica do Processo Seletivo Padawans :)</h1>
   </div>
</header>
)}
export default Menu;