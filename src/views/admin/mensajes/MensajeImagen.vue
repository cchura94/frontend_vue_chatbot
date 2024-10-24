<template>
  <div class="max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-6 mt-10 shadow-sm">
    <h1 class="text-2xl font-bold text-gray-800 text-center mb-4">Enviar Imagen</h1>

    <label class="block text-sm font-medium text-gray-600 mb-1" for="numero">Ingrese Número:</label>
    <input
      type="number"
      v-model="datos.nro_whastsapp"
      class="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
      id="numero"
      placeholder="Ej: 73277937"
    />

    <label class="block text-sm font-medium text-gray-600 mb-1" for="imagen">Seleccionar Imagen:</label>
    <input
      type="file"
      @change="seleccionarImagen"
      class="block w-full text-gray-700 border border-gray-300 rounded-md mb-4"
      id="imagen"
    />

    <label class="block text-sm font-medium text-gray-600 mb-1" for="caption">Ingrese Caption:</label>
    <textarea
      v-model="datos.caption"
      class="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
      id="caption"
      rows="3"
      placeholder="Escribe un mensaje aquí"
    ></textarea>

    <button
      type="button"
      @click="enviarImagen()"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200"
    >
      Enviar Imagen
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import mensajeService from "./../../../services/mensaje.service";

const datos = ref({ nro_whastsapp: "", caption: "" });
const img = ref(null);

async function enviarImagen() {
  const fd = new FormData();
  fd.append("imagen", img.value);
  fd.append("nro_whastsapp", datos.value.nro_whastsapp);
  fd.append("caption", datos.value.caption);

  await mensajeService.enviarMensajeImagen(fd);
}

function seleccionarImagen(e) {
  img.value = e.target.files[0];
}
</script>
