<template>
  <div>
    <h1>Users</h1>
    <div class="flex justify-center">
      <input v-model="user.name" placeholder="name" style="margin-right: 4px" />
      <input v-model="user.age" placeholder="age" style="margin-right: 4px" />
      <button @click="addUser">Add User</button>
    </div>
    <div class="flex">
      <div class="flex-1">
        <h2>Activated Users</h2>
        <div
          class="box activated"
          v-for="user in this.$store.getters.activatedUsers"
          :key="user.id"
        >
          <span class="name">{{ user.name }}</span>
          <span class="age">{{ user.age }}</span>
          <button @click="deactivateUser(user)">Deactivate</button>
        </div>
      </div>
      <div class="flex-1">
        <h2>Dectivated Users</h2>
        <div
          class="box deactivated"
          v-for="user in this.$store.getters.deactivatedUsers"
          :key="user.id"
        >
          <span class="name">{{ user.name }}</span>
          <span class="age">{{ user.age }}</span>
          <button @click="activateUser(user)">Activate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "@/models/User";

export default {
  name: "UsersView",
  data() {
    return {
      user: {} as User,
    };
  },
  methods: {
    addUser() {
      this.$store.commit("addUser", this.user);
    },
    activateUser(user: User) {
      this.$store.commit("activateUser", user);
    },
    deactivateUser(user: User) {
      this.$store.commit("deactivateUser", user);
    },
  },
};
</script>

<style scoped></style>
