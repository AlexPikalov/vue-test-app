<template>
  <md-card>
    <form novalidate @submit.stop.prevent="submit">
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>
      <md-card-content>
        <md-input-container>
          <label>Email</label>
          <md-input v-model="email" placeholder>Email</md-input>
        </md-input-container>

        <md-input-container>
          <label>Password</label>
          <md-input v-model="password" type="password" placeholder="Password"></md-input>
        </md-input-container>
      </md-card-content>
      <md-card-actions>
        <md-button type="submit" class="md-raised md-primary" v-on:click="submit()">Login</md-button>
        <md-button type="cance" v-on:click="cancel()">Clear</md-button>
      </md-card-actions>
    </form>
  </md-card>
</template>
<script>
  import Vue from 'vue'

  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      submit() {
        console.log(this.email, this.password);

        Vue.session.start(this.asJson())
        this.$router.push('/')
      },
      cancel() {
        this.email = null;
        this.password = null;
      },
      asJson() {
        return {
          email: this.email,
          password: this.password
        };
      } 
    }
  }
</script>
<style lang="scss">
  .md-card {
    max-width: 480px;
    margin: 3rem auto;
  }
</style>