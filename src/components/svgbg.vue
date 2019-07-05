<template>
  <svg id="mysvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" >
    <text :x='item.posX' :y='item.posY' :id="'text'+item.index" :key=" item.index "  @mouseover="textAnimate('text'+item.index)"  v-for=" item in svglist ">{{ item.text }}</text>
  </svg>
</template>

<script>
export default {
  name: 'svgbg',
  data: function(){
    return {
      svglist: [
        {"text":"Function"},{"text":"var"},{"text":"Window"},{"text":"Math.round"},{"text":"style"},{"text":"Background"},{"text":"width"},{"text":"Height"},
        {"text":"Methods"},{"text":"random"},{"text":"angular"},{"text":"float"},{"text":"border"},{"text":"css"},{"text":"javascript"},{"text":"php"},
        {"text":"Vue"},{"text":"react"},{"text":"install"},{"text":"flower"},{"text":"Header"},{"text":"select"},{"text":"input"},{"text":"node"},
        {"text":"Lovely"},{"text":"study"},{"text":"Goddess"},{"text":"three"},{"text":"sweet"},{"text":"Music"},{"text":"margin"},{"text":"Tomorrow will be better!"},
        {"text":"transfrom"},{"text":"If(Happy){Pealse smile !}"},{"text":"Don't cry"},{"text":"Good Girl"},{"text":"You are not alone"},{"text":"GoodBye"},{"text":"Sunshine"},
        {"text":"Strong"},{"text":"You will success"},{"text":"polyfill"},{"text":"merge"},{"text":"Newyork"},{"text":"Paris"},{"text":"You are so beautiful"},
        {"text":"copyright"},{"text":"submit"},{"text":"placeholder"},{"text":"parseFloat"},{"text":"addEventListener"},{"text":"navigator"},{"text":"setInterval"},
        {"text":"setTimeout"},{"text":"Easier said than done"},{"text":"Don’t take it for granted."},{"text":"Don’t let me down."},{"text":"better late than never."},
        {"text":"go for it! just do it!"},{"text":"Experience is the mother of wisdom."},{"text":"No cross, no crown"},{"text":"Don't speek,just do it!"},
        {"text":"别点我了！"},{"text":"development"},{"text":"refactor"},{"text":"你说我可爱不~(@^_^@)~"},{"text":"快告诉我，好玩不？"},{"text":"我走了，再见！"},
        {"text":"Come on,girl!"},{"text":"SVG is best"},{"text":"谁又在偷偷暗恋我⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄"},
      ]
      
    }
  },
  computed:{
    textPos:function(){
      var screenX = window.screen.availWidth;
      var screenY = window.screen.availHeight;
      for(var key in this.svglist){
        this.svglist[key].index = key;
        this.svglist[key].posX =  Math.floor((Math.random()*(screenX-100))+20);
        this.svglist[key].posY =  Math.floor((Math.random()*(screenY-100))+60);
        this.svglist[key].rotate = 'rotate('+Math.floor((Math.random()*80)+0)+')';
      //console.log(this.svglist[key].rotate);
      }
    }
  },
  created: function () {
    this.textPos
  },
  methods:{
    setTime:function(dom,atr,val,time){setTimeout(function(){dom.setAttribute(atr,val)},time)},
    textAnimate:function(elm){var that = this;
      var anmatelist = {
        "go1":function(dom){dom.setAttribute("dx","100");that.setTime(dom,"dx","",2000)},//右移100像素
        "go2":function(dom){dom.setAttribute("dy","50");that.setTime(dom,"dy","",2000)},//左移100像素
        "go3":function(dom){dom.setAttribute("transform","rotate(-45 "+dom.getAttribute('x')+","+dom.getAttribute('y')+")");that.setTime(dom,"transform","",2000);},//右移100像素
        "go4":function(dom){dom.setAttribute("transform","rotate(20)");that.setTime(dom,"transform","",2000);},//右移100像素
        "go5":function(dom){//参考https://www.cnblogs.com/xiaohuochai/p/7478261.html
          cancelAnimationFrame(oTimer); oTimer =  requestAnimationFrame(frame);
          var x = [],y = []; var domLength = dom.innerHTML.length , t = 0, oTimer = null;
          for(var i = 0; i < domLength; i++){ x.push(2*Math.PI/domLength); }//计算X值
          function rangeY(t){y = [];var ly = 0,cy;for(i = 0; i < domLength; i++){cy = -20*Math.sin(0.5*i+t); y.push(cy-ly);ly = cy;}}
          function frame(){t +=0.1;rangeY(t);dom.setAttribute('dx',x.join(' '));dom.setAttribute('dy',y.join(' '));oTimer =  requestAnimationFrame(frame);}
          setTimeout(function(){cancelAnimationFrame(oTimer);dom.setAttribute("dy","0");dom.setAttribute("dx","0")},3000)
        },
        "go6":function(dom){dom.setAttribute("transform","rotate(45 "+dom.getAttribute('x')+","+dom.getAttribute('y')+")");that.setTime(dom,"transform","",2000);},
        "go7":function(dom){dom.setAttribute("transform","scale(2, 2) rotate(-1 "+dom.getAttribute('x')+","+dom.getAttribute('y')+")");that.setTime(dom,"transform","",1000);},
        "go8":function(dom){dom.setAttribute("transform","rotate(90 "+dom.getAttribute('x')+","+dom.getAttribute('y')+")");that.setTime(dom,"transform","",2000);},
        "go9":function(dom){dom.setAttribute("transform","rotate(90 "+dom.getAttribute('x')+","+dom.getAttribute('y')+")");that.setTime(dom,"transform","",2000);},
      }
      var num = Math.floor((Math.random()*(Object.keys(anmatelist).length))+1);
      var fuc = 'go'+num;
      anmatelist[fuc](document.getElementById(elm));
      //anmatelist.go7(document.getElementById(elm));

    }
  }
}

</script>

<style lang="scss">
  #mysvg{
    width: $w100;
    height: $h100;
    text{
      transition: all .5s ease-in-out 0s;
      -moz-transition: all .5s ease-in-out 0s;
      -webkit-transition: all .5s ease-in-out 0s;
      -o-transition: all .5s ease-in-out 0s;
    }
  }
</style>
