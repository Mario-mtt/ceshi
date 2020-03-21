<template>
    <div class="bottom-bar-div">
        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="home-o">
                <span class="bar-span">首页</span>
            </van-tabbar-item>
            <van-tabbar-item replace to="/medical" icon="shop-o">
                <span class="bar-span">医疗</span>
            </van-tabbar-item>
            <van-tabbar-item replace to="/circle" icon="friends-o">
                <span class="bar-span">圈子</span>
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="user-o">
                <span class="bar-span">我的</span>
            </van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .bar-span{
        font-size: 13px;
        color: #7a7676;
    }

</style>