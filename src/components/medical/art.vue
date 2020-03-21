<template>
    <div class="art-div">
        <router-link :to="{name:'details',query:{tit:myp,article:myarticle}}">
            <p>{{myp}}</p>
            <ul>
                <li v-for="(v,i) in myimg" :key="i">
                    <img :src="v.pic" alt="">
                </li>
            </ul>
        </router-link>
        
    </div>
</template>

<script>
export default {
    props:{
        myp:String,
        myimg:Array,
        myarticle:String
    }
    
}
</script>

<style scoped>
    .art-div{
        width: 100%;
        background-color: white;
        box-sizing: border-box;
        padding-left: .24rem;
        padding-top: .13rem;
        margin-bottom: .15rem;
    }
    .art-div p{
        color: #2a2928;
        font-size: .16rem;
        line-height: .63rem;
    }
    .art-div ul{
        display: flex;
    }
    .art-div ul li{
        margin-right: .15rem;
    }
    .art-div ul img{
        width: 100%;
    }
</style>