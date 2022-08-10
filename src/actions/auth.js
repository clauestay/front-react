/* 
    Este es creador de acciones relacionadas con la autenticación. Vamos a importar 
    AuthServicepara realizar solicitudes HTTP asíncronas con desencadenar uno o más 
    dispatchen el resultado.

    –register()
        llama al AuthService.register (nombre de usuario, correo electrónico, contraseña)
        envío REGISTER_SUCCESSy SET_MESSAGEsi tiene éxito
        despacho REGISTER_FAILy SET_MESSAGEsi falla
    
    –login()
        llama al AuthService.login (nombre de usuario, contraseña)
        envío LOGIN_SUCCESSy SET_MESSAGEsi tiene éxito
        despacho LOGIN_FAILy SET_MESSAGEsi falla

    Ambos creadores de acciones devuelven una Promise para los componentes que los usan.
*/

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};