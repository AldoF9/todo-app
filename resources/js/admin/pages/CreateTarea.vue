<template>
  <v-card height="700" width="856">
    <h1>Crear Tarea</h1>

    <div>
      <v-form ref="form" lazy-validation>
        <v-col cols="12" class="px-2">
          <div class="fields-modal">ID:</div>
          <v-text-field v-model="datos.id" outlined dense :rules="rules.id">
          </v-text-field>
        </v-col>

        <v-col cols="12" class="px-2">
          <div class="fields-modal">Estado:</div>
          <v-select
            v-model="datos.estado"
            :items="estados"
            label="Seleccione un estado"
            required
          >
          </v-select>
        </v-col>

        <v-col cols="12" class="px-2">
          <div class="fields-modal">Descripcion:</div>
          <v-text-field
            v-model="datos.descripcion"
            outlined
            dense
            :rules="rules.descripcion"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" class="px-3 d-flex justify-content-center">
          <v-btn
            color="#272D3B"
            width="200"
            height="50"
            class="text-white"
            style="
              border-radius: 10px;
              background: #0db60d 0% 0% no-repeat padding-box;
              box-shadow: 0px 0px 6px #0000001a;
            "
            @click="submit"
          >
            Agregar
          </v-btn>
        </v-col>
      </v-form>
    </div>
  </v-card>
</template>


  <script>
import TareaIndex from "../components/tareas/TareaIndex.vue";
import Swal from "sweetalert2";
export default {
  name: "CrearTarea",
  comments: { TareaIndex },
  data() {
    return {
      nombre: "",
      datos: {
        id: "",
        estado: "",
        descripcion: "",
      },
      estados: ["Pendiente", "Trabajado", "Terminado"],

      rules: {
        id: [(v) => !!v || "El Id es obligatorio"],
        estado: [(v) => !!v || "El estado es obligatorio"],
        descripcion: [(v) => !!v || "La descripcion es obligatoria"],
      },
    };
  },

  methods: {
    submit() {
      let valid = this.$refs.form.validate();

      const storedDatos = localStorage.getItem("formularioData");
      let registros = [];
      if (storedDatos) {
        registros = JSON.parse(storedDatos);
        if (!Array.isArray(registros)) {
          registros = [];
        }
      }

      const storedData = localStorage.getItem("formularioData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.id === this.datos.id) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Id ya existe",
          });
          return;
        }
      }

      registros.push(this.datos);
      localStorage.setItem("formularioData", JSON.stringify(registros));

      this.datos.id = "";
      this.datos.estado = "";
      this.datos.descripcion = "";
      if (valid) {
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: "Datos agregados correctamente",
        });
      }
    },
  },
};
</script>
