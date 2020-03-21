<template>
    <div class="ernav-div">
        <router-link to="/znzd">
            <img src="@/assets/ico1.png" alt="">
            <span>智能诊断</span>
        </router-link>
        <router-link to="/ddyh">
            <img src="@/assets/ico2.png" alt="">
            <span>到店优惠</span>
        </router-link>
        <router-link to="/ysc">
            <img src="@/assets/ico3.png" alt="">
            <span>云商场</span>
        </router-link>
        <router-link to="/jkkp">
            <img src="@/assets/ico4.png" alt="">
            <span>健康科普</span>
        </router-link>   
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .ernav-div{
        width: 100%;
        height: 1.63rem;
        background-color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    .ernav-div img{
        width: .84rem;
    }
    .ernav-div span{
        color: #2a2928;
        font-size: .19rem;
    }
</style>