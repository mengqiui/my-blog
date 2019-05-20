<template>
  <div id="app">
    <headbox></headbox>
    <router-view/>
  </div>
</template>

<script>
import headbox from './components/header'
export default {
  name: 'App',
  components: {headbox}
}
</script>

<style></style>
