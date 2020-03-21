<template>
    <div>
        <van-nav-bar title="记录饮食" left-arrow @click-left="onClickLeft"/>
        <van-search placeholder="搜索" shape="round" readonly @click="search()"/>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul class="food-ul">
                <li v-for="(v,i) in foodarr" :key="i">
                    <img :src="v.foodurl" alt="">
                    <p>
                        <span>{{v.foodname}}</span>
                        <i>{{v.foodcal}}</i>
                    </p>
                    
                </li>
            </ul>
        </van-pull-refresh>
    </div>
</template>

<script>
import {api} from "@/api/index"
export default {
    data() {
        return {
            isLoading: false,
            foodarr:[]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        },
        search(){
            this.$router.push("/searchfood");
        }
    },
    created() {
        this.axios({
            url:api.food,
            method:"get"
        }).then((ok)=>{
            window.console.log(ok);
            this.foodarr = ok.data;
        })
    },
    
}
</script>

<style scoped>
    .food-ul{
        width: 90%;
        background-color: white;
        margin: .24rem auto;
        padding: .3rem 0 .3rem .3rem;
        box-sizing: border-box;
    }
    .food-ul li{
        display: flex;
        margin-bottom: .5rem;
        align-items: center;
    }
    .food-ul img{
        width: .66rem;
        margin-right: .2rem;
    }
    .food-ul span{
        color: #303030;
        font-size: .21rem;
        line-height: .35rem;
    }
    .food-ul i{
        color: #999999;
        font-size: .18rem;
    }

</style>