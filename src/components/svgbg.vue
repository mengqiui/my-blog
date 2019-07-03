<template>
  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" >
    <text :x='item.posX' :y='item.posY' v-for="item in items">{{item.text}}</text>
    <polyline points="23,329 90,328 63,413" fill="none" stroke="black" />
  </svg>
</template>

<script>
export default {
  name: 'svgbg',
  data: function(){
    return {
      items: [
        {"text":"Function","posX":100,"posY":80},{"text":"var","posX":110,"posY":109},{"text":"Window","posX":90,"posY":96},{"text":"Math.round","posX":160,"posY":100},
        {"text":"style","posX":200,"posY":20},{"text":"Background","posX":20,"posY":30},{"text":"width","posX":20,"posY":30},{"text":"Height","posX":20,"posY":30},
        {"text":"Methods","posX":20,"posY":30},{"text":"random","posX":20,"posY":30},{"text":"angular","posX":20,"posY":30},{"text":"float","posX":20,"posY":30},
        {"text":"border","posX":20,"posY":30},{"text":"css","posX":20,"posY":30},{"text":"javascript","posX":20,"posY":30},{"text":"php","posX":20,"posY":30},
        {"text":"Vue","posX":20,"posY":30},{"text":"react","posX":20,"posY":30},{"text":"install","posX":20,"posY":30},{"text":"flower","posX":20,"posY":30},
        {"text":"Header","posX":20,"posY":30},{"text":"select","posX":20,"posY":30},{"text":"input","posX":20,"posY":30},{"text":"node","posX":20,"posY":30},
        {"text":"Lovely","posX":20,"posY":30},{"text":"study","posX":20,"posY":30},{"text":"Goddess","posX":20,"posY":30},{"text":"three","posX":20,"posY":30},
        {"text":"sweet","posX":20,"posY":30},{"text":"Music","posX":20,"posY":30},{"text":"margin","posX":20,"posY":30},{"text":"Tomorrow will be better!","posX":20,"posY":30},
        {"text":"transfrom","posX":20,"posY":30},{"text":"If(Happy){Smile}else{Cry}","posX":20,"posY":30},{"text":"'Don\'t cry","posX":20,"posY":30},
        {"text":"Good Girl","posX":20,"posY":30},{"text":"You are not alone","posX":20,"posY":30},{"text":"GoodBye","posX":20,"posY":30},{"text":"Sunshine","posX":20,"posY":30},
        {"text":"Strong","posX":20,"posY":30},{"text":"You will success","posY":20,"posY":30},{"text":"polyfill","posX":20,"posY":30},{"text":"merge","posX":20,"posY":30},
        {"text":"Newyork","posX":20,"posY":30},{"text":"Paris","posX":20,"posY":30},{"text":"You are so beautiful","posX":20,"posY":30}
      ]
      
    }
  },
  computed:{
    textPos:function(){console.log(this)}
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
