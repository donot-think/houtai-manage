<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <h3>{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
      <el-menu-item @click="ClickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

      <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">            <template slot="title">
          <i :class="`el-icon-location`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item  @click="ClickPage(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>  
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
import Cookie from 'js-cookie'
    export default{
      name:'CommonAside',
      data(){
        return{
        }
      },
      methods: {
        handleOpen(){
        },
        handleClose(){
        },
        ClickMenu(item){
          if(this.$route.path !==item.path&& !(this.$route.path === '/Home'&&(item.path==='/'))){
            this.$router.push(item.path)
          }
          this.$store.commit('selectMenu',item)
        },
        ClickPage(subItem){
          // console.log(subItem)
          if(this.$route.path !==subItem.path&& !(this.$route.path === '/Home'&&(subItem.path==='/'))){
          this.$router.push(subItem.path)
        }
        }
      },
      computed:{
        //没有子菜单
        noChildren(){
          return  this.menuData.filter(item=>!item.children)
        },
        //有子菜单
        hasChildren(){
          return  this.menuData.filter(item=>item.children)
        },
        menuData(){
          //判断当前数据，如果cookie中没有，当前store中获取
            return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
        },
        isCollapse(){
          // console.log(this.$store.state.tab.isCollapse)
          return this.$store.state.tab.isCollapse
        }
      }
    }
</script>

<style lang="less" scoped>
  .el-menu{
    height: 100vh;
    h3{
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 43px;
      font-weight: 400;
    }
    border: none;
  }
</style>