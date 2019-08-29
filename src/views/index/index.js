export default {
  name: 'indexmain',
  data(){
    return{
      locationCity:"正在定位···",
      locationHtml:"",
      noticeanimate:false,
      noticeList:{notice:[],times:[]},
      timer:null,
      articleList:[],
      imgSrc:["../../../static/img/index01.jpg","../../../static/img/index02.jpg",
      "../../../static/img/index03.jpg","../../../static/img/index04.jpg","../../../static/img/index05.jpg",
      "../../../static/img/index06.jpg","../../../static/img/blog-head.jpg"]
    }
  },
  methods: {
    weather(){
      var that = this;
      /**  https://www.cnblogs.com/zdz8207/p/vue-axios-vue-resource-proxyTable-cookie.html  https://www.tianqiapi.com/api/?version=v6&ip=124.160.26.254 https://blog.csdn.net/srttina/article/details/83309512   **/
      // https://www.tianqiapi.com/?action=v6   天气API接口文档

      this.$axios.get(this.WEATHER + '/api.php',{params:{style:'ts',skin:'gif',ip:returnCitySN["cip"]?returnCitySN["cip"]:"124.160.26.254",column:"3"
      }}).then(res=>{that.locationHtml=res.data;
      }).catch(err=>{console.log(err)})
  
    },
    noticeUpdate(){
      var that = this;
      this.$axios.get(this.HOST + '/getnews').then(res=>{
        res.data.map((val)=> {that.noticeList.notice.push(val.ncontent);that.noticeList.times.push(val.createdAt);})
        this.timer=setInterval(this.noticeScroll,2000)
      }).catch(err=>{console.log(err)})
    },
    articleData(){
      var that = this;
      this.$axios.get(this.HOST + '/getArticle?count=3').then(res=>{
        res.data.map((val)=> {that.articleList.push(val);})
      }).catch(err=>{console.log(err)})
    },
    noticeScroll(){
      this.noticeanimate = true;
      setTimeout(()=>{
        this.noticeList.notice.push(this.noticeList.notice[0]);
        this.noticeList.times.push(this.noticeList.times[0]);
        this.noticeList.notice.shift();this.noticeList.times.shift();
        this.noticeanimate = false;
      },500)
    },
    mousego(){
      this.timer = setInterval(this.noticeScroll,2000);
    },
    mouseStop(){
      clearInterval(this.timer)
    },
    goDetail(index){
      this.$router.push({path: 'articles/'+index})

    }
  },
  created(){
    this.locationCity = returnCitySN["cname"]?returnCitySN["cname"]:"浙江省杭州市";
    this.weather(); this.noticeUpdate();
    this.articleData()
    
  }
}
