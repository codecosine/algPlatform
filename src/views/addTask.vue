<template>
<div>
<el-container>
        <el-main>
            <div class="content">
               <el-steps :active="activeStep" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="输入数据集并选择算法" ></el-step>
                    <el-step title="配置算法参数"></el-step>
                    <el-step title="等待任务结果" ></el-step>
               </el-steps>
               <div class="form-content">
                <el-form v-show="activeStep==1" :model="form" label-width="100px" size="small">
                    <el-form-item label="数据集">
                    <el-upload
                        class="upload"
                        name="dataSetUpload"
                        drag
                        action="/checkDataSet"
                        multiple>
                        <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>                    
                    </el-form-item>
                    
                    <el-form-item label="选择算法">
                        <el-select v-model="algorithmName" placeholder="请选择使用的算法">
                            <el-option v-for="(item,index) in settings" :key="index" :label="item.label" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="stepOnCheckOne">下一步</el-button>
                    </el-form-item>
               </el-form>
               <el-form v-show="activeStep==2" :model="argForm" label-width="150px" size="small">
                    <configForm v-for="(item,index) in argFormSettings" :key="index" :label="item.label" :valueName="item.name"></configForm>
                    <el-form-item>
                        <el-button @click="back">上一步</el-button>
                        <el-button type="warning" @click="stepOnCheckTwo">参数合法性校验(接口测试)</el-button>
                    </el-form-item>
               </el-form>
               <el-form v-show="activeStep==3" :model="form" label-width="150px" size="small">
                   <el-form-item label="任务名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="执行次数">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="执行时间">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="back">上一步</el-button>
                        <el-button type="primary" @click="submitTask" disabled>添加任务</el-button>
                        <el-button type="primary" @click="stepOnCheckTwo">添加任务(接口测试)</el-button>
                    </el-form-item>
               </el-form>
               </div>
               
            </div>
        </el-main>
    </el-container>
</div>
</template>
<script> 
import configForm from '../components/configForm.vue'
import config from '../config.js'
export default {
    components:{
        configForm,
    },
    data() {
      return {
        settings:config.settings,
        algorithmName: '',
        activeStep: 1,
        form: {
          name: '',
        },
        argForm: {
  
        }
      }
    },
    computed:{
        argFormSettings(){
            return config[this.algorithmName] || null
        }
    },
    methods: {
      back(){
          if(this.activeStep){
              this.activeStep--;
          }
      },
      stepOnCheckOne() {
        this.activeStep = 2;
        // 对argForm添加响应式属性
      },
      stepOnCheckTwo() {
        this.activeStep = 3;
      },
      submitTask(){
        this.$store.dispatch('addTask',{ argForm })
      }
    }  
}
</script>
<style lang="less" scoped>
.content{
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    float: none;
}
.form-content{
    padding-top: 20px;
}
</style>


