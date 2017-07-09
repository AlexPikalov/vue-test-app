<template>
  <div id="view-single-cluster">
    <div v-if="cluster">{{ cluster.id }}</div>
    <div v-else-if="!loading">No cluster found</div>
    <md-spinner md-indeterminate v-else class="loading"></md-spinner>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cluster: null,
        loading: false
      };
    },
    watch: {
      '$route.params.id': 'fetchData'
    },
    created() {
      // retrieve
      this.fetchData()
    },
    methods: {
      fetchData() {
        let id = this.$route.params.id
        let mock = { name: 'Cluster Name' }
        let cluster = Object.assign(mock, { id: this.$route.params.id })
        let promise = new Promise(resolve => {
          this.cluster = null;
          this.loading = true;
          setTimeout(() => {
            resolve(cluster)
          }, 2000)
        })

        return promise
          .then(data => {
            this.cluster = data
            this.loading = false
          })
      }
    }
  }
</script>
<style lang="scss">
.loading {
  margin-top: 30rem auto 0;
}
</style>
