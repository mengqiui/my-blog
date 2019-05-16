<template>
    <header class="head">{{text}}</header>
</template>
<script>
export default {
    name:'headbox',
    data(){
        return {
            text:'我是头部'
        }
    }
}
</script>
<style scoped>
    .head{color:blueviolet;}
</style>

