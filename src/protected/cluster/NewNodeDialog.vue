<template>
  <div>
    <md-button class="md-primary md-raised md-dense"
      ref-add-node
      @click.native="open">
        Add Node
    </md-button>

    <md-dialog md-open-from="[ref-add-node]"
      md-close-to="[ref-add-node]"
      ref="add-node-dialog">
      <md-dialog-title>Add Node to Cluster</md-dialog-title>

      <md-dialog-content>
        <md-input-container>
          <label for="region">Region</label>
          <md-select name="region" id="region" v-model="regionId">
            <md-option v-for="reg in regions" :value="reg.id" :key="reg.id">
              {{ reg.name }}
            </md-option>
          </md-select>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="cancel">Cancel</md-button>
        <md-button class="md-primary"
          @click.native="done" :disabled="inProgress || !regionId">
          Ok
        </md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inProgress: false,
        regions: [
          { id: 'central-eu', name: 'Central Europe' },
          { id: 'east-eu', name: 'Eastern Europe' }
        ],
        region: null,
        regionId: null
      }
    },
    watch: {
      regionId: 'updateRegion'
    },
    methods: {
      open() {
        this.region = null;
        this.regionId = null;
        this.$refs['add-node-dialog'].open()
      },
      close() {
        this.$refs['add-node-dialog'].close()
      },
      done() {
        let process = new Promise((resolve, reject) => {
          this.inProgress = true
          // emulate request
          setTimeout(() => {
            resolve({
              id: this.generateId(),
              region: this.region,
              isActive: true
            })
          }, 2000)
        })

        process.then(node => {
          this.$emit('added', node)
          this.inProgress = false
          this.close()
        })
      },
      cancel() {
        this.region = null;
        this.regionId = null;
        this.close()
      },
      updateRegion() {
        this.region = this.regions.find(r => r.id === this.regionId)
      },
      generateId() {
        let n = Math.floor(Math.random() * 1000)
        return `node-id-${n}`
      }
    },
  }
</script>