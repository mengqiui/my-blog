<template>
  <svg id="mylogo" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" >
    <circle cx="50" cy="28" r="26" class="mygirl">
      <animate attributeType="CSS" attributeName="fill" values="#e09ea8;#dc6779;#cc1632;#d66dbd;#6d8bd6;#000000;" dur="1s" repeatCount="indefinite"/>
    </circle>
    <defs>
      <g id="eyebox">
        <circle cx="40" cy="20" r="8" class="myeye"/>
        <circle cx="38" cy="20" r="4" class="myball">
          <!-- 参考：https://www.cnblogs.com/guxuelong/p/7743736.html 
                    https://segmentfault.com/a/1190000009371194#articleHeader3  -->
          <animateMotion path="M 0,0 H 4 V 4 H 4 Z" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>
    </defs>
    <use href="#eyebox" x="0" y="0"> </use>
    <use href="#eyebox" x="20" y="0"></use>
    <path d="M 36 36 A 45 145 0 0 0 63 36" class="mymouth" />
  </svg>
</template>

<script>
export default {
  name: 'mylogo'
}

</script>

<style lang="scss" scoped>
  #mylogo{
    width:85px;height:60px;
    .mygirl{
      fill: #f1bdc5;
      transition: all .5s ease-in-out 0s;
      -moz-transition: all .5s ease-in-out 0s;
      -webkit-transition: all .5s ease-in-out 0s;
      -o-transition: all .5s ease-in-out 0s;
    }
    .myeye{
      fill:#f1f0ef;
    }
    .myball{
      fill:#312d2d;
    }
    .mymouth{
      stroke:#f1f0ef;
      stroke-width:2;
      fill: none;
    }
    .myhair{
      stroke-width:3;stroke: #312d2d;
    }
  }
</style>
