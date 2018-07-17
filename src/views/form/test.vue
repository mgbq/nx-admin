<template>
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary" @click="myFunction">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
</template>

<script>
    
export default {

  myFunction() {
        this.$router.push({ path: 'http://localhost:4864/?#/user-management' })
  }
    }
</script>

