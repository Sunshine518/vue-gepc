<template>
  <div>
    我是A{{count}}
    我是B{{getGetterCount}}

    <p>count的值 ：{{count}}</p>
    <button @click="add">+</button>
    <button @click="reduce">-</button>

  </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState,mapActions,mapGetters } = createNamespacedHelpers('noticeStore')

    export default {
        data() {
            return {
            }
        },
        computed:{
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'getGetterCount'
            ])
        },
        methods: {
            ...mapActions([
                'addFun',
                'reduceFun'
            ]),
            add(){
                let n = 10;
                this.addFun(n)
            },
            reduce(){
                this.reduceFun()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
