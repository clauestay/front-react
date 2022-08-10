/* Este creador de acciones de Redux es para acciones relacionadas 
con mensajes (notificaciones) de las API. */

import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});