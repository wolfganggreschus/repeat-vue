<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Position erstellen</h1>
            <hr>
            <div class="form-group">
                <label for="email">Kunde</label>
                <input
                        type="text"
                        id="email"
                        class="form-control"
                        v-model="position.customer">
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="project">Projekt</label>
                <input
                        type="text"
                        id="project"
                        class="form-control"
                        v-model="position.projectName">
            </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button
              class="btn btn-primary" @click="onSubmit">Submit!
            </button>
        </div>
      </div>
    </form>
    <hr>
    <button @click="setCustomerToSchitz">zu Schitz</button>
    <button @click="setCustomerToWolfgang('Annika')">zu Wolfgang</button>
    <button @click="onSubmit">Send Axios</button>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
              <h4>Your Data</h4>
          </div>
          <div class="panel-body">
              <p>Kunde: {{ position.customer }}</p>
              <p>Projekt: {{ position.projectName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      position: {
        customer: '',
        projectName: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'setCustomerToSchitz',
      'setCustomerToWolfgang'
    ]),
    onSubmit () {
      const formData = {
        customer: this.position.customer,
        projectName: this.position.projectName
      }
      console.log('submitted')
      // alert(formData)
      axios.post('https://vuejs-http-61f95.firebaseio.com/positions.json', this.position)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      this.$store.dispatch('addPosition', formData)
    }
  }
}
</script>
