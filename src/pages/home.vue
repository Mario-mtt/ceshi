<template>
    <div>
        <!-- 使用 -->
        <div class="topbar-div">
            <p class="topbar-p">
                <span @click="com='Fooddt'">饮食</span>
                <span @click="com='Sportsdt'">运动</span>
            </p>
            <img src="@/assets/sys.jpg" alt="">
        </div>
        <Gg/>

        <!-- 动态组件开始 -->
        <component :is="com" :fooddtobj="data"></component>
        <!-- 动态组件结束 -->

        <Bottombar/>
        <!-- <p>占位</p> -->
        
    </div>
</template>

<script>
//引用
import Bottombar from "@/components/common/bottombar";
import Gg from "@/components/home/gg";
import Fooddt from "@/components/home/fooddt";
import Sportsdt from "@/components/home/sportsdt";

export default {
    //调用
    components:{
        Bottombar,
        Gg,
        Fooddt,
        Sportsdt
    },
    created() {
        //在created钩子函数中请求数据
        this.axios({
            url:"/home/data",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data);
            this.data = ok.data;
        });
    },
    data(){
        return {
            data:{},
            com:"Fooddt"
        }
    }
    
}
</script>

<style scoped>
    .topbar-div{
        width: 100%;
        height: 1.02rem;
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: 0 .24rem 0 .31rem;
        box-sizing: border-box;
        align-items: center;
        position: sticky;
        top: 0;
    }
    .topbar-p{
        display: flex;
    }
    .topbar-p>span{
        font-size: .22rem;
        color: #bcbaba;
        margin-right: .35rem;
    }
    .topbar-div>img{
        width: .28rem;
        height: .3rem;
    }

</style>