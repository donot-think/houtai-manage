<template>
  <div class="tabs">
    <el-tag
        v-for="(item,index) in tags"
        :key="item.path"
        :closable="item.name!=='Home'"
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)"
        >
        {{ item.label }}
  </el-tag>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
     name:'CommonTag',
     data(){
        return{

        }
    },
    computed:{
        ...mapState({
              tags:state => state.tab.tabsList     
        })
    },
      methods:{
        ...mapMutations(['closeTag']),
        //点击tag跳转的功能
        changeMenu(item){
            this.$router.push({name:item.name})
        },
        //点击tag删除的功能
        handleClose(item,index){
          // 调用store中的mutation
          this.closeTag(item)
          const length = this.tags.length
          // 删除之后的跳转逻辑
            if(item.name!==this.$route.name){
              return
            }
          //表示的是删除的是最后一项
            if(index === length){
              console.log(this)
              this.$router.push({
                name:this.tags[index-1].name
              })
            }else{
              this.$router.push({
                name:this.tags[index].name
              })
            }
        }
    }
    // mounted(){
    //     console.log(this.$route,this.tags)
    // }
}
</script>
