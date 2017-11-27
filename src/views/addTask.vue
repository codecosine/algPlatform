<template>
<div>
<el-container>
        <el-main>
            <div class="content">
               <el-steps :active="activeStep" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="输入数据集及任务信息" ></el-step>
                    <el-step title="输入算法参数"></el-step>
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
                        <el-input-number v-model="form.times"
                            :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="stepOnCheckOne">下一步</el-button>
                    </el-form-item>
               </el-form>
               <el-form v-if="activeStep==2" label-width="150px" size="small">
                   <el-alert
                        :title="info"
                        type="info">
                    </el-alert>
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
                        <el-button type="primary" @click="stepOnCheckTwo">校验参数并下一步</el-button>
                    </el-form-item>
               </el-form>
               <el-form v-if="activeStep==3" :model="form" label-width="150px" size="small">
                    <h3>确认任务信息</h3>
                    <div class="confirmBox">
                        <p>任务id:{{form.taskId}}</p>
                        <p>算法:{{form.algorithmName}}</p>
                        <p>名称:{{form.name}}</p>
                        <p>执行次数:{{form.times}}</p>
                        <p>参数：
                                <el-button size="small">详情</el-button>
                        </p>
                    </div>
                    <el-form-item>
                        <el-button @click="back">上一步</el-button>
                        <el-button type="primary" @click="submitTask">添加到任务队列</el-button>
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
import task from '../api/task'
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
        info:{},
        form: {
          taskId: '1',
          name: '',
          times: 1,
          algorithmName: '',
        },
        argForm: {
        }
      }
    },
    computed:{
        argFormSettings(){
            return config[this.form.algorithmName] || null
        },

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
          if(response.code == 0){
            this.showUploadSuccess = true;
            this.form.taskId = response.data.taskId;
            this.info = response.data.info;
          } else {
            this.showUploadError = true;
          }
      },
      back(){
          if(this.activeStep){
              this.activeStep--;
          }
      },
      stepOnCheckOne() {
        if(!this.form.algorithmName){
            this.$message.error('请选择算法');
            return
        }
        if(!this.form.taskId){
            this.$message.error('请上传正确的数据集');
            return
        }
        // 对argForm添加响应式属性
        if(this.argFormSettings){
            this.argFormSettings.forEach(ele=>{
                this.$set(this.argForm,ele.name,{});
                ele.value.forEach(item=>{
                    this.$set(this.argForm[ele.name],item.name,null);
                })
            })
        }
        this.activeStep = 2;
      },
      stepOnCheckTwo() {
        //taskId:this.form.taskId,
        if(!this.form.taskId){
            return null;
        }
        // TEMP todo 
        let formatPar = JSON.parse(JSON.stringify(this.argForm.local));
        formatPar.hereditaryParameter = JSON.parse(JSON.stringify(this.argForm.hereditaryParameter));
        //console.log(formatPar)
        console.log(JSON.stringify(formatPar))
        task.checkConfig({ 
            parameter:formatPar,
            taskId:this.form.taskId
        }).then(res=>{
            console.log(res)
            this.$message({
                message: res.data.message,
                type: 'success'
            });
            this.activeStep = 3;
        }).catch(err=>{
            console.error(err)
        })
      },
      submitTask(){
        task.solutionRun(this.form).then(res=>{
            console.log('solutionRun')
            console.log(res)
            if(res.data.code == 0){
                this.$message({
                    message: res.data.message,
                    type: 'success'
                });
                this.$router.push('/dashboard')
            }
        })
      }
    }  
}
</script>
<style lang="less" scoped>
.confirmBox{
    border: #666 dashed 1px;
    margin: 15px 0px;
    p{
        padding-left: 10px;
    }
}
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


