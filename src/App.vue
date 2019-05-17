<template>
  <div id="app">
    <headbox></headbox>
    <router-view/>
  </div>
</template>

<script>
import headbox from './components/headbox'
export default {
  name: 'App',
  components: {headbox}
}
</script>

<style>
body{width:100%;height:100%;background-color:#00800012;}
</style>
