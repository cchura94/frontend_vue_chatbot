import Api from "./api.service";

export default {
    enviarMensajeTexto(datos){
        return Api().post('/mensaje/texto', datos);
    },
    enviarMensajeImagen(datos){
        return Api().post('/mensaje/imagen', datos);
    }
}