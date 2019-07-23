export default {
  name: 'indexmain',
  data(){
    return{
      locationCity:"正在定位···",
      locationHtml:"",
      noticeanimate:false,
      noticeList:'',
      timer:null,
      imgSrc:["../../../static/img/index01.jpg","../../../static/img/index02.jpg",
      "../../../static/img/index03.jpg","../../../static/img/index04.jpg","../../../static/img/index05.jpg",
      "../../../static/img/index06.jpg","../../../static/img/blog-head.jpg"]
    }
  },
  methods: {
    weather:function(){
      var that = this;
      /**  https://www.cnblogs.com/zdz8207/p/vue-axios-vue-resource-proxyTable-cookie.html  https://www.tianqiapi.com/api/?version=v6&ip=124.160.26.254 https://blog.csdn.net/srttina/article/details/83309512   **/
      // https://www.tianqiapi.com/?action=v6   天气API接口文档

      this.$axios.get(this.HOST + '/api.php',{params:{style:'ts',skin:'gif',ip:returnCitySN["cip"]?returnCitySN["cip"]:"124.160.26.254",column:"3"
      }}).then(res=>{that.locationHtml=res.data;
      }).catch(err=>{console.log(err)})
  
    },
    noticeUpdate:function(){
      this.noticeList = ["秋の博客1.0版本上线啦a~~~","秋の博客1.0版本上线啦b~~~","秋の博客1.0版本上线啦c~~~","秋の博客1.0版本上线啦d~~~","秋の博客1.0版本上线啦e~~~"];
    },
    noticeScroll:function(){
      this.noticeanimate = true;
      setTimeout(()=>{
        this.noticeList.push(this.noticeList[0]);
        this.noticeList.shift();
        this.noticeanimate = false;
      },500)
    },
    mousego:function(){
      this.timer = setInterval(this.noticeScroll,2000);
    },
    mouseStop:function(){
      clearInterval(this.timer)
    }
  },
  created:function(){
    this.locationCity = returnCitySN["cname"]?returnCitySN["cname"]:"浙江省杭州市";
    this.weather(); this.noticeUpdate();
    this.timer=setInterval(this.noticeScroll,2000)
    
  }
}
