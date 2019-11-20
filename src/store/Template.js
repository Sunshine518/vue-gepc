export default{
    namespaced:true,   //开启命名空间

    // 局部状态
    state:{
        count :2
    },
    // 局部读取
    getters:{
        getGetterCount(state){
            return state.count +1
        }
    },
    // 通过页面修改值，局部变化
    mutations:{
        add(state,n){
            state.count = state.count +n
        },
        reduce(state){
            state.count = state.count -1
        }
    },
    // 局部动作
    actions:{
        addFun(context,n){
            context.commit('add',n)
        },
        reduceFun(context){
            context.commit('reduce')
        }
    }
}