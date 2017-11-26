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
                      <li><span><i class="el-icon-document"></i>id:</span>{{ task.id }}</li>
                      <li><span><i class="el-icon-document"></i>算法:</span>{{ task.algs }}</li>
                    </ul>
                  </div>
                </div>
                <div class="box-result">
                  <h3>计算结果<el-tag style="margin-left:10px" size="mini">下载</el-tag><el-tag type="success"style="margin-left:10px"  size="mini">在线</el-tag></h3>
                  <div>
                    <ul class="box-info-list">
                      <li><span><i class="el-icon-time"></i>启动时间:</span>2017-11-9 23:46:53</li>
                      <li><span><i class="el-icon-time"></i>完成时间:</span>2017-11-9 23:46:53</li>
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
          
        </el-tab-pane>
        <el-tab-pane label="备注" name="third">
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    props: ['task'],
    data() {
      return {
        activeName: 'first'
      };
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
