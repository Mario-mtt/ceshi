<template>
    <div class="mytop-div">
        <div class="part1">
            <img class="img-tx" src="@/assets/my-tu.png" alt="">
            <p class="part1-p">
                <span>{{userinfo}}</span>
                <i>启蒙者></i>
            </p>
            <router-link :to="{name:'myewm',query:{userinfo}}">
                <img id="img1" src="@/assets/my-ewm.jpg" alt="">
            </router-link>
            <router-link to="/mymsg">
                <img id="img2" src="@/assets/my-msg.jpg" alt="">
            </router-link>
            <router-link :to="{name:'mysetting',query:{userinfo}}">
                <img id="img3" src="@/assets/my-setting.jpg" alt="">
            </router-link>
        </div>
        <div class="part2">
            <p>
                <span>0</span>
                <i>我的金币></i>
            </p>
            <p>
                <span>0</span>
                <i>优惠券></i>
            </p>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            userinfo:""
        }
    },
    created() {
        this.userinfo = localStorage.getItem("phone"); 
    },  
}
</script>

<style scoped>
    .mytop-div{
        width: 100%;
        height: 2.65rem;
        background-color: #ff571f;
        padding: .2rem;
        box-sizing: border-box;
    }
    .part1{
        display: flex;
        justify-content: space-between;
    }
    .part1>.img-tx{
        width: .96rem;
    }
    .part1-p>span{
        color: white;
        font-size: .16rem;
    }
    .part1-p>i{
        width: 1.27rem;
        height: .36rem;
        border-radius: .18rem;
        background-color: #ffb60f;
        color: white;
        font-size: .16rem;
        text-align: center;
        line-height: .36rem;
        font-style: normal;
        margin-top: .15rem;
    }
    .part1 #img1{
        width: .24rem;
    }
    .part1 #img2{
        width: .27rem;
    }
    .part1 #img3{
        width: .28rem;
    }
    .part2{
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: .6rem;
    }
    .part2>p:first-child{
        margin-right: 1rem;
    }
    .part2>p span{
        color: white;
        font-size: .28rem;
    }
    .part2>p i{
        color: white;
        font-size: .18rem;
        font-style: normal;
    }

</style>