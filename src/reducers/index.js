/*
    Porque solo tenemos una única tienda en una aplicación Redux. 
    Usamos la composición reductora en lugar de muchas tiendas para 
    dividir la lógica de manejo de datos.
*/

import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  auth,
  message,
});