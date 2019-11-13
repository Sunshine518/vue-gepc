<template>
    <div class="hello">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        methods: {
            handleSelect(key) {
                switch (key) {
                    case '1':
                        this.$router.push('/Page1');
                        break;
                    case '2':
                        this.$router.push('/Page2')
                        break;
                    case '3':
                        this.$router.push('/Page3')
                        break;
                }
            },

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
