<template>
  <section class="index-bg">
    <!-- fullscreen add life word start @author: Miss Q !-->
    <div class="bg-index01"><svgbg></svgbg></div>
    <!-- first screen -->
    <el-container class="index-main">
      <el-main>
        <!-- 滚动喇叭消息 -->
        <el-row :gutter="12">
          <el-col :span="24">
            <el-card shadow="hover" class="notice-item">
              <i class="el-icon-bell"></i>
              <ul class="notice-text" id="noticeBox" :class="{marquee_top:noticeanimate}" @mouseenter="mouseStop" @mouseleave="mousego">
                <li v-for="(notice,index) in noticeList" :key="index">{{notice}}</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="12" style="margin-top:20px" class="index-content">
          <el-col :lg="{span:22,push:1}" :md="{span:24}"><!--总背景色-->
            <!-- 该模块设计参考：http://demo.cssmoban.com/cssthemes6/tpmo_527_sided/index.html -->
            <div class="index-content-middle">  <!-- 模块居中 -->
                <!-- 第一块：内容 -->
              <div class="content-item">
                <el-card shadow="hover" class="item-box textright">
                  <el-image :src="imgSrc[0]" class="imgfill" lazy>
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                  <div class="textlist">
                    <div class="texttitle">
                      <h4>文章标题</h4>
                      <a href="javascript:void(0)">我是文本文本文本文本，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</a>
                    </div>
                  </div>
                </el-card>
              </div>
                <!-- 第二块：内容 -->
              <div class="content-item">
                <el-card shadow="hover" class="item-box textleft">
                  <div class="textlist">
                    <div class="texttitle">
                      <h4>文章标题</h4>
                      <a href="javascript:void(0)">我是文本文本文本文本，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</a>
                    </div>
                  </div>
                  <el-image :src="imgSrc[1]" class="imgfill" style="float:right">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </el-card>
              </div>
                <!-- 第三块：内容 -->
              <div class="content-item">
                <el-card shadow="hover" class="item-box textright">
                  <el-image :src="imgSrc[0]" class="imgfill" lazy>
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                  <div class="textlist">
                    <div class="texttitle">
                      <h4>文章标题</h4>
                      <a href="javascript:void(0)">我是文本文本文本文本，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</a>
                    </div>
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
                        <h2>Look Life</h2>
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
                        <h2>Look Life</h2>
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
                        <h2>Look Life</h2>
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
                        <h2>Look Life</h2>
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
            <div></div>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </section>
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
