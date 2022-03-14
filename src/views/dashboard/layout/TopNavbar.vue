<template>
  <navbar :show-navbar="showNavbar" id="navigation">
    <div class="navbar-wrapper">
      <div class="navbar-toggle" :class="{ toggled: $sidebar.showSidebar }">
        <navbar-toggle-button @click="toggleSidebar"> </navbar-toggle-button>
      </div>
      <a class="navbar-brand" href="javascript:;">
        {{ $route.name }}
      </a>
    </div>

  </navbar>
</template>
<script>
import { Navbar, NavbarToggleButton } from "@/components";

export default {
  components: {
    Navbar,
    NavbarToggleButton,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  methods:{
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  }
};
</script>
<style></style>
