import { createStore } from "vuex";
import { User } from "@/models/User";

export default createStore({
  state: {
    users: [] as User[],
  },
  getters: {
    users(state) {
      return state.users;
    },
    activatedUsers(state): User[] {
      return state.users.filter((user: User) => {
        return !user.deactivated;
      });
    },
    deactivatedUsers(state): User[] {
      return state.users.filter((user: User) => {
        return user.deactivated;
      });
    },
  },
  mutations: {
    addUser(state, user: User) {
      const nameNoSpace = user.name.replace(" ", "");
      const randomString = Math.random().toString(36);
      user.id = randomString + nameNoSpace;
      user.deactivated = false;
      state.users.push(user);
    },
    activateUser(state, user: User) {
      user.deactivated = false;
    },
    deactivateUser(state, user: User) {
      user.deactivated = true;
    },
    addUsers(state, user: User[]) {
      state.users.push(...user);
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const result = await fetch(
          `https://mocki.io/v1/778f1ed9-1261-4e78-815f-60feb5925c76`
        );
        const json = await result.json();
        context.commit("addUsers", json);
        console.log(json);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
