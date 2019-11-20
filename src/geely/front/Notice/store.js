
export default{
    namespaced:true,
    state:{
        count :2
    },
    //直接返回计算值
    getters:{
        getGetterCount(state){
            return state.count +1
        }
    },
    // 通过页面修改值
    mutations:{
        add(state,n){
            state.count = state.count +n
        },
        reduce(state){
            state.count = state.count -1
        }
    },
    actions:{
        addFun(context,n){
            context.commit('add',n)
        },
        reduceFun(context){
            context.commit('reduce')
        }
    }
}