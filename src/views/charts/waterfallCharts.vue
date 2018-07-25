<template>
  <ve-waterfall :data="chartData"></ve-waterfall>
</template>

<script>
  export default {
    data() {
      return {
        chartData: {
          columns: ['活动', '时间'],
          rows: [
            { '活动': '吃饭', '时间': 4 },
            { '活动': '睡觉', '时间': 10 },
            { '活动': '打豆豆', '时间': 5 }
          ]
        }
      }
    }
  }
</script>