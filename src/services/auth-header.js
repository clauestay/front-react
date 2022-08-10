// encabezado de autorizacion
/*
    verifica el almacenamiento local para userel artículo. 
    Si hay un inicio de sesión usercon accessToken(JWT), devuelva el 
    encabezado de autorización HTTP. De lo contrario, devuelve un 
    objeto vacío.
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }