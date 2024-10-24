<template>
    <div class="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 mt-10 shadow-sm">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Enviar mensaje de Texto</h1>
  
      <label class="block text-sm font-medium text-gray-600 mb-1" for="numero">Ingrese Número:</label>
      <input
        type="number"
        v-model="datos.nro_whastsapp"
        class="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        id="numero"
        placeholder="Ej: 1234567890"
      />
  
      <label class="block text-sm font-medium text-gray-600 mb-1" for="mensaje">Ingrese Mensaje:</label>
      <textarea
        cols="30"
        rows="3"
        v-model="datos.mensaje"
        class="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        id="mensaje"
        placeholder="Escribe tu mensaje aquí"
      ></textarea>
  
      <button
        @click="enviarMensaje()"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200"
      >
        ENVIAR MENSAJE
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import mensajeService from "./../../../services/mensaje.service";
  
  const datos = ref({ nro_whastsapp: "", mensaje: "" });
  
  async function enviarMensaje() {
    await mensajeService.enviarMensajeTexto(datos.value);
  }
  </script>
  