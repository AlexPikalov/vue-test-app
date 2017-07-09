<template>
  <md-card>
    <form @submit.stop.prevent="create(cluster)">
      <md-card-header>
        <h3 class="md-title">New Cluster</h3>
      </md-card-header>

      <md-card-content>
          <md-input-container>
            <label>Cluster Name</label>
            <md-input name="name" v-model="cluster.name" required></md-input>
          </md-input-container>

          <dr-cluster-nodes :nodes="cluster.nodes"></dr-cluster-nodes>

          <dr-add-node v-on:added="addNode"></dr-add-node>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit" :disabled="missingData">Create</md-button>
      </md-card-actions>
    </form>
  </md-card>
</template>
<script>
  import NewNodeDialog from './NewNodeDialog.vue'
  import ClusterNodes from './ClusterNodes.vue'

  export default {
    components: {
      'dr-add-node': NewNodeDialog,
      'dr-cluster-nodes': ClusterNodes
    },
    data() {
      return {
        cluster: {
          name: null,
          nodes: [],
        },
      };
    },
    methods: {
      create() {
        console.log('create')
      },
      show() {
        console.log('CLUSTER', this.cluster);
      },
      addNode(node) {
        this.cluster.nodes.push(node)
      },
      hasNodes() {
        return this.cluster.nodes.length > 0
      },
    },
    computed: {
      missingData() {
        return !this.hasNodes()
      }
    }
  }
</script>
