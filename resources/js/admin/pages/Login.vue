<template>
  <v-card :outline="true" rounded="xl" style="padding: 1.5rem">
    <v-card-text>
      <div>
        <div class="d-flex justify-content-center text-center">
          <div class="vue-header-icon">
            <v-icon class="color-txt-gray" style="color: #616361" large
              >mdi-book</v-icon
            >
          </div>
          <div>
            <h3 class="fields-modal">Iniciar Session</h3>
          </div>
        </div>
        <hr class="widthHr" />

        <v-form ref="form" lazy-validation>
          <v-col cols="12" class="px-2">
            <div class="fields-modal">Correo:</div>
            <v-text-field
              v-model="datos.email"
              outlined
              dense
              :rules="rules.email"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="px-2">
            <div class="fields-modal">Contraseña:</div>
            <v-text-field
              v-model="datos.password"
              type="password"
              outlined
              dense
              :rules="rules.password"
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
                background: #616361 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 6px #0000001a;
              "
              @click="submit"
            >
              Ingresar
            </v-btn>
          </v-col>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>


  <script>
export default {
  name: "Form",
  data() {
    return {
      datos: {
        nombre: "",
        email: "",
        password: "",
      },

      rules: {
        nombre: [(v) => !!v || "El nombre es obligatorio"],
        email: [
          (v) => !!v || "El correo es obligatorio",
          (v) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "El formato no es correcto",
        ],
        password: [(v) => !!v || "La contraseña es obligatoria"],
      },
    };
  },
  methods: {
    submit() {
      let valid = this.$refs.form.validate();
      localStorage.setItem("authUser", JSON.stringify(this.datos));
      localStorage.setItem("authFlag", "true");

      if (valid) {
        this.$router.replace({ name: "create_tarea" });
      }
    },
  },
};
</script>
