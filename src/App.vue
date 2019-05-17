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

<style></style>
