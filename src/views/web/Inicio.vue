<template>
    <div class="container">
        <h2>Consulta las dudas que tengas</h2>
        <h3>Para obtención de NIT</h3>
        <textarea v-model="pregunta" class="textarea" placeholder="Escribe tu pregunta aquí..."></textarea>
        <br>
        <button @click="funConsultar()" class="btn">CONSULTAR</button>
        <button @click="pregunta = ''">Limpiar</button>

        <div v-if="respuesta" class="respuesta">
            <h4>{{ respuesta }}</h4>
        </div>
    </div>
</template>


<script setup>
    import { ref } from "vue";
    import iaService from "./../../services/ia.service"


    const pregunta = ref("")
    const respuesta = ref("")

    async function funConsultar(){
        // respuesta.value = "";

        const {data} = await iaService.enviarPreguntaTexto(pregunta.value)
        respuesta.value = data.respuesta;
    }

</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #555;
}

.textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    font-size: 16px;
}

.textarea:focus {
    border-color: #007bff;
    outline: none;
}

.btn {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}

.respuesta {
    margin-top: 20px;
    padding: 15px;
    background-color: #e7f5ff;
    border: 1px solid #b3d7ff;
    border-radius: 4px;
    color: #333;
    font-size: 1.5em;
}
</style>
