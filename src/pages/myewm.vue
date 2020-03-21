<template>
    <div>
        <van-nav-bar title="我的二维码" left-arrow @click-left="onClickLeft"/>
        <div class="main">
            <img class="photo" src="@/assets/my-tu.png" alt="">
            <p>{{phone}}</p>
            <img class="ewm" src="@/assets/ewm.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    data(){
        return {
            phone:""
        }
    },
    created() {
        this.phone = this.$route.query.userinfo;
    },
    
}
</script>

<style scoped>
    .main{
        width: 90%;
        height: 4rem;
        background-color: white;
        margin: .8rem auto;
        box-shadow: 5px 5px 16px gray;
        text-align: center;
        overflow: hidden;
    }
    .photo{
        width: .95rem;
        margin: .3rem auto .2rem;
    }
    .ewm{
        width: 1.33rem;
        margin: .5rem auto;
    }
    .main>p{
        font-size: .21rem;
        font-weight: bold;
    }

</style>