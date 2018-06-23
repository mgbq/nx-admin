
import DataCard from './src/data-card.vue';

/* istanbul ignore next */
DataCard.install = function (Vue) {
    Vue.component(DataCard.name, DataCard);
};

export default DataCard;