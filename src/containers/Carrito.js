import React, {useContext} from "react";
import "../assets/css/Carrito.css";
import "../assets/css/ItemCarrito.css"
import ItemCarrito from "../components/ItemCarrito"
import Contexto from "../context/Contexto"
//import "../assets/css/Producto.css"

export default function Carrito(){
   const {carrito} = useContext(Contexto)
    return (
       <>
       <div className="carrito">
          <div className="carrito-listadito">
            
      {carrito.map((item, i) => (
         <ItemCarrito {...item} key={i}
          ></ItemCarrito>
      ))}
     
      </div> </div>
      <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
       </>
    );
}