<template>
  <div class="wrapper-main">
    <div class="search">
        <el-input
            placeholder="search task..."
            size="small"
            v-model="searchinput">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </div>
    <nav></nav>
    <div class="sidebar-list">
        <div class="ember-view">
            <ul class="task-list">
                <li class="task" v-for="(item,index) in tasklist" :key="index">
                    <div class="task-card pass">
                        <h2>
                            <a :href="'/'+item.name">
                                <span>{{ item.name }}</span>
                            </a>
                            <span class="tag">#{{item.id}}</span>
                        </h2>
                        <p><i class="el-icon-document"></i>{{ item.algs }}</p>
                        <p><i class="el-icon-time"></i>{{ item.finishTime }}</p>
                    </div>
                </li>
            </ul>  
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          searchinput: '',
      }
  },
  computed:{
      tasklist(){
          return this.$store.getters.taskList.filter(ele=>{
              return ele.name.includes(this.searchinput) || (ele.id + "").includes(this.searchinput)
          });
      },

  }
}
</script>

<style lang="less" scoped>

i{
    padding-right: 4px;
}
.wrapper-main{
    background-color:#fff;
    border-right: #dfe4ed solid 2px;
    overflow: visible;
    min-height: 80vh;
}
.search{
    padding: 30px 15px;
}
.sidebar-list{
    background-color:#dfe4ed;
    
    .task-list{
        .task{
            .task-card{
                height: 100px;
                padding: 5px 0px 10px 25px;
            }
            h2{
                width: 80%;
                font-size: 14px;
                position: relative;
                padding-bottom: 6px;
                a{
                    &:hover{
                        text-decoration: underline;
                    }
                    color: #39aa56;
                }
                .tag{
                    color: #666;
                    font-size: 15px;
                    //margin-left: 5px;
                    right: 0;
                    position: absolute;
                }
                white-space: nowrap;
                overflow: hidden;
            }
            font-size: 14px;
            background-color: #fff;
            margin-bottom: 5px;
        }
    }
}
</style>

