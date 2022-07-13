import React, {useContext} from "react";
import borrer from "../assets/css/static/borrar.png";
import "../assets/css/ItemCarrito.css"
import Contexto from "../context/Contexto"
//import "../assets/css/Carrito.css"

export default function ItemCarrito(props){
  const {eliminarCarrito} = useContext(Contexto)
  const {nombre, precio, img, id} = props[0];
  const handleBorrar = () => { eliminarCarrito(id)}
    return (
       <>
       <div className="carrito-item">
              <img
                src={img}
                alt=""
                className="carrito-item-img"
              />
              <div className="carrito-txt">
                <h1 className="carrito-item-titulo">{nombre}</h1>
                <h3 className="carrito-item-precio">AR$ {precio}</h3>
              </div>
              <img src={borrer} alt="" className="carrito-item-borrar" onClick={handleBorrar} />
            </div>
       </>
    );
}