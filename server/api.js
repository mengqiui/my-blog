const dbAPI = require('./db')

module.exports = function(app){

  //设置所有请求都通过该中间件
  // app.all('*',function(req,res,next){
  //   res.writeHead({'Content-Type':'text/html;charset=utf-8'});
  //   next()
  // })

  //消息公告消息
  const newsData = [
    {ncontent:'恭喜秋の博客1.0版成功上线啦~~~'},
    {ncontent:'恭喜秋の博客1.1版成功上线啦~~~'},
    {ncontent:'恭喜秋の博客1.2版成功上线啦~~~'},
  ]
  //https://www.jianshu.com/p/620293df6bdc
  app.get('/api/addnews',function(req,res){
    dbAPI.news.create(newsData,(err,res)=>{
      console.log('ok');
    })
  })

  app.get('/api/getnews',function(req,res){
    dbAPI.news.find({},(err,result)=>{res.send(result)})
  })


  //文章数据
  const articleData = [
    {btype:'原创',btitle:'文档标题1',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    bimage:'./static/img/index01.jpg',bview:66,blabel:['Javascript','VUE','WEB'],blike:30},
    {btype:'原创',btitle:'文档标题2',bcontent:'我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本',
    bimage:'./static/img/index02.jpg',bview:28,blabel:['Javascript','VUE','WEB'],blike:16},
    {btype:'转载',btitle:'文档标题3',bcontent:'我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本',
    bimage:'./static/img/index03.jpg',bview:144,blabel:['CSS3','VUE'],blike:28,bntime:new Date().getTime()},
    {btype:'原创',btitle:'文档标题4',bcontent:'我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本',
    bimage:'./static/img/index04.jpg',bview:120,blabel:['react','VUE','JS'],blike:44,bntime:new Date().getTime()},
  
  ]

  app.get('/api/addArticle',(req,res)=>{
    dbAPI.article.create(articleData,(req,res)=>{
      console.log('ok')
    })
    res.send('成功插入文章')
  })
// 首页文章列表
  app.get('/api/getArticle',(req,res)=>{
    dbAPI.article.find({},(req,result)=>{res.send(result)}).limit(3)
  })

  app.get('*',function(req,res){
    res.end('404')
  })
}
