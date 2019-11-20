<template>
  <div>
    我是A
    <div>
      <input @[eventName]="event" />
      <button @click="eventName='change'">change</button>
      <button @click="eventName='focus'">focus</button>
      <button @click="eventName=1">1</button>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                eventName: ''
            }
        },
        methods: {
            event() {
                console.log('触发' + this.eventName + '事件')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
