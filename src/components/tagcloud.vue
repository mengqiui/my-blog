<template>
  <div id="tagsbox">
    <el-tag v-for="(tag,index) in tags" :key="index" :type="tag.type" effect="plain"
     disable-transitions>{{tag.label}}</el-tag>
  </div>
</template>
 
<script>
export default {
  name: 'tagcloud',
  data(){
    return {
    tags:[
        { type: 'info', label: 'web' },
        { type: 'lightred', label: 'javascript' },
        { type: 'success', label: 'node.js' },
        { type: 'lightblue', label: 'mongoose' },
        { type: 'success', label: 'express' },
        { type: 'info', label: 'koa' },
        { type: 'lightred', label: 'es6' },
        { type: 'success', label: 'promise' },
        { type: 'lightblue', label: 'resolve' },
        { type: 'success', label: 'request' },
        { type: 'info', label: 'bootstrap' },
        { type: 'lightred', label: 'nuxt.js' },
        { type: 'success', label: 'mongoDB' },
      ]
    }
  },
  mounted(){
    this.init()
  },
  created: function () {
  },
  methods:{
    setTag(obj){
      obj.isrun = false;
      var divw = tagsbox.offsetWidth;// 外层容器宽度
      var divh = tagsbox.offsetHeight;
      var rate = Math.random() * 1 + .5 ;// 字体倍率
      var iTimer = parseInt(Math.random() * 1500);
      obj.speed = Math.ceil( Math.random() * 4 ) + 1;// 滚动速度
      //字体大小
      obj.style.fontSize = 12 * rate + 'px';
     
      //标签横向位置
      var iLeft = parseInt(Math.random() * divw);
      
      if ((iLeft - obj.offsetWidth) > 0) {
        obj.style.left = iLeft - obj.offsetWidth + "px";
      } else {
        obj.style.left = iLeft + "px";
      }
      // clearTimeout(obj.time);
      // obj.time = setTimeout(function() {
        obj.isrun = true;
      // }, iTimer);
    },
    startmove(){
      var spanTag = document.querySelectorAll('#tagsbox > span');
      for(var i = 0;i<spanTag.length;i++){
        if(spanTag[i].isrun){this.domove(spanTag[i])}
      }
    },
    domove(obj){
      //标签纵向位置
      if(obj.offsetTop <= -obj.offsetHeight){
        obj.style.top = (tagsbox.offsetHeight + obj.offsetHeight)+ "px";
        this.setTag(obj)
      }else{
        obj.style.top = (obj.offsetTop - obj.speed)+ "px";
      }
    },
    init(){
      var spanTag = document.querySelectorAll('#tagsbox > span');// 标签
      var isrun = false;// 暂停
      spanTag.forEach(item => { 
        item.isrun = true;this.setTag(item); 
        item.onmouseover = function() {
          this.isrun = false;
        };
        item.onmouseout = function() {
          this.isrun = true;
        };
      });
      setInterval(this.startmove,50)
    }
  }
}

</script>

<style lang="scss" scoped>
#tagsbox{height:260px;margin:20px 0;border:1px solid #fff;padding:5px;position: relative;overflow: hidden;
  .el-tag{cursor: pointer;position: absolute;top:260px;}
  .el-tag--lightred{background-color: rgba(170, 137, 137, 0.32);color:#f56c6c;border:1px solid rgba(185, 86, 86, 0.2);}
  .el-tag--lightblue{color:#409EFF;}
}

</style>
