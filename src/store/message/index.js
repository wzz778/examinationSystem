// 准备actions(操作数据之前的操作)
const actions = {}
// 准备mutations(操作数据,键值一般大写)
const mutations = {}
// 准备state(存放数据)
const state = {
    token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzAzNzc3NzUsInVzZXJuYW1lIjoiMjI5NTkwODI1MSIsInBvd2VyIjoiMCIsImlkIjo0fQ.HxA1GlFl3VGKBbNjnIvjRVre5DUsTgK8tQ57gUSG_YY',
    power:""
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