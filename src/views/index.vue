<template>
  <section class="index-content">
    <!-- fullscreen add life word start @author: Miss Q !-->
    <div class="bg-index01" id="indexbg01"></div>
  </section>
</template>

<script>
export default {
  name: 'indexmain',
  methods: {
    setbg: function () {
      var bgdom = document.getElementById("indexbg01");
      bgdom.style.backgroundColor =  'green';
    }
  }
}

</script>

<style lang="scss">
  @import '../assets/scss/index.scss';
</style>
