<template>
    <div>
        <van-nav-bar title="系统消息" left-arrow @click-left="onClickLeft"/>
        <img src="@/assets/no-msg.jpg" alt="">
        
    </div>
</template>

<script>
export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    
}
</script>

<style scoped>
    img{
        width: 100%;
    }

</style>