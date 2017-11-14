<template>
  <div>
        <el-form-item :label="label">
            <el-input v-if="type==='input'" v-model="value" placeholder="请输入内容"></el-input>
            <el-select v-if="type==='select'" v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in selectedOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
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
      label:{
          type: String,
          default: '新增字段'
      },
      options:{
          type: Array,
      }
  },
  data(){
      return {
        
        value: ''
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
