<template>
    <div>
        <!-- 使用 -->
        <Popbar/>
        <div class="main">
            <h5>{{this.$route.query.tit}}</h5>
            <p>{{this.$route.query.article}}</p>
        </div>   
    </div>
</template>

<script>
//引用
import Popbar from "@/components/medical/popbar";
export default { 
    components:{
        //调用
        Popbar
    },
    
}
</script>

<style scoped>
    .main{
        width: 100%;
        box-sizing: border-box;
        padding: .35rem .25rem;
    }
    .main>h5{
        font-size: .25rem;
    }
    .main>p{
        margin-top: .3rem;
        font-size: .2rem;
    }

</style>