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
                    <el-form-item label="任务性质">
                        <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上任务" name="type"></el-checkbox>
                        <el-checkbox label="地推任务" name="type"></el-checkbox>
                        <el-checkbox label="线下主题任务" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="stepOnCheckOne">下一步</el-button>
                    </el-form-item>
               </el-form>
               <el-form v-show="activeStep==2" :model="argForm" label-width="80px">
                    <el-form-item label="任务区域">
                        <el-select v-model="argForm.region" placeholder="请选择任务区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任务时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="argForm.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="argForm.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch v-model="argForm.delivery"></el-switch>
                    </el-form-item>
                    
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="argForm.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
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
export default {
    data() {
      return {
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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      stepOnCheckOne() {
        this.activeStep = 2;
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


