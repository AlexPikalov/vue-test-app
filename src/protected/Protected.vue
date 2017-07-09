<template>
  <div class="phone-viewport">
    <dr-header v-on:toggleSideNav="onToggleClustersPanel"></dr-header>

    <div class="main-content">
      <router-view></router-view>
    </div>

    <dr-cluster-panel ref="clustersPanel"></dr-cluster-panel>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from './Header.vue'
import ClusterPanel from './cluster-panel/ClusterPanel.vue'

export default {
  components: {
    'dr-header': Header,
    'dr-cluster-panel': ClusterPanel
  },
  methods: {
    onToggleClustersPanel() {
      this.$refs.clustersPanel.toggle();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    },
    logout() {
      Vue.session.end()
      location.reload()
    }
  }
}
</script>
<style lang="scss">
  .main-content {
    padding: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
</style>