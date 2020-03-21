<template>
    <div class="swipe-div">
        <van-swipe :autoplay="3000" indicator-color="#ff6d3d">
            <van-swipe-item>
                <img src="@/assets/banner1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/banner2.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .swipe-div{
        width: 90%;
        margin: .32rem auto .23rem;
    }
    img{
        width: 100%;
    }
</style>