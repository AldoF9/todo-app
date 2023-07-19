<template>
  <v-card height="800" width="256">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Tareas </v-list-item-title>
          <v-list-item-subtitle> Acciones </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.to }"
          link
        >
          <v-list-item-icon> </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <logout></logout>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
import Logout from "../pages/Logout.vue";
export default {
  name: "Sidebar",
  components: { Logout },
  data() {
    return {
      items: [
        { title: "Crear Tarea", to: "create_tarea" },
        { title: "Listar Tareas Completadas", to: "list_tarea" },
        { title: "Listar Tareas Pendientes", to: "list_pending_tarea" },
        { title: "Listar Todas las Tareas", to: "list_all_tarea" },
        { title: "Completar Tarea", to: "complete_tarea" },
        { title: "Borrar Tarea", to: "delete_tarea" },
        { title: "Registrar", to: "form" },
        { title: "Login", to: "login" },
      ],
    };
  },
};
</script>
