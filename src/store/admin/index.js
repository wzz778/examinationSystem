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
    }
}
// 准备state(存放数据)
const state = {
    editableTabs:Storage.getEditableTabs()|| [{title:'首页',name:'/admin/index'}],
    editableTabsValue:Storage.getEditableTabsValue() || '/admin/index',
    token:'',
    power:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzAzMzM4ODcsInVzZXJuYW1lIjoiMTAwMjgwMDk4MiIsInBvd2VyIjoiMCIsImlkIjoyfQ.48Ta8CtQqL-xY0RxXnzCn59D5ZRLzfpS3MmOakcv6FM"
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