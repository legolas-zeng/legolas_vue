<template>
  <div>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round @click="go">dashboard</el-button>
      <el-button type="success" round @click="back">返回index</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '测试页'
    }
  },
  methods:{
  	go(){
  		this.$router.push('/dashboard')
  	},
    back(){
  	  this.$router.push('/')
    }
  }
}
</script>


