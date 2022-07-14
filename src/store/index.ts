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
  },
  actions: {},
  modules: {},
});
