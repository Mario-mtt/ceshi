<template>
    <div class="jysc-div">
        <p>
            <img src="@/assets/icon-food.jpg" alt="">
            <span>建议食材</span>
        </p>

        <ul>
            <li @click="fun(foodobj.breakfast)">早餐</li>
            <li @click="fun(foodobj.lunch)">中餐</li>
            <li @click="fun(foodobj.dinner)">晚餐</li>
        </ul>

        <!-- 使用 -->
        <Zifood :initarr="foodobj.breakfast" :foodarr="myarr" />

        <button @click="add()">添加记录</button>

       
        
    </div>
</template>

<script>
//引用
import Zifood from "@/components/home/zifood";
export default {
    //调用
    components:{
        Zifood
    },
    data(){
        return {
            myarr:[]
        }
    },
    methods: {
        fun(val){
            this.myarr = val;
        },
        add(){
            this.$router.push("/notefood");

        }
    },
    props:{
        foodobj:Object
    },
    
    
}
</script>

<style scoped>
    .jysc-div{
        width: 90%;
        /* height: 4.41rem; */
        background-color: white;
        margin: .18rem auto;
        border-radius: 8px;
        padding: .3rem;
        box-sizing: border-box;
    }
    .jysc-div>p{
        display: flex;
    }
    .jysc-div>p img{
        width: .24rem;
        height: .24rem;
        margin-right: .13rem;
    }
    .jysc-div>p span{
        color: #2a2928;
        font-size: .22rem;
        font-weight: bold;
    }
    .jysc-div>ul{
        display: flex;
        margin: .33rem 0 .25rem;
    }
    .jysc-div>ul li{
        color: #bcbaba;
        font-size: .2rem;
        margin-right: .32rem;

    }
    .jysc-div>button{
        display: block;
        width: 100%;
        height: .5rem;
        background-color: #ff6532;
        color: white;
        font-size: .21rem;
        outline: none;
        border: 0;
        border-radius: .25rem;
        margin: .3rem 0;
    }

</style>