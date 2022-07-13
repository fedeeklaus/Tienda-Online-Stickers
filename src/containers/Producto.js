import React, {useContext} from "react";
import "../assets/css/Producto.css"

import Contexto from "../context/Contexto";


export default function Producto(props){
  const {nombre, precio, medidas, img, id} = props;
  const { verProducto} = useContext(Contexto);
  console.log(props)
    return (
       <>
       <div  className="detalle">
       <img
         src={img}
         alt=""
         className="detalle-img"
       />
       <h1 className="home-item-titulo">{nombre}</h1>
         <p className="home-item-medidas">Medidas: 20x10</p>
         <div className="home-item-actions">
         <h3 className="home-item-precio">AR$ 150</h3>&nbsp;
         <a href="carrito.html">  <button className="home-item-comprar">+</button></a>
       
         </div>
         <p>"En la colección de stickers de Escuela Devrock no podía faltar uno de Jakob Nielsen a.k.a Cat Nielsen en esta versión. ¿Está hecho gatito? Sí, lo viste bien. Tiene bijotes, orejas y te enseña las heurísticas de usabilidad."</p>
       
       
       </div>
       </>
    );
}
