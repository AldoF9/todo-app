<template>
  <v-card height="700" width="856">
    <h1>Crear Tarea</h1>
  </v-card>
</template>


  <script>
import TareaIndex from "../components/tareas/TareaIndex.vue";
export default {
  name: "CrearTarea",
  comments: { TareaIndex },
  data: () => ({
    client: null,
  }),
};
</script>
