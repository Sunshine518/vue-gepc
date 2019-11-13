<template>
    <div class="home">
        <div>我是登录</div>
        <li v-for="item in todos" :key="item.text">
            {{item.text}}
        </li>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data(){
            return{
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ]
            }
        },
        created() {

        }

    }
</script>


<style scoped lang="scss">
    .home {
    }

</style>