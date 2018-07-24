<template>
<div class="app-container">
   <p class="warn-content">
            <a href="https://dafrok.github.io/vue-baidu-map/#/zh/index" target="_blank">参考百度地图 Vue Baidu Map
            </a>
        </p>
  <baidu-map class="map" style="height: 500px" center="北京">
    <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
  </baidu-map>
</div>
</template>>
<style>
.map {
  width: 100%;
  height: 800px;
}
</style>