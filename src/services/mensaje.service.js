import Api from "./api.service";

export default {
    enviarMensajeTexto(datos){
        return Api().post('/mensaje/texto', datos);
    },
    enviarMensajeImagen(datos){
        return Api().post('/mensaje/imagen', datos);
    },
    enviarMensajeBoton(datos){
        return Api().post('/mensaje/button', datos);
    }
}