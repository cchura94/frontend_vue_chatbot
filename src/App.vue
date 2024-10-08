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

  <hr>

  <input type="file" @change="seleccionarImagen">
  <textarea v-model="datos.caption"></textarea>
<button type="button" @click="enviarImagen()">Enviar Imagen</button>

</template>

<script setup>
  import { ref } from 'vue';
  import mensajeService from "./services/mensaje.service"

  const datos = ref({nro_whastsapp: '', mensaje: ''})
  const img = ref(null)


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

  function seleccionarImagen(e){
    console.log(e.target.files[0]);
    img.value = e.target.files[0];

  }
  async function enviarImagen(){
    const fd = new FormData();
    fd.append("imagen", img.value);
    fd.append("nro_whastsapp", datos.value.nro_whastsapp);
    fd.append("caption", datos.value.caption);

    await mensajeService.enviarMensajeImagen(fd)
  }

</script>

<style scoped>
h1{
  color:blue;
}
</style>
