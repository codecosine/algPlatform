<template>
  <div>
    <el-container>
        <el-aside width="300px">
             <taskList></taskList>
        </el-aside>
        <el-main>
            <div class="content">
                <taskCard :task="cuurentTask"></taskCard>
            </div>
        </el-main>
    </el-container>
  </div>
</template>
<script>
import taskList from '../components/taskList.vue'
import taskCard from '../components/taskCard.vue'
export default {
    components: {
        taskList,
        taskCard,
    },
    computed:{
      cuurentTask(){
        return this.$store.getters.cuurentTask
      }
    },
    created () {
        this.fetchData()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods:{
        fetchData(){
            this.$store.dispatch('updateTaskList')
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    padding: 10px 10px 0px 40px;
    h1{
        color: #666;
    }
}

</style>
