<template>
  <div>
    <md-table v-if="nodes && nodes.length">
      <md-table-header>
        <md-table-row>
          <md-table-head></md-table-head>
          <md-table-head>ID</md-table-head>
          <md-table-head>Region</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="node in nodes" :key="node.id">
          <md-table-cell>
            <md-button class="md-primary"
              @click.native="showDetailsFor(node)">
              <md-icon>info</md-icon>
            </md-button>
          </md-table-cell>
          <md-table-cell>
            <span>{{ node.id }}</span>
          </md-table-cell>
          <md-table-cell>{{ node.region && node.region.name }}</md-table-cell>
          <md-table-cell>
            <md-button @click.native="removeNode(node)">
              <md-icon>delete</md-icon>
            </md-button>
            <md-button class="active-control"
              v-bind:class="{ 'md-active': node.isActive }"
              @click.native="toogleNode(node)">
              <md-icon>
                power_settings_new
              </md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <md-dialog-confirm
      md-title="Remove node"
      :md-content-html="confirm.contentHtml"
      :md-ok-text="confirm.ok"
      :md-cancel-text="confirm.cancel"
      @close="onCloseConfirm"
      ref="confirmRemove">
    </md-dialog-confirm>

    <md-dialog ref="nodeDetails">
      <md-dialog-title>Node</md-dialog-title>
      <md-dialog-content>Detailed info about the node {{ nodeForDetails && nodeForDetails.id }}</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary"
          @click.native="closeNodeDetails()">
          Close
        </md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
  export default {
    props: ['nodes'],
    data() {
      return {
        confirm: {
          contentHtml: 'Do you want to remove the node from current cluster?',
          ok: 'Remove',
          cancel: 'Cancel'
        },
        nodeForDelete: null,
        nodeForDetails: null
      }
    },
    methods: {
      removeNode(node) {
        this.$refs.confirmRemove.open();
        this.nodeForDelete = node;
      },
      onCloseConfirm(ctype) {
        if (ctype === 'ok' && this.nodeForDelete) {
          let i = this.nodes.indexOf(this.nodeForDelete)
          this.nodes.splice(i, 1)
        }
        this.nodeForDelete = null;
      },
      toogleNode(node) {
        node.isActive = !node.isActive;
      },
      showDetailsFor(node) {
        this.nodeForDetails = node;
        this.$refs.nodeDetails.open();
      },
      closeNodeDetails() {
        this.$refs.nodeDetails.close();
        this.nodeForDetails = null;
      }
    },
    mounted() {
      console.log(this.nodes, this.edit);
    }
  }
</script>
<style lang="scss">
  .md-table .md-table-cell .md-button .md-icon {
    margin-left: -7px;
  }
  .md-table .md-table-cell .md-button.active-control .md-icon {
    font-weight: bold;
  }
  .md-table .md-table-cell .md-button.active-control.md-active .md-icon {
    color: green;
  }
</style>
