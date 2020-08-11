const app = require('express')();
const api = require('./api');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
api(app)

io.on('connection', (socket) => { //监听客户端连接,回调函数会传递本次连接的socket
  console.log("有人来访!");

  socket.on("disconnect",function(){
  })

  socket.on("msg",(data) => {
    console.log(data)
  });

});
//  https://www.jianshu.com/p/97de168cc3bf     vue项目的聊天室demo

// app.listen(8889)   //只能用server监听

server.listen(8889)
console.log('io listen success !! ' + 8889);

