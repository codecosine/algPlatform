<template>
  <div>
        <div class="form-item">
            <label class="form-item-label" style="width:20%">
                {{ label }}
            </label>
            <el-input v-if="type==='input'" :value="value" 
                        style="width:30%;margin-top:4px" size="small"
                        @change="onchange">
            </el-input>
            <el-select v-if="type==='select'" v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in selectedOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <div class="form-item-remark">here is some remark</div>
        </div>
  </div>
</template>
<script>
export default {
  props:{
      type: {
          type: String,
          default: 'input'
      },
      valueName:{
          type: String,
      },
      value:{
          type: String,
          default: ''
      },
      label:{
          type: String,
          default: '新增字段'
      },
      options:{
          type: Array,
      }
  },
  methods:{
      onchange(value){
          console.log(value)
          this.$emit('onchange:'+ valueName, value)
      }
  },
  created(){
    //   console.log(this.$props)
    //   this.$set(this.$data,input,'test');
    //   this.selectedOptions = [{
    //       value: '选项1',
    //       label: '黄金糕'
    //     }, {
    //       value: '选项2',
    //       label: '双皮奶'
    //     }, {
    //       value: '选项3',
    //       label: '蚵仔煎'
    //     }, {
    //       value: '选项4',
    //       label: '龙须面'
    //     }, {
    //       value: '选项5',
    //       label: '北京烤鸭'
    //     }]
  }

}
</script>
<style lang="less">
.form-item{
    margin: 5px 0px;
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
     text-align: right;
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
    display: inline-block;
}
</style>
