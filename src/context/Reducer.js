
const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";
const VER_PRODUCTO = "VER_PRODUCTO";

export default function Reducer(state, action){
    const {payload, type} = action;
    switch (type){
        case LISTAME_PRODUCTOS:
            return {...state, productos: payload};
            case AGREGAR_CARRITO:
                return {
                    ...state,
                    carrito: [
                      ...state.carrito,
                      state.productos.filter((ite) => ite.id == parseInt(payload)),
                    ],
                  };
                  case ELIMINAR_CARRITO:
                return {
                    ...state,
                    carrito: [
                      ...state.carrito =
                      state.carrito.filter((item) => item[0].id !== (payload)),
                    ],
                  };
                  case VER_PRODUCTO:
                return {
                  ...state, producto: payload,
                    
                  };
    } 
}

