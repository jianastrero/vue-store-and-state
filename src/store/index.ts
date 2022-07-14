import { createStore } from "vuex";
import { User } from "@/models/User";

export default createStore({
  state: {
    users: [] as User[],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
