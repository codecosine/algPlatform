<template>
<div>
<el-container>
        <el-main>
            <div class="content">
               <el-steps :active="activeStep" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="输入数据集并选择算法" ></el-step>
                    <el-step title="配置参数" ></el-step>
                    <el-step title="添加到任务队列" ></el-step>
               </el-steps>
               <el-form v-show="activeStep==1" :model="form" label-width="80px">
                    <el-form-item label="数据集">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="/checkDataSet"
                        multiple>
                        <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>                    
                    </el-form-item>
                    <el-form-item label="任务名称">
                        <el-input v-model="form.name"></el-input>
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
               <el-form v-show="activeStep==2" :model="argForm" label-width="80px">
                    <configForm v-for="(item,index) in argFormSettings" :key="index" :label="item.label" :valueName="item.name"></configForm>
                    <el-form-item>
                        <el-button type="primary" @click="stepOnCheckTwo">添加任务(接口测试)</el-button>
                    </el-form-item>
               </el-form>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
      stepOnCheckOne() {
        this.activeStep = 2;
        // 对argForm添加响应式属性
      },
      stepOnCheckTwo() {
        this.activeStep = 2;
        this.$store.dispatch('addTask',{ test: 'cosine' })
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
</style>


