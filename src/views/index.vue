<template>
  <section class="index-content">
    <!-- fullscreen add life word start @author: Miss Q !-->
    <div class="bg-index01" id="indexbg01"><svgbg></svgbg></div>
  </section>
</template>

<script>
//https://blog.csdn.net/daaikuaichuan/article/details/75204274
import svgbg from '../components/svgbg';
export default {
  name: 'indexmain',
  methods: {
   setbg: function () {
      var bgdom = document.getElementById("indexbg01");
      bgdom.style.width =  window.innerWidth+'px';
      bgdom.style.height =  (window.innerHeight)+'px';

    }
  },
  mounted: function () {
    this.setbg();
    
  },
  components:{svgbg: svgbg}
}

</script>

<style lang="scss">
  @import '../assets/scss/index.scss';
</style>
