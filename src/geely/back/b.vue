<template>
  <div class="store">
    <!-- props 传递值 -->
    <custom-input :value="value" @customInput="handleInput" :placeholder="placeholder" />
    <p v-text="value"></p>
  </div>
</template>
<script>
    import CustomInput from './CustomInput.vue'
    export default {
        name: 'Store',
        components: {
            CustomInput
        },
        data() {
            return {
                value: '',
                placeholder: '自定义事件传递值'
            }
        },
        methods: {
            //  自定义事假处理器
            handleInput(val) {
                this.value = val
            }
        }
    }
</script>