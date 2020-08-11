<template>
  <el-card class="box-card chatroom" shadow="always">
    <div slot="header" class="clearfix">
      <span class="roomtitle">欢迎来到Bilibi聊天室，和博主随时交流沟通...</span>
    </div>
    <section>
      <aside class="roomuser">
        <div class="usercount">在线人员（5）</div>
        <div class="imagebox">
          <div class="useritem"><div class="userImg" :style="{'backgroundColor':bgColor}"></div><span>我是用户1</span></div>
          <div class="useritem"><div class="userImg" :style="{'backgroundColor':bgColor}"></div><span>我是用户2我是用户2我是用户2我是用户2</span></div>
          <div class="useritem"><div class="userImg" :style="{'backgroundColor':bgColor}"></div><span>我是用户3我是用户2我是用户2</span></div>
          <div class="useritem"><div class="userImg" :style="{'backgroundColor':bgColor}"></div><span>测试测试</span></div>
        </div>
      </aside>
      <main class="roomcenter">
        <div class="roomcontent">
          <div class="contentscroll">
            <!-- 聊天内容显示区域 -->
            <div class="showtext"><div class="userImg" :style="{'backgroundColor':bgColor}"></div><span>测试测试测试是是</span></div>
          </div>
        </div>
        <div class="roomicon">
          <span class=""><i class="el-icon-picture-outline-round"></i></span>
          <input type="text" id="chatName"/>
        </div>
        <div class="roominput">
          <textarea name="chattext" id="chatInfo" v-model="message.sendMsg"></textarea>
          <button type="button" @click="sendfn()">Send</button>
        </div>
      </main>
    </section>
  </el-card>
</template>
<script>
import io from 'socket.io-client';
const socket = io('http://localhost:8889', { transports: ['websocket'] });

export default {
  name:'bili',
  data(){
    return { message: { sendMsg: null, userName: null, userId: null } }
  },
  created(){
    socket.on('message', (data) => {
      console.log(data)
    });
  },
  methods:{
    sendfn(){
      // if(!this.message.sendMsg){alert('不可发送空消息！');return;}
      socket.emit('msg',this.message)
    }
  },
  mounted(){
    socket.on('reconnect_attempt', () => {
      socket.io.opts.transports = ['websocket'];
    });

  },
  computed:{
    bgColor:function(){
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);
      return 'rgba('+ r +','+ g +','+ b +',0.8)';
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix:before,.clearfix:after{ display: table; content: ""; clear: both; }
.userImg{width:40px;height:40px;border-radius: 50%;vertical-align: middle;display: inline-block;}
.chatroom{width:80%;height:800px;position: relative;left: 10%;top:80px;display: flex;flex-direction: column;
  .roomtitle{width: $w100;font-size:16px;font-weight: bold;}
  section{display: flex;border:1px solid #ddd;
    .roomuser{background-color:#eee;border-right:1px solid #ddd;
      .imagebox{
        .useritem{padding:10px 20px; border-bottom: 1px dashed #ddd;cursor: pointer;
          span{vertical-align: middle;padding-left: 10px;width:120px;display: inline-block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
        }
      }
      .usercount{padding:10px 20px; font-size: 15px; border-bottom: 1px solid #ddd;}
    }
    .roomcenter{background-color:#f4f4f4;flex-grow: 2;display: flex;padding:10px 0 0 0;flex-direction:column;
      .roomcontent{min-height:400px;padding:10px 20px;border-bottom:1px solid #ddd;
        .contentscroll{
          .showtext{
            .el-image{width:30px;vertical-align: middle;border-radius: 50%;
            }
            span{margin-left:10px; background-color: #b6e4d0; border-radius: 3px; padding: 6px 10px;
              &::before{width:5px;height:5px;background-color: #b6e4d0;}
            }
          }
        }
      }
      .roomicon{height:40px;border-bottom:1px solid #ddd;}
      .roominput{height:120px;
        textarea{resize:none;width:90%;height:100%;}
        button{ float:right;width:10%;height:100%;font-size:20px;cursor:pointer;color:#b3b3b3;background-color: #eeeeee; }
      }
    }
  }
}
</style>

