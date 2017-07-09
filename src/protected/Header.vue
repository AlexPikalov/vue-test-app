<template>
  <md-toolbar>
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">My App</h2>

    <md-menu md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>account_circle</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>Profile</md-menu-item>
        <md-menu-item @click.native="logout">Logout</md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-toolbar>
</template>
<script>
import Vue from 'vue'

export default {
  methods: {
    toggleLeftSidenav() {
      this.$emit('toggleSideNav')
    },
    logout() {
      Vue.session.end()
      location.reload()
    }
  }
}
</script>