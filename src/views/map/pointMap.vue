<template>
<div class="app-container">
<p class="warn-content">
            <a href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">参考百度地图 Vue Baidu Map
            </a>
        </p>
<baidu-map class="map" center="中国">
  <bml-marker-clusterer :averageCenter="true">
    <bm-marker v-for="marker of markers" :key="Math.random()" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
  </bml-marker-clusterer>
</baidu-map>
</div>
</template>

<script>
import { BmlMarkerClusterer } from 'vue-baidu-map'
export default {
  data() {
    // }
    return {
      markers: []
    }
  },
  created() {
    // 插入 10 个随机点
    for (let i = 0; i < 10; i++) {
      const position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
      this.markers.push(position)
    }
  },
  components: {
    BmlMarkerClusterer
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 800px;
}
</style>