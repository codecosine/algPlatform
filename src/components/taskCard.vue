<template>
  <div>
    <h2>{{ task.name }}/administrator</h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务" name="first">
            <div>
              <section class="current-box pass">
                <div class="box-info">
                  <h2 class="passed">{{ task.message }}</h2>
                  <div>
                    <ul class="box-info-list">
                      <li><span><i class="el-icon-document"></i>id:</span>{{ task.taskId }}</li>
                      <li><span><i class="el-icon-document"></i>算法:</span>{{ task.algs }}</li>
                    </ul>
                  </div>
                </div>
                <div class="box-result">
                  <h3>计算结果
                    <div style="display:inline-block; cursor: pointer;margin-left:10px">
                    <el-tag size="mini">下载</el-tag>
                    </div>
                    <div @click="dialogTableVisible= true" style="display:inline-block; cursor: pointer;margin-left:10px">
                      <el-tag type="success"  size="mini">在线查看</el-tag>
                    </div>
                  </h3>
                  <div>
                    <ul class="box-info-list">
                      <li><span><i class="el-icon-time"></i>启动时间:</span>{{ task.startTime || ''}}</li>
                      <li><span><i class="el-icon-time"></i>完成时间:</span>{{ task.finishTime || ''}}</li>
                    </ul>
                  </div>
                </div>
                <div class="build-tools">
                    <div class="tool-btn">
                      <i class="el-icon-refresh"></i> refresh
                    </div>
                </div>
              </section>
            </div>
      
        </el-tab-pane>
        <el-tab-pane label="参数" name="second">
          <div v-if="argForm">
           <div v-for="(argsKeys,index) in Object.keys(argForm)" :key="index">
                    <span>{{argsKeys}}</span>:=> {{argForm[argsKeys]}}
            </div>
          </div>
          <div v-if="!argForm">暂无</div>
        </el-tab-pane>
        <el-tab-pane label="备注" name="third">
        </el-tab-pane>
        <el-dialog title="结果" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="id" label="id"></el-table-column>
            <el-table-column property="A" label="A"></el-table-column>
            <el-table-column property="AB" label="AB"></el-table-column>
            <el-table-column property="B" label="AB"></el-table-column>
            <el-table-column property="label" label="label"></el-table-column>
          </el-table>
        </el-dialog>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    props: ['task'],
    data() {
      return {
        dialogTableVisible:false,
        activeName: 'first'
      };
    },
    computed:{
      argForm(){
        return this.task.parameter || {}
      },
      gridData(){
        if(this.task.result){
          return this.task.result.datas
        }
        return []
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style lang="less" scoped>
.current-box{
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  padding: 10px 20px 10px 0px;
  font-size: 16px;
  color: #666;
  .box-info{
    flex: 0 1 35%;
    padding-left: 2.2rem;
    font-size: 16px;
    overflow: hidden;
    position: relative;
    h2{
      font-size: 16px;
    }
  }
  .box-result{
    flex: 0 1 37%;
    font-size: 15px;
    padding-left: 2rem;
  }
  .box-tools{
    flex: 0 0 10rem;
    padding: 1rem 0;
    overflow: auto;
    
  }
  .tool-btn{
      border: #eaeaea solid 1px;
      padding: 3px 8px 3px 8px;
      border-radius: 10px;
      &:hover{
        color: #3eaaaf;
        cursor: pointer;
        border: #3eaaaf solid 1px;
      }
    }
  .box-info-list{
    font-size: 14px;
    li{
      padding-bottom: 13px;
      span{
        padding-right: 5px;
      }
    }
  }
  
}
</style>
