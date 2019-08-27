const dbAPI = require('./db')

module.exports = function(app){

  //设置所有请求都通过该中间件
  app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })

  //消息公告消息
  const newsData = [
    {ncontent:'解决IE9及其以下版本浏览器placeholder不识别问题'},
    // {ncontent:'恭喜秋の博客1.1版成功上线啦~~~'},
  ]
  //https://www.jianshu.com/p/620293df6bdc
  app.get('/api/addnews',function(req,res){
    dbAPI.news.create(newsData,(err,res)=>{
      console.log('ok');
    })
    res.send('ok')
  })

  app.get('/api/getnews',function(req,res){
    dbAPI.news.find({},(err,result)=>{res.send(result)})
  })

  //文章数据
  const articleData = [
    {btype:'原创',btitle:'文档标题文档标题文档标题文档标题文档标题文档标题文档标题文档标题文档标题文档标题15',bcontent:'我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本~~~~~~~',
    bimage:'./static/img/index01.jpg',bview:6524,blabel:['vue.js','webpack'],blike:958},
    // {btype:'原创',btitle:'文档标题6',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index01.jpg',bview:104,blabel:['mongodb','VUE'],blike:39},
    // {btype:'原创',btitle:'文档标题7',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index02.jpg',bview:112,blabel:['mongodb','VUE'],blike:61},
    // {btype:'原创',btitle:'文档标题8',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index03.jpg',bview:60,blabel:['mongodb','VUE'],blike:45},
    // {btype:'原创',btitle:'文档标题9',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index05.jpg',bview:32,blabel:['mongodb','VUE'],blike:12},
    // {btype:'原创',btitle:'文档标题10',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index01.jpg',bview:25,blabel:['mongodb','VUE'],blike:17},
    // {btype:'原创',btitle:'文档标题11',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index04.jpg',bview:0,blabel:['mongodb','VUE'],blike:0},
    // {btype:'原创',btitle:'文档标题12',bcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // bimage:'./static/img/index02.jpg',bview:169,blabel:['mongodb','VUE'],blike:55}
    // {btype:'转载',btitle:'文档标题2',bcontent:'我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本，我是测试文本~~~~~~~',
    // bimage:'./static/img/index02.jpg',bview:66,blabel:['Javascript','VUE','WEB'],blike:30}
    // {btype:'原创',btitle:'文档标题3',bcontent:'compositionstart：是指中文输入法开始输入触发，每次输入开始仅执行一次，执行的开始是 end 事件结束了才会触发；compositonupdate：是指中文输入法在输入时触发，也就是可能得到 kan\'dao\'l\'m 这种内容，这里返回的内容是实时的，仅在 start 事件触发后触发，输入时实时触发；compositionend：是指中文输入法输入完成时触发，这是得到的结果就是最终输入完成的结果，此事件仅执行一次。需要特别注意的是：该事件触发顺序在 input 事件之后，故而需要在此事件的处理逻辑里调用一次 input 里边的业务逻辑；',
    // bimage:'./static/img/index03.jpg',bview:260,blabel:['Javascript','VUE','WEB'],blike:120}
  ]

  app.get('/api/addArticle',(req,res)=>{
    dbAPI.article.create(articleData,(req,res)=>{
      console.log('ok')
    })
    res.send('成功插入文章')
  })
// 首页文章列表  Room.find({}).sort({date: 'desc'}).exec(function(err, docs) { ... });
  app.get('/api/getArticle',(req,res)=>{
    if(req.query.time){
      dbAPI.article.find({}).sort({updatedAt:req.query.time}).limit(req.query.count?parseInt(req.query.count):'').exec((err, docs)=>{res.send(docs)})
    }else{
      dbAPI.article.find({},(request,result)=>{res.send(result)}).sort({'bview':-1}).limit(req.query.count?parseInt(req.query.count):'')
    }
  })

  app.get('*',function(req,res){
    res.end('404')
  })
}
