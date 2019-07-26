// // test data
// const mynews = [{ news_content:'秋の博客a.0版本上线啦~~~',news_time:Date.now() },{ news_content:'秋の博客c.0版本上线啦~~~',news_time:Date.now() }];

const Mongoose = require('mongoose')
Mongoose.connect('mongodb://localhost:27017/myblog',{useNewUrlParser:true})
const db = Mongoose.connection;

db.on('error',function(error){
  console.log("数据库myblog连接失败："+error);return;
})

db.once('open',function(){
  console.log("ok");

})

//使用Connetion监听连接状态
db.on('connected',function(err){
  if(err){
      console.log('连接数据库失败：'+err);
  }else{
      //console.log('连接数据库成功！');
  }
});

const newsSchema = new Mongoose.Schema({
  ncontent:String,
  ndate:{type:Date,default:Date.now}
})

const blogSchema = new Mongoose.Schema({
  btype:String,//原创 or 转载
  btitle:String,//文章标题
  bcontent:String,//文章内容
  bimage:String,//文章中图片
  bview:Number,//文章浏览次数
  blabel:String,//文章分类标签
  blike:Number,//文章被点赞数量
  btime:{type:Date,default:Date.now},//文章创建时间
  bntime:{type:Date,default:Date.now}//文章更新时间
})

var news = Mongoose.model('news',newsSchema)
var article = Mongoose.model('article',blogSchema)

var dbAPI = {news:news,article:article}

module.exports = dbAPI;
