<template>
<div class="app-container">
   <p class="warn-content">
            <a href="https://blog.csdn.net/beyond__devil/article/details/78826826" target="_blank">参考PDF
            </a>
        </p>
    <!-- <el-tooltip effect="dark" placement="bottom">
      <div slot="content"> -->
  <object class="app-container" id="show-resources" type="application/pdf" internalinstanceid="291" data="https://cdn.qlippie.com/pdf/Egame_Brandbook.pdf#zoom=42.1" title="">
	</object>
        <!-- <a class="link" :href="url" target="_blank">转到 Github</a> -->
      <!-- </div>
      <el-button class="btn-text can-hover" type="text" @click="handleClick">
        <nx-icon name="github" style="font-size: 20px"/>
      </el-button>
    </el-tooltip> -->
</div>
</template>
		<style type="text/css">
			#show-resources {
				width: 70%;
				height: 60%;
				visibility: visible;
				position: fixed;
				z-index: 10011;
				margin: auto;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				transition: all .8s cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
				animation-fill-mode: forwards;
				animation-direction: alternate;
			}
			
			object,
			embed {
				-webkit-animation-duration: .001s;
				-webkit-animation-name: playerInserted;
				-ms-animation-duration: .001s;
				-ms-animation-name: playerInserted;
				-o-animation-duration: .001s;
				-o-animation-name: playerInserted;
				animation-duration: .001s;
				animation-name: playerInserted;
			}
			
			* {
				margin: 0;
				padding: 0;
				text-decoration: none;
			}
		</style>

		