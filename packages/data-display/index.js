
import DataDisplay from './src/data-display.vue'

/* istanbul ignore next */
DataDisplay.install = function(Vue) {
  Vue.component(DataDisplay.name, DataDisplay)
};

export default DataDisplay
