<template>
    <div class="kswz-div">
        <img class="img1" src="@/assets/kswz.jpg" alt="">
        <p>
            <span>快速问诊</span>
            <i>专家医生极速接诊</i>
            <img class="fast-img" src="@/assets/fast.jpg" alt="">
        </p>
        <img class="img2" src="@/assets/my-jt.png" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .kswz-div{
        width: 100%;
        height: 1.05rem;
        background-color: white;
        margin: .12rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .24rem;
        box-sizing: border-box;
    }
    .kswz-div>.img1{
        width: .57rem;
    }
    .kswz-div>p{
        width: 2.2rem;
        position: relative;
    }
    .kswz-div>p span{
        color: #2a2928;
        font-size: .24rem;
    }
    .kswz-div>p i{
        color: #999999;
        font-size: .16rem;
    }
    .kswz-div>p .fast-img{
        width: .54rem;
        position: absolute;
        top: 5px;
        left: 110px;
    }
    .kswz-div>.img2{
        width: .15rem;
    }

</style>