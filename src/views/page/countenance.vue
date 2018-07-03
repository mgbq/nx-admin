<template>
    <div id='emoji'>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-setting"></i> Github-emoji</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
			<index></index>
</div>
</template>

<script >
import index from '@/components/nx-counten/index'
export default {
  name: 'countenance',
  components: {
    index

  }
}
</script>

<style>

</style>
