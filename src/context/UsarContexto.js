import Contexto from "./Contexto";
import React from 'react'
import { useReducer } from "react";
import axios from "axios";
import  Reducer  from "./Reducer";

export default function UsarContexto(props) {
  const {children} = props;
  
  const estadoInicial = {
    productos: [],
    carrito: [],
    producto: []
  }

  const [state, dispatch] = useReducer(Reducer, estadoInicial);




  const listameProductos = async () => {
    const res = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json");
            dispatch({type: "LISTAME_PRODUCTOS", payload: res.data})


    console.log(res.data, "Uno")
    //console.log(res.data, "desde el context")
   

  }
const agregarCarrito = (item) =>{
    console.log("Agregar Carrito", item );
    dispatch({type: "AGREGAR_CARRITO", payload: item});

};
const eliminarCarrito = (item) => {
  console.log("Eliminar Carrito", item);
  dispatch({type: "ELIMINAR_CARRITO", payload: item})

};
const verProducto = (item) => {
  console.log("ver Producto", item );
  dispatch({type: "VER_PRODUCTO", payload: item});

};
    return (
    <>
    <Contexto.Provider value={{
        productos: state.productos,
        carrito: state.carrito,
        producto: state.producto,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
        verProducto,
    }} >
            {children}
            </Contexto.Provider>
    </>
  )
}
