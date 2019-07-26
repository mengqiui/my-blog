const dbAPI = require('./db')

module.exports = function(app){
  //设置所有请求都通过该中间件
  // app.all('*',function(req,res,next){
  //   res.writeHead({'Content-Type':'text/html;charset=utf-8'});
  //   next()
  // })
  //先假设消息公告消息
  const newsData = [
    {ncontent:'恭喜秋の博客1.0版成功上线啦~~~',ndate:new Date().getTime()},
    {ncontent:'恭喜秋の博客1.1版成功上线啦~~~',ndate:new Date().getTime()},
    {ncontent:'恭喜秋の博客1.2版成功上线啦~~~',ndate:new Date().getTime()},
  ]
  app.get('/api/addnews',function(req,res){
    dbAPI.news.create(newsData,(err,res)=>{
      console.log('ok');
    })
    res.send('Hello World!')
  })

  app.get('/api/getnews',function(req,res){
    dbAPI.news.find({},(err,result)=>{res.send(result)})
  })


  app.get('*',function(req,res){
    res.end('404')
  })
}
