<template>
    <div class="container">
        <p>this is the positionList</p>
        <ul id="example-1">
        <li v-for="position in positions" :key="position.id">
            {{ "Kunde: " + position.customer + ' Projekt: ' + position.projectName }}
        </li>
        </ul>
        <button>Update</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      positions: [
      ]
    }
  },
  created () {
    axios.get('https://vuejs-http-61f95.firebaseio.com/positions.json')
      .then(res => {
        const data = res.data
        const positions = []
        for (let key in data) {
          const position = data[key]
          position.id = key
          positions.push(position)
        }
        console.log('axios succeed')
        console.log(positions)
        this.positions = positions
      })
      .catch(error => console.log(error))
  }
}
</script>
