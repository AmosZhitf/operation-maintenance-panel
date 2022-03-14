import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  state: {
    user_group: "",
    user_id: "",
    user_token: "",
    user_metadata: {},
    permission: [],
  },
  mutations: {
    UPDATE_VARS(state, update_var) {
      for (const [key, value] of Object.entries(update_var)) {
        if (key in state) state[key] = value;
      }
    },
    CLEAR_VARS(state) {
      let init_state = {
        user_group: "",
        user_id: "",
        user_token: "",
        user_metadata: {},
        permission: [],
      };
      for (const [key, value] of Object.entries(init_state)) {
        if (key in state) state[key] = value;
      }
    },
  },
  plugins: [
    createPersistedState({ storage: window.sessionStorage, key: "ChohoTechOps" }),
  ],
});