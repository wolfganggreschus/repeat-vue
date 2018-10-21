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
              class="btn btn-primary">Submit!
            </button>
        </div>
      </div>
    </form>
    <hr>
    <button @click="setCustomerToSchitz">zu Schitz</button>
    <button @click="setCustomerToWolfgang('Annika')">zu Wolfgang</button>
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

export default {
  methods: {
    ...mapActions([
      'setCustomerToSchitz',
      'setCustomerToWolfgang'
    ])
  },
  computed: {
    position () {
      return this.$store.getters.getPosition
    }
  }
}
</script>
