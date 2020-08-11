<template>
  <div id="app">
    <headbox></headbox>
    <div class="bg-index01"><svgbg></svgbg></div>
    <transition name='fade'>
      <router-view/>
    </transition>
    <foot></foot>
  </div>
</template>

<script>
import headbox from './components/header'
import foot from './components/footer'
import svgbg from './components/svgbg'

export default {
  name: 'App',
  components: {headbox,foot,svgbg}
}

</script>
<style lang="scss">
  .bg-index01{position: fixed;background-color:#41b88361;color:#666;width: 100%;height:100%;}
  .headsearch{line-height: 60px;.el-input{input{@include input(2px,#fff,#fff,transparent);}.el-input__suffix{color:#fff;}} }
</style>



