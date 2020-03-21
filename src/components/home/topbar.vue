<template>
    <div class="topbar-div">
        <p class="topbar-p">
            <span>饮食</span>
            <span>运动</span>
        </p>
        <img src="@/assets/sys.jpg" alt="">
        
    </div>
</template>

<script>
export default {
    
    
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