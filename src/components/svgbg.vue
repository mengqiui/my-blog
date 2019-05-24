<template>
  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" >
    <text x="20" y="90" transform="rotate(20 10,20)" v-for="item in items">{{item}}</text>
    <polyline points="23,329 90,328 63,413" fill="none" stroke="black" />
  </svg>
</template>

<script>
export default {
  name: 'svgbg',
  data: function(){
    return {
      items: [
        'Function', 'var', 'Window', 'Math.round', 'style', 'Background', 'width', 'Height', 'Methods', 'random', 'angular', 'float', 'border', 'css', 'javascript', 'php', 'vue',
        'react', 'install', 'flower', 'Header', 'select', 'input', 'node', 'Lovely', 'Luky', 'Goddess', 'three', 'sweet', 'study', 'Music','margin','Tomorrow will be better!',
        'transfrom', 'If(Happy){Smile}else{Cry}', 'Don\'t cry', 'You are so beautiful', 'Good Girl', 'You are not alone', 'GoodBye', 'Sunshine', 'Strong', 'You will success', 
        'polyfill', 'merge', 'Newyork', 'Paris']
    }
  },
  methods: {
    //坐标 X：1~
    randomNum: function () {
      if(random){
        range = Math.round(Math.random() * (window.innerWidth/100-min)) + min;
      }
      
      return str;
    }
  },
  mounted: function () {
    
    
  }
}

</script>

<style lang="scss">
  #mysvg{
    width: $w100;
    height: $h100;
  }
</style>
