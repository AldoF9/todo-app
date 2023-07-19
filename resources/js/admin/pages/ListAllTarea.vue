<template>
  <v-card height="700" width="856">
    <h1>Todas las Tareas</h1>
    <div>
      <ul>
        <li v-for="registro in registros" :key="registro.id">
          <p>ID: {{ registro.id }}</p>
          <p>Estado: {{ registro.estado }}</p>
          <p>Descripción: {{ registro.descripcion }}</p>
        </li>
      </ul>
    </div>
  </v-card>
</template>


    <script>
export default {
  name: "ListAllTarea",
  data() {
    return {
      registros: [],
    };
  },
  created() {
    this.registros = this.obtenerRegistros();
  },
  methods: {
    obtenerRegistros() {
      const storedData = localStorage.getItem("formularioData");
      console.log(storedData);
      if (storedData) {
        return JSON.parse(storedData);
      }
      return [];
    },
  },
};
</script>
