<template>
  <nx-container>
    <template slot="header">代码高亮组件</template>
    <el-card shadow="never" >
      <p slot="title">javascript</p>
      <nx-highlight :code="codeJavascript"/>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="never">
          <p slot="title">css</p>
          <nx-highlight :code="codeCSS"/>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <p slot="title">scss</p>
          <nx-highlight :code="codeSCSS"/>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <p slot="title">html</p>
          <nx-highlight :code="codeHTML"/>
        </el-card>
      </el-col>
    </el-row>
  </nx-container>
</template>

<script>
import codeJavascript from './code/javascript'
import codeCSS from './code/css'
import codeSCSS from './code/scss'
import codeHTML from './code/html'
import nxContainer from '@/components/nx-container/'
import nxHighlight from '@/components/nx-highlight/'
export default {
  components: { nxContainer, nxHighlight },
  data() {
    return {
      codeJavascript,
      codeCSS,
      codeSCSS,
      codeHTML
    }
  }
}
</script>
