import website from '@/const/website'
const common = {

  state: {
    isCollapse: false,
    website: website,
    isFullScren: false
  },
  actions: {
  },
  mutations: {
    SET_COLLAPSE: (state, action) => {
      state.isCollapse = !state.isCollapse
    },
    SET_FULLSCREN: (state, action) => {
      state.isFullScren = !state.isFullScren
    }

  }
}
export default common
