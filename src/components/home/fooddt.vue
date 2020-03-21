<template>
    <div>
        <!-- 使用 -->
        <Wdys/>
        <Jysc :foodobj="fooddtobj"/>
    </div>
</template>

<script>
//引用
import Wdys from "@/components/home/wdys";
import Jysc from "@/components/home/jysc";
export default {
    components:{
        //调用
        Wdys,
        Jysc
    },
    props:{
        fooddtobj:Object
    }
    
}
</script>

<style scoped>

</style>