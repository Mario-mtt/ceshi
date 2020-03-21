<template>
    <div>
        <van-nav-bar title="搜索食物" left-arrow @click-left="onClickLeft"/>
        <van-search placeholder="请输入食物名称" shape="round" v-model="val" @search="onSearch"/>
        <div class="sshistory" v-if="resarr.length==0">
            <p class="his-p">
                <span>最近搜索</span>
                <i @click="clearhis()">清空搜索历史</i>
            </p>
            <ul class="his-ul">
                <li v-for="(vv,ii) in hisarr" :key="ii">{{vv}}</li>
            </ul>
        </div>
        <ul class="food-ul" v-else>
                <li v-for="(v,i) in resarr" :key="i">
                    <img :src="v.foodurl" alt="">
                    <p>
                        <span>{{v.foodname}}</span>
                        <i>{{v.foodcal}}</i>
                    </p>
                </li>
        </ul>
    </div>
</template>

<script>
import {api} from "@/api/index"
export default {
    data(){
        return {
            val:"",
            resarr:[],
            hisarr:[]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onSearch(){
            this.hisarr.push(this.val);
            this.axios({
                url:api.searchfood,
                method:"get",
                params:{
                    "foodname":this.val
                }
            }).then((ok)=>{
                this.resarr = ok.data;
            })
        },
        clearhis(){
            this.hisarr = [];
        }
    }
    
}
</script>

<style scoped>
    .sshistory{
        width: 100%;
        height: 5.67rem;
        background-color: white;
    }
    .his-p{
        display: flex;
        justify-content: space-between;
        padding: .25rem;
    }
    .his-p>span{
        color: black;
        font-size: .22rem;
        font-weight: bold;
    }
    .his-p>i{
        color: #cdc8c6;
        font-size: .16rem;
    }
    .his-ul{
        display: flex;
        flex-wrap: wrap;
    }
    .his-ul>li{
        height: .44rem;
        background-color: #f4f4f4;
        border-radius: .22rem;
        padding: 0 .25rem; 
        font-size: .18rem;
        text-align: center;
        line-height: .44rem;
        margin-right: .05rem;
        margin-bottom: .15rem;
    }
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