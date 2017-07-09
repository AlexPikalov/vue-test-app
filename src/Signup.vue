<template>
  <md-card>
    <form novalidate @submit.stop.prevent="submit">
      <md-card-header>
        <div class="md-title">Signup</div>
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
        <md-input-container>
          <md-input v-model="passwordConfirm"
            type="password"
            placeholder="Confirm Password">
          </md-input>
        </md-input-container>
      </md-card-content>
      <md-card-actions>
        <md-button type="submit"
          class="md-raised md-primary"
          v-on:click="submit()">
          Signup
        </md-button>
        <md-button type="cance" v-on:click="cancel()">Clear</md-button>
      </md-card-actions>
    </form>
  </md-card>
</template>
<script>
  export default {
    data() {
      return {
        email: null,
        password: null,
        passwordConfirm: null
      }
    },
    methods: {
      submit() {
        console.log(this.email, this.password);
      },
      cancel() {
        this.email = null;
        this.password = null;
        this.passwordConfirm = null;
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