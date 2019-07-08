<!--项目中公用方法变量等-->
<script>
  var title_Time;var init_Title;
  document.addEventListener('visibilitychange',function(){ //浏览器切换事件
      if(document.visibilityState=='hidden') { //状态判断
          init_Title = document.title;
          clearTimeout(title_Time);
          setTimeout(function(){titleScroll(document.title);},500)
      }else {
        clearTimeout(title_Time);
        document.title=init_Title;
      }
  });
  function titleScroll(title){
    var newStr = title.substr(1,title.length)
    var oldStr = title.substr(0,1);
    document.title = newStr + oldStr;
    title_Time = setTimeout(function(){titleScroll(document.title);},500)
  }

  export default {
    //init_Title
  }
</script>


