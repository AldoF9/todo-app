<template>
  <div>
    <v-dialog v-model="dialog" width="300">
      <template v-slot:activator="{ on, attrs }">
        <div style="margin-top: 50px">
          <v-btn color="#616361" dark small block v-bind="attrs" v-on="on">
            Cerrar sesión
          </v-btn>
        </div>
      </template>
      <v-card class="rounded-xl">
        <v-card-title>
          <p class="log-out">Cerrar sesión</p>
        </v-card-title>
        <v-card-text>
          <p class="text-log-out">¿Está seguro que desea cerrar sesión?</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#616361" outlined small @click="dialog = false">
            <span class="">Cancelar</span>
          </v-btn>
          <v-btn color="#616361" dark small @click="logout">
            <span class="">Aceptar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: "Logout",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    logout() {
      localStorage.setItem("authFlag", "false");
    },
  },
};
</script>
