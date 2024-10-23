import Api from "./api.service";

export default {
    enviarPreguntaTexto(msg){
        return Api().post('/openai/mensaje/text', {mensaje: msg});
    },
}