import axios from 'axios';

const url_backend = "https://e704-189-28-91-238.ngrok-free.app/";
// const url_backend = "https://botnode.blumbit.net";

export default function Api(){

    const api = axios.create({
        baseURL: url_backend,
        headers: {
            // 'Content-Type': 'application/json'
        },
        timeout: 30000
    });

    api.interceptors.response.use(
        (respuesta) => {
            return respuesta;
        },
        (error) => {
            if(error.response.status === 401){
                alert("El TOKEN HA EXPIRADO (facebook)")
            }

            return Promise.reject(error);
        }
    )

    return api;
}