<template>
    <div class="wdys-div">
        <h5>今日建议摄入能量</h5>
        <p class="first-p"><span>2498</span>千卡</p>
        <ul>
            <li>
                <span>69.0</span>
                <i>脂肪(克)</i>
            </li>
            <li>
                <span>94.0</span>
                <i>蛋白质(克)</i>
            </li>
            <li>
                <span>375.0</span>
                <i>碳水(克)</i>
            </li>
        </ul>
        <p class="last-p">
            <a href="#">我的饮食</a>>>
        </p>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .wdys-div{
        width: 90%;
        height: 3.16rem;
        background-color: white;
        border-radius: 8px;
        margin: 0 auto;
        text-align: center;
        padding: .4rem 0;
    }
    .wdys-div>h5{
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
    .wdys-div>ul{
        display: flex;
        justify-content: space-around;
        margin-bottom: .45rem;
    }
    .wdys-div>ul span{
        font-size: .22rem;
        color: #2a2928;
    }
    .wdys-div>ul i{
        font-size: .16rem;
        color: #cdc8c6;
        font-style: normal;
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