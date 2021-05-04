import * as types from './mutation-types'
const mutations = {
  [types.SET_COOLAPSE] (state) {
    state.isCollapse =!state.isCollapse
  },
  [types.SET_CLASSTAGE](state,value){
    state.classTags =value
  },
  [types.SET_RELEASETAGE](state,value){
    state.releaseTags =value
  },
}

export default mutations
