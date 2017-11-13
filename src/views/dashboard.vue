<template>
  <div>
    <el-container>
        <el-aside width="300px">
             <taskList></taskList>
        </el-aside>
        <el-main>
            <div class="content">
                <h1>task18825/administrator</h1>
                <taskCard></taskCard>
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
