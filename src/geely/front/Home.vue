<template>
    <div class="home">
        <div class="subbox">
           前台 首页
        </div>
        <router-link :to="{ name: 'back'}">
            <span>去后台</span>
        </router-link>
        <div class="subbox">
            <router-link :to="{ name: 'login'}">
                <span>登录</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {}
        },
        created() {

        }

    }
</script>


<style scoped >
    .subbox {
        margin-bottom: 20px;
        margin-top: 20px;
    }

</style>