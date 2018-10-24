<template>
  <div id="app">
    <position-edit></position-edit>
    <hr>
    <position-list></position-list>
  </div>
</template>

<script>
import PositionEdit from './components/PositionEdit'
import PositionList from './components/PositionList'

export default {
  name: 'App',
  components: {
    PositionEdit,
    PositionList
  }
}
</script>

<style>
</style>
