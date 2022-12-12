import { Storage } from './storage';
// 准备actions(操作数据之前的操作)
const actions = {}
// 准备mutations(操作数据,键值一般大写)
const mutations = {
    addTab(state, data) {
        state.editableTabs = data;
        Storage.setEditableTabs(data);
    },
    setTabName(state, data) {
        state.editableTabsValue = data;
        Storage.setEditableTabsValue(data);
    },
    CHOICETOPICFN(state, data) {
        // index表示第几题，info表示该题的数据(有数据就合并，没有就添加)
        if (state.choiceTopic[data.index]) {
            state.choiceTopic[data.index] = state.choiceTopic[data.index].concat(data.info)
        } else {
            state.choiceTopic[data.index] = data.info
        }
        state.choiceIds = state.choiceIds.concat(data.choiceIds)
    },
    DELSMALLQUEST(state, data) {
        let index = state.choiceTopic[data.index].findIndex(item => {
            return item.id == data.id
        });
        state.choiceTopic[data.index].splice(index, 1)
        // 将数组中的题号删除
        state.choiceIds = state.choiceIds.filter((item) => {
            return item != data.id
        })
    },
    DELTOPIC(state, data) {
        // 将大题下的小题删除
        if (state.choiceTopic[data.index]) {
            let arr = state.choiceTopic[data.index].map(item => {
                return item.id
            })
            state.choiceIds = state.choiceIds.filter((x) => !arr.some((item) => x === item));
        }
        state.choiceTopic.splice(data.index, 1)
    },
    CLEARALL(state) {
        state.choiceTopic = []
        state.choiceIds = []
    },
    CHANGETOPIC(state,data){
        state.choiceTopic=data.choiceTopic
        state.choiceIds=data.choiceIds
    }
}
// 准备state(存放数据)
const state = {
    editableTabs: Storage.getEditableTabs() || [{ title: '首页', name: 'teacher/graphicPresentation' }],
    editableTabsValue: Storage.getEditableTabsValue() || 'teacher/graphicPresentation',
    choiceTopic: [],
    choiceIds: [],
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