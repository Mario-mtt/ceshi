<template>
    <div>
        <!-- 使用 -->
        <Mytop/>
        <Bottombar/>
        <Center>
            <h4 slot="zx-title">健康中心</h4>
            <ul slot="zx-item">
                <li>
                    <img src="@/assets/my-ys.jpg" alt="">
                    <span>我的饮食</span>
                </li>
                <li>
                    <img src="@/assets/my-yd.jpg" alt="">
                    <span>我的运动</span>
                </li>
                <li>
                    <img src="@/assets/my-sj.jpg" alt="">
                    <span>我的数据</span>
                </li>
            </ul>
        </Center>
        <Center>
            <h4 slot="zx-title">医疗中心</h4>
            <ul slot="zx-item">
                <li>
                    <img src="@/assets/my-yl.jpg" alt="">
                    <span>我的问诊</span>
                </li>
                <li>
                    <img src="@/assets/my-fwyy.jpg" alt="">
                    <span>服务预约</span>
                </li>
            </ul>
        </Center>
        <Center>
            <h4 slot="zx-title">订单中心</h4>
            <ul slot="zx-item">
                <li>
                    <img src="@/assets/my-dfk.jpg" alt="">
                    <span>待付款</span>
                </li>
                <li>
                    <img src="@/assets/my-dfh.jpg" alt="">
                    <span>待发货</span>
                </li>
                <li>
                    <img src="@/assets/my-dsh.jpg" alt="">
                    <span>待收货</span>
                </li>
                <li>
                    <img src="@/assets/my-dpj.jpg" alt="">
                    <span>待评价</span>
                </li>
                <li>
                    <img src="@/assets/my-sh.jpg" alt="">
                    <span>售后</span>
                </li>
            </ul>
        </Center>
        <Sjrz/>
    </div>
</template>

<script>
//引用
import Bottombar from "@/components/common/bottombar";
import Mytop from "@/components/my/mytop";
import Center from "@/components/my/center";
import Sjrz from "@/components/my/sjrz";
export default {
    //调用
    components:{
        Bottombar,
        Mytop,
        Center,
        Sjrz
    }
    
}
</script>

<style scoped>
    h4{
        font-size: .22rem;
        color: #2a2928;
        text-indent: .23rem;
    }
    ul{
        display: flex;
        margin-top: .29rem;
    }
    ul li{
        margin-left: .2rem;    
    }
    ul img{
        margin: 0 auto;
        width: .36rem;
    }
    ul span{
        color: #464645;
        font-size: .17rem;
        line-height: .45rem;
    }
    

</style>