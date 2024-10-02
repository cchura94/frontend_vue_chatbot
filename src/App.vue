<template>
  <h1>INICIO</h1>

  {{ datos }}
  <div>
    <label for="">Ingrese Numero:</label>
    <input type="number" v-model="datos.nro_whastsapp">
    <br>
    <label for="">Ingrese Mensaje:</label>
    <textarea cols="30" rows="3" v-model="datos.mensaje"></textarea>
  </div>
  <button v-on:click="enviarMensaje()">ENVIAR MENSAJE</button>
  <button @click="enviarMensaje()">ENVIAR MENSAJE 2</button>
  
</template>

<script setup>
  import { ref } from 'vue';
  import mensajeService from "./services/mensaje.service"

  const datos = ref({nro_whastsapp: '', mensaje: ''})


  async function enviarMensaje(){

    await mensajeService.enviarMensajeTexto(datos.value);

    // await mensajeService.enviarMensajeImagen(datos.value);

    /*
    await fetch("http://127.0.0.1:3000/mensaje/texto", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos.value)
    })
    */
  } 

</script>

<style scoped>
h1{
  color:blue;
}
</style>
