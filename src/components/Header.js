import React from "react";
import iconCart from "../assets/css/static/carrito.png"
import iconDel from "../assets/css/static/volver.png"
import {Link} from "react-router-dom"
import "../assets/css/Header.css"



export default function Header(){
    return (
        <> <div className="navbarHeader">
        <Link to="/carrito" ><img src={iconCart} alt="" className="carritou"/></Link>
          <Link  to="/" ><img src={iconDel} alt="" className="volver"/></Link>

        <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
        </div>
         </>
    );
}