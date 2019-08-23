<template>
  <div id="tagsbox">
      <!-- :style="{top:(tag.posY||270)+'px',left:(tag.posX||0)+'px',fontSize:+(tag.fontsize||12)+'px'}"  -->
    <el-tag v-for="(tag,index) in tags" :key="index" :type="tag.type" effect="plain" disable-transitions>{{tag.label}}</el-tag>
  </div>
</template>
 
<script>
export default {
  name: 'tagcloud',
  data(){
    return {
      tags:[
          { type: '', label: 'web' },
          { type: 'success', label: 'javascript' },
          { type: 'info', label: 'node.js' },
          { type: 'danger', label: 'mongoose' },
          { type: 'success', label: 'express' },
          { type: 'info', label: 'koa' },
          { type: 'danger', label: 'es6' },
          { type: 'success', label: 'promise' },
          { type: 'info', label: 'resolve' },
          { type: 'danger', label: 'request' },
          { type: 'danger', label: 'bootstrap' },
          { type: 'danger', label: 'nuxt.js' },
          { type: 'warning', label: 'mongoDB' },
      ]
    }
  },
  mounted(){
    this.init()
  },
  created: function () {
    // for(var i=0;i<this.tags.length;i++){
    //   this.tags[i].posX = Math.floor(Math.random()*(-180)+180);
    //   this.tags[i].posY = 237;
    // }
  },
  methods:{
    setTag(obj){
      var divw = tagsbox.offsetWidth;// 外层容器宽度
      var divh = tagsbox.offsetHeight;
      var rate = Math.floor( Math.random() * 1 + 1 )// 字体倍率
      //字体大小
      let fontsize = 12 * rate;
      obj.style.fontSize = fontsize + 'px';
      // that.$set(that.tags[i],'fontsize',fontsize);
    
      //标签横向位置
      var iLeft = parseInt(Math.random() * divw);
      
      if ((iLeft - obj.offsetWidth) > 0) {
        obj.style.left = iLeft - obj.offsetWidth + "px";
      } else {
        obj.style.left = iLeft + "px";
      }
      //that.$forceUpdate();
      setInterval(this.startmove(obj),50)
    },
    startmove(obj){
      //标签纵向位置
      
      if(obj.offsetTop <= -obj.offsetHeight){
        obj.style.top = tagsbox.offsetHeight;
        //this.$set(this.tags[i],'posY',tagsbox.offsetHeight)
      }else{
        obj.style.top = obj.offsetTop - obj.speed;
        //this.$set(this.tags[i],'posY',obj.offsetTop-obj.speed)
      }

      // console.log(obj.offsetTop , obj.speed)
    },
    init(){
      var spanTag = document.querySelectorAll('#tagsbox > span');// 标签
      var pause = true;// 暂停
      var speed = Math.ceil( Math.random() * 4 ) + 1;// 滚动速度
      spanTag.forEach(item => { item.pause = false;item.speed = speed; this.setTag(item); });
    }
  }
}

</script>

<style lang="scss" scoped>
#tagsbox{height:260px;margin:20px 0;border:1px solid #fff;padding:5px;position: relative;overflow: hidden;
  .el-tag{cursor: pointer;position: absolute;transition:all .2s}
}

</style>
