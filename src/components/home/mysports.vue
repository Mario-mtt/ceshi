<template>
    <div class="mysports-div">
        <h5>建议消耗能量</h5>
        <p class="first-p"><span>525</span>千卡</p>
        <p class="middle-p">还需消耗525千卡</p>
        <p class="last-p">
            <a href="#">我的运动</a>>>
        </p>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .mysports-div{
        width: 90%;
        height: 3.16rem;
        background-color: white;
        border-radius: 8px;
        margin: 0 auto;
        text-align: center;
        padding: .4rem 0;
    }
    .mysports-div>h5{
        font-size: .2rem;
        color: #cdc8c6;
    }
    .first-p{
        font-size: .15rem;
        color: #ff6532;
        margin: .31rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .first-p span{
        font-size: .55rem;;
        font-weight: bold;
        margin-right: .17rem;
    }
    .middle-p{
        color: #f7b72b;
        font-size: .21rem;
        margin-bottom: .45rem;
    }
    .last-p{
        font-size: .16rem;
        color: #d3cfce;
    }
    .last-p>a{
        font-size: .16rem;
        color: #7a7676;
    }

</style>