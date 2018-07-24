<template>
<div class="app-container">
<p class="warn-content">
            <a href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">参考百度地图 Vue Baidu Map
            </a>
        </p>
<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="11">
  <bm-driving start="天安门" end="百度大厦" @searchcomplete="handleSearchComplete" :panel="false" :autoViewport="true"></bm-driving>
  <bml-lushu
    @stop="reset"
    :path="path"
    :icon="icon"
    :play="play"
    :rotation="true">
  </bml-lushu>
</baidu-map>
</div>
</template>

<script>
import { BmlLushu } from 'vue-baidu-map'
export default {
  components: {
    BmlLushu
  },
  data() {
    return {
      play: true,
      path: [],
      icon: {
        url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
        size: { width: 52, height: 26 },
        opts: { anchor: { width: 27, height: 13 }}
      }
    }
  },
  methods: {
    reset() {
      this.play = false
    },
    handleSearchComplete(res) {
      this.path = res.getPlan(0).getRoute(0).getPath()
    }
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 800px;
}
</style>