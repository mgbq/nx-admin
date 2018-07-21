<template>
  <baidu-map class="map" center="湖南">
    <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
  </baidu-map>
</template>
<style>
.map {
  width: 100%;
  height: 800px;
}
</style>