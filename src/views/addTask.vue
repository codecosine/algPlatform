<template>
<div>
<el-container>
        <el-main>
            <div class="content">
               <el-steps :active="activeStep" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="输入数据集及任务信息" ></el-step>
                    <el-step title="输入任务算法参数"></el-step>
                    <el-step title="添加到任务队列" ></el-step>
               </el-steps>
               <div class="form-content">
                <el-form v-if="activeStep==1" :model="form" label-width="100px" size="small">
                    <h3>基本信息</h3>
                    <el-form-item label="数据集">
                    <el-upload
                        class="upload"
                        name="dataSet"
                        drag
                        action="/checkDataSet"
                        :before-upload="beforeUpload"
                        :on-success="uploadSuccess"
                        :on-error="uploadError"
                        multiple>
                        <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将数据集文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                    <el-alert
                        v-if="showUploadSuccess"
                        title="数据集上传成功"
                        type="success">
                    </el-alert>
                    <el-alert
                        v-if="showUploadError"
                        title="上传失败,请重试或联系管理员"
                        type="error">
                    </el-alert>                    
                    </el-form-item>
                    <el-form-item label="选择算法">
                        <el-select v-model="form.algorithmName" placeholder="请选择使用的算法">
                            <el-option v-for="(item,index) in settings" :key="index" 
                                    :label="item.label" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任务名称">
                        <el-input v-model="form.name" placeholder="task1" style="width:40%"></el-input>
                    </el-form-item>
                    <el-form-item label="执行次数">
                        <el-input-number v-model="form.times" @change="handleChange" 
                            :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="stepOnCheckOne">下一步</el-button>
                    </el-form-item>
               </el-form>
               <el-form v-if="activeStep==2" label-width="150px" size="small">
                   <div v-for="(item,index) in argFormSettings" :key="index" >
                    <h3>{{item.label}}</h3>
                    <configForm v-for="(element,index) in item.value" 
                                :key="index"
                                v-model="argForm[item.name][element.name]"
                                :type="element.type"
                                :options="element.options"
                                :remark="element.remark"
                                :label="element.label">
                    </configForm>
                   </div>
                    <el-form-item>
                        <el-button @click="back">上一步</el-button>
                        <el-button type="primary" @click="stepOnCheckTwo">校验参数</el-button>
                        <!-- <el-button type="primary" @click="stepOnCheckTwo">校验参数</el-button> -->
                    </el-form-item>
               </el-form>
               <el-form v-if="activeStep==3" :model="form" label-width="150px" size="small">
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
        showUploadError: false,
        showUploadSuccess: false,
        settings:config.settings,
        activeStep: 1,
        form: {
          taskId: '1',
          name: '',
          algorithmName: '',
        },
        argForm: {}
      }
    },
    computed:{
        argFormSettings(){
            return config[this.form.algorithmName] || null
        }
    },
    methods: {
      beforeUpload(){
          this.showUploadError = false;
          this.showUploadSuccess = false;
      },
      uploadError(response, file, fileList){
          this.showUploadError = true;
      },
      uploadSuccess(response, file, fileList){
          this.showUploadSuccess = true;
          console.log(response);
          //this.formtaskId = response.data.id  
      },
      back(){
          if(this.activeStep){
              this.activeStep--;
          }
      },
      stepOnCheckOne() {
        if(!this.form.algorithmName || !this.form.taskId){
            this.$message.error('请上传数据和选择算法');
            return
        }
        this.activeStep = 2;
        if(this.argFormSettings){
            this.argFormSettings.forEach(ele=>{
                this.$set(this.argForm,ele.name,{});
                ele.value.forEach(item=>{
                    this.$set(this.argForm[ele.name],item.name,null);
                })
            })
        }
        // 对argForm添加响应式属性
      },
      stepOnCheckTwo() {
        this.activeStep = 3;
        this.$store.dispatch('checkConfig',this.argForm)
      },
      submitTask(){
        this.$store.dispatch('addTask')
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


