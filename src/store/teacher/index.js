import {Storage} from './storage';
// 准备actions(操作数据之前的操作)
const actions = {}
// 准备mutations(操作数据,键值一般大写)
const mutations = {
    addTab(state,data){
        state.editableTabs = data;
        Storage.setEditableTabs(data);
    },
    setTabName(state,data){
        state.editableTabsValue = data;
        Storage.setEditableTabsValue(data);
    },
    CHOICETOPICFN(state,data){
        // index表示第几题，info表示该题的数据
        state.choiceTopic[data.index]=data.info
    }
}
// 准备state(存放数据)
const state = {
    editableTabs:Storage.getEditableTabs()|| [{title:'首页',name:'teacher/graphicPresentation'}],
    editableTabsValue:Storage.getEditableTabsValue() || 'teacher/graphicPresentation',
    choiceTopic:[]
}
// 准备getters
const getters = {}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}