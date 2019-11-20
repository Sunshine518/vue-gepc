<template>
    <input @input="handleInput" :value="value" :placeholder="placeholder" />
</template>
<script>
    export default {
        name: "CustomInput",
        //props 接收父组件传递过来的数据
        props: {
            value: {
                type: [Number, String],
                required: true,
                default: ""
            },
            placeholder: {
                type: String,
                default: "提示文本"
            }
        },
        methods: {
            handleInput(event) {
                let val = event.target.value;
                // 子组件的事件监听函数中触发一个自定义事件
                this.$emit("customInput", val);
            }
        }
    };
</script>