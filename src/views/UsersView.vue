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
          v-for="user in activatedUsers"
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
          v-for="user in deactivatedUsers"
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
  props: ["users"],
  data() {
    return {
      user: {} as User,
    };
  },
  computed: {
    activatedUsers(): User[] {
      return this.$store.state.users.filter((user: User) => {
        return !user.deactivated;
      });
    },
    deactivatedUsers(): User[] {
      return this.$store.state.users.filter((user: User) => {
        return user.deactivated;
      });
    },
  },
  methods: {
    addUser() {
      const nameNoSpace = this.user.name.replace(" ", "");
      const randomString = Math.random().toString(36);
      this.user.id = randomString + nameNoSpace;
      this.user.deactivated = false;
      this.$emit("userAdd", this.user);
    },
    activateUser(user: User) {
      user.deactivated = false;
    },
    deactivateUser(user: User) {
      user.deactivated = true;
    },
  },
};
</script>

<style scoped></style>
