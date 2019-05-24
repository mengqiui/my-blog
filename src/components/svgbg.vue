<template>
  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" >
    <text x="10" y="40" transform="rotate(60 10,20)" v-for="item in items">{{item}}</text>
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
    randomNum: function () {
      
      if(random){
        range = Math.round(Math.random() * (window.innerWidth/100-min)) + min;
      }
      
      return str;
    },
    setbg: function () {
      var bgdom = document.getElementById("mysvg");
      var topnav = document.getElementById("headertop");
      
      bgdom.style.width =  window.innerWidth+'px';
      bgdom.style.height =  (window.innerHeight-topnav.Height)+'px';

    }
  },
  mounted: function () {
    this.setbg();
    
  }
}

</script>

<style lang="scss">
  
</style>
