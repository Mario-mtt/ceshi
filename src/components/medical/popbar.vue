<template>
    <div>
        <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="share" slot="right" size="large"/>
        </van-nav-bar>
        <van-popup v-model="show" position="bottom" :style="{height:'30%'}">
            <van-grid square>
                <van-grid-item>
                    <img class="pop-img" src="@/assets/wechat.jpg"/>
                </van-grid-item>
                <van-grid-item>
                    <img class="pop-img" src="@/assets/pyq.jpg"/>
                </van-grid-item>
                <van-grid-item>
                    <img class="pop-img" src="@/assets/qq.jpg"/>
                </van-grid-item>
                <van-grid-item>
                    <img class="pop-img" src="@/assets/zone.jpg"/>
                </van-grid-item>
                <van-grid-item>
                    <img class="pop-img" src="@/assets/botu.jpg"/>
                </van-grid-item>
                <van-grid-item>
                    <img class="pop-img" src="@/assets/friends.jpg"/>
                </van-grid-item>
            </van-grid>
        </van-popup>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            this.show = true;
        }
    }
    
}
</script>

<style scoped>
    .pop-img{
        width: .40rem;
    }

</style>