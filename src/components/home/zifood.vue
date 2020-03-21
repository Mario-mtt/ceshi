<template>
    <div class="zifood-div">
        <ul v-if="foodarr.length==0">
            <li v-for="(item,index) in initarr" :key="index">
                <img :src="item.imgurl" alt="">
                <p>{{item.title}}</p>
                <span>{{item.calorie}}</span>
            </li>
        </ul>
        <ul v-else>
            <li v-for="(item,index) in foodarr" :key="index">
                <img :src="item.imgurl" alt="">
                <p>{{item.title}}</p>
                <span>{{item.calorie}}</span>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    props:{
        initarr:Array,
        foodarr:Array
        
    }
    
}
</script>

<style scoped>
    .zifood-div>ul{
        width: 100%;
        display: flex;
        overflow-x: auto;
        text-align: center;
    }
    .zifood-div>ul li{
        margin-right: .16rem;
    }
    .zifood-div img{
        width: 1.33rem;
    }
    .zifood-div p{
        font-size: .17rem;
        color: #2a2928;
        font-weight: bold;
        line-height: .4rem;
    }
    .zifood-div span{
        font-size: .16rem;
        color: #cdc8c6;
    }

</style>