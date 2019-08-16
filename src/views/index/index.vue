<template>
  <el-container class="index-main">
    <el-main>
      <!-- 滚动喇叭消息 -->
      <el-row :gutter="12">
        <el-col :span="24">
          <el-card shadow="hover" class="notice-item">
            <i class="el-icon-bell"></i>
            <ul class="notice-text" id="noticeBox" :class="{marquee_top:noticeanimate}" @mouseenter="mouseStop" @mouseleave="mousego">
              <li v-for="(text,index) in noticeList.notice" :key="index">
                {{text}}<span>{{noticeList.times[index] | formatDate}}</span>
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12" style="margin-top:20px" class="index-content">
        <el-col :lg="{span:22,push:1}" :md="{span:24}"><!--总背景色-->
          <!-- 该模块设计参考：http://demo.cssmoban.com/cssthemes6/tpmo_527_sided/index.html -->
          <!-- 模块居中 -->
          <div class="index-content-middle">  
            <div class="content-item" v-for="(list,index) in articleList" :key="index" @click="goDetail(list._id)">
              <el-card shadow="hover" class="item-box textleft" v-if="index == 1">
                <div class="textlist">
                  <div class="texttitle"><h4>{{list.btitle}}</h4><a href="javascript:void(0)">{{list.bcontent}}</a></div>
                </div>
                <el-image :src="list.bimage" class="imgfill" style="float:right">
                  <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
                </el-image>
              </el-card>
              <el-card shadow="hover" class="item-box textright" v-else>
                <el-image :src="list.bimage" class="imgfill" lazy>
                  <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
                </el-image>
                <div class="textlist">
                  <div class="texttitle"><h4>{{list.btitle}}</h4><a href="javascript:void(0)">{{list.bcontent}}</a> </div>
                </div>
              </el-card>
            </div>
            <!-- 一排橱窗 -->
            <el-row :gutter="20">
              <el-col :xl="6" :md="12" :sm="24">
                <div class="grid">
                  <figure class="effect-box">
                    <el-image :src="imgSrc[2]" class="imgfill">
                      <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                    </el-image>
                    <figcaption>
                      <h2>关于前端</h2>
                    </figcaption>
                  </figure>
                </div>
              </el-col>
              <el-col :xl="6" :md="12" :sm="24">
                <div class="grid">
                  <figure class="effect-box">
                    <el-image :src="imgSrc[3]" class="imgfill">
                      <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                    </el-image>
                    <figcaption>
                      <h2>关于后端</h2>
                    </figcaption>
                  </figure>
                </div>
              </el-col>
              <el-col :xl="6" :md="12" :sm="24">
                <div class="grid">
                  <figure class="effect-box">
                    <el-image :src="imgSrc[4]" class="imgfill">
                      <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                    </el-image>
                    <figcaption>
                      <h2>随心作品</h2>
                    </figcaption>
                  </figure>
                </div>
              </el-col>
              <el-col :xl="6" :md="12" :sm="24">
                <div class="grid">
                  <figure class="effect-box">
                    <el-image :src="imgSrc[5]" class="imgfill">
                      <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                    </el-image>
                    <figcaption>
                      <h2>生活感想</h2>
                    </figcaption>
                  </figure>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-aside class="hidden-md-and-down">
      <el-card shadow="hover" class="main-info">
        <!-- 城市定位 气候获取 -->
        <div v-html="locationHtml">{{locationHtml}}</div>
        <!-- 博主介绍 -->
        <!-- http://www.htmleaf.com/Demo/201607093709.html -->
        <div class="blog-intro">
          <el-image :src="imgSrc[6]"></el-image>
          <div class="blog-text">
            <h2>秋实</h2>
            <h4><i class="el-icon-location-information"></i>浙江省杭州市</h4>
            <p>春发其华,秋收其实;</p>
            <p>有始有极,爱登其质.</p>
          </div>
        </div>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>
//https://blog.csdn.net/daaikuaichuan/article/details/75204274
 import indexjs from "./index.js";
 export default {
  ...indexjs
 }
</script>
<style lang="scss">
@import "./index.scss";
</style>

