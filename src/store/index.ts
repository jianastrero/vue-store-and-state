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
  mutations: {},
  actions: {},
  modules: {},
});
