<template>
  <nav>
    <router-link to="/">Users</router-link> |
    <router-link to="/roles">Roles</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { User } from "@/models/User";
export default {
  name: "UsersView",
  methods: {
    async fetchUsers() {
      try {
        const result = await fetch(
          `https://mocki.io/v1/778f1ed9-1261-4e78-815f-60feb5925c76`
        );
        const json = await result.json();
        this.$store.getters.users.push(...json);
        console.log(json);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.flex {
  display: flex;
}

.flex-colum {
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.justify-center {
  justify-content: center;
}

.box {
  border: 2px solid #000000;
  box-shadow: 7px 7px 25px -8px rgba(189, 189, 189, 1);
  -webkit-box-shadow: 7px 7px 25px -8px rgba(189, 189, 189, 1);
  -moz-box-shadow: 7px 7px 25px -8px rgba(189, 189, 189, 1);
  display: block;
  margin: 8px;
  padding: 12px;
}

.name {
  font-size: 1.4em;
  margin-right: 12px;
}

.age {
  font-size: 1em;
  margin-right: 12px;
  color: #42b983;
}

.activated {
  border: 2px solid #42b983;
}

.deactivated {
  border: 2px solid #b94242;
}
</style>
