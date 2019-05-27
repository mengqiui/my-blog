<template>
  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" >
    <text :x='posx' :y="posY" transform="rotate(20 10,20)" v-for="item in items">{{item}}</text>
    <polyline points="23,329 90,328 63,413" fill="none" stroke="black" />
  </svg>
</template>

<script>
export default {
  name: 'svgbg',
  data: function(){
    return {
      posX: 20,
      posY: 90,
      items: [
        'Function', 'var', 'Window', 'Math.round', 'style', 'Background', 'width', 'Height', 'Methods', 'random', 'angular', 'float', 'border', 'css', 'javascript', 'php', 'vue',
        'react', 'install', 'flower', 'Header', 'select', 'input', 'node', 'Lovely', 'Luky', 'Goddess', 'three', 'sweet', 'study', 'Music','margin','Tomorrow will be better!',
        'transfrom', 'If(Happy){Smile}else{Cry}', 'Don\'t cry', 'You are so beautiful', 'Good Girl', 'You are not alone', 'GoodBye', 'Sunshine', 'Strong', 'You will success', 
        'polyfill', 'merge', 'Newyork', 'Paris']
      
    }
  },
  methods: {
    setPos:function(){
        var num1 = Math.random()*100;/*产生随机数*/
        var num2 = Math.random()*80;
        console.log(num1,num2)
        return this.posX=num1,this.posY=num2;
    }
  },
  mounted: function () {
    this.setPos();
    
  }
}

</script>

<style lang="scss">
  #mysvg{
    width: $w100;
    height: $h100;
  }
</style>
