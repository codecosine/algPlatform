<template>
  <div>
        <div class="form-item">
            <el-row type="flex" justify="center" :gutter="20">
            <el-col :span="4">
                <label v-show="label" class="form-item-label">
                    {{ label }}
                </label>    
            </el-col>
            <el-col :span="12">
                <el-input v-if="type==='input'" 
                            v-model="value" @change="onchange"
                            style="margin-top:4px" size="small"
                            >
                </el-input>
                <el-select v-if="type==='select'" v-model="value" 
                            style="margin-top:4px" size="small"
                            @change="onchange" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-slider v-if="type==='slider'" 
                        v-model="value"
                        @change="onchange"
                         style="margin-left:9px"
                        :step="0.1"
                        :max="1"
                        show-stops
                        show-input>
                </el-slider>
                <el-radio-group v-if="type==='radio'"  style="padding:14px 0px;"
                    v-model="value" @change="onchange">
                    <el-radio v-for="item in options"
                        :key="item.value"
                        :label="item.value"
                        >{{item.label || item.value}}</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="remark || '无'" placement="top">
                    <label style="margin-top:9px; padding:2px 0px;display:inline-block;position:relative"> <i class="el-icon-info"></i> </label>
                </el-tooltip>
            </el-col>
            </el-row>
            
        </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'formValue',
    event: 'formChange'
  },
  props:{
      type: {
          type: String,
          default: 'input'
      },
      valueName:{
          type: String,
      },
      formValue:{
          default: 0,
      },
      label:{
          type: String,
          default: '字段'
      },
      options:{
          type: Array,
          default: function(){
              return []
          },
      },
      remark:{
          type: String,
      }
  },
  data(){
      return {
          value: 0
      }
  },
  methods:{
      onchange(value){
          this.$emit('formChange',value)

      }
  },

}
</script>
<style lang="less">
.form-item{
    margin: 10px 0px;
}
.form-item::before {
    display: table;
    content: "";
}
.form-item::after {
    clear: both;
}
.form-item::after, .form-item::before {
    display: table;
    content: "";
}
.form-item-label{
    text-align: center;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #5a5e66;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.form-item-remark{
    position: relative;
    vertical-align: middle;
    display: inline-block;
    font-size: 12px;
    color: #909090;
}
</style>
