<template>
  <section class="index-content">
    <el-row :gutter="20">
      <el-col :span="24" :offset="2">
        <!-- fullscreen add life word start @author: Miss Q !-->
        <div class="bg-index01" id="indexbg01"><svgbg></svgbg></div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'indexmain',
  methods: {
   
  },
  components:{svgbg:require('../components/svgbg').default}
}

</script>

<style lang="scss">
  @import '../assets/scss/index.scss';
</style>
