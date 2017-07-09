<template>
  <md-sidenav class="md-left" ref="sideNav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">
          <i class="material-icons">settings_system_daydream</i>
          Cluster Panel
        </h3>
      </div>
    </md-toolbar>

    <md-list v-if="clusters.length">
      <md-list-item v-for="cluster in clusters" :key="cluster.id">
        <md-button class="md-primary" @click.native="toCluster(cluster)">{{ cluster.name }}</md-button>
      </md-list-item>
    </md-list>

    <p v-if="!clusters.length">
      You don't have running clusters
    </p>

    <div>
      <md-button class="md-raised md-primary"
        @click.native="toNewCluster">
          New Cluster
      </md-button>
    </div>
  </md-sidenav>
</template>
<script>
  export default {
    data() {
      return {
        clusters: [
          { name: 'Facebook data', id: '123-123' },
          { name: 'LinkedIn data', id: '321-321' }
        ]
      };
    },
    methods: {
      toggle() {
        this.$refs.sideNav.toggle()
      },
      toNewCluster() {
        this.$refs.sideNav.close()
        this.$router.push({ name: 'cluster.new' })
      },
      toCluster(cluster) {
        this.$refs.sideNav.close()
        this.$router.push({ name: 'cluster.view', params: { id: cluster.id } })
      }
    }
  }
</script>