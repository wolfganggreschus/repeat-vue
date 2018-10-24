<template>
    <div class="container">
        <p>this is the positionList</p>
        <ul id="example-1">
        <li v-for="position in positions" :key="position.id">
            {{ "Kunde: " + position.customer + ' Projekt: ' + position.projectName }}
        </li>
        </ul>
        <button @click="getCurrentPositions">Update</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      positions: [
      ]
    }
  },
  methods: {
    getCurrentPositions () {
      this.positions = this.$store.getters.getPosition
    }
  },
  created: function () {
    this.getCurrentPositions()
  }
}
</script>
