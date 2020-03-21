<template>
    <div class="jyxm-div">
        <p class="first-p">
            <img src="@/assets/icon-food.jpg" alt="">
            <span>建议项目</span>
        </p>

        <ul class="jyxm-ul">
            <li>
                <img src="@/assets/sports1.jpg" alt="">
                <p>
                    <span>快跑</span>
                    <i>39分钟/534千卡</i>
                </p>
            </li>
            <li>
                <img src="@/assets/sports2.jpg" alt="">
                <p>
                    <span>乒乓球</span>
                    <i>106分钟/530千卡</i>
                </p>
            </li>
            <li>
                <img src="@/assets/sports2.jpg" alt="">
                <p>
                    <span>俯卧撑</span>
                    <i>141分钟/521千卡</i>
                </p>
            </li>
        </ul>

        <button>添加记录</button>
 
    </div>
</template>

<script>

export default { 
    
}
</script>

<style scoped>
    .jyxm-div{
        width: 90%;
        /* height: 4.41rem; */
        background-color: white;
        margin: .18rem auto;
        border-radius: 8px;
        padding: .3rem;
        box-sizing: border-box;
    }
    .first-p{
        display: flex;
    }
    .first-p>img{
        width: .24rem;
        height: .24rem;
        margin-right: .13rem;
    }
    .first-p>span{
        color: #2a2928;
        font-size: .22rem;
        font-weight: bold;
    }
    .jyxm-div>ul{
        margin: .33rem 0 .25rem;
    }
    .jyxm-div>ul li{
        display: flex;
        align-items: center;
        margin-bottom: .25rem;
    }
    .jyxm-div>ul img{
        width: .75rem;
    }
    .jyxm-div>ul span{
        font-size: .21rem;
        color: #2a2928;
        font-weight: bold;
        line-height: .35rem;
    }
    .jyxm-div>ul i{
        font-size: .16rem;
        color: #cdc8c6;
        font-style: normal;
    }
    .jyxm-div>button{
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