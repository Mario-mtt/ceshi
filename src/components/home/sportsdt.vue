<template>
    <div>
        <!-- 使用 -->
        <Mysports/>
        <Jyxm/>
    </div>
</template>

<script>
//引用
import Mysports from "@/components/home/mysports";
import Jyxm from "@/components/home/jyxm";
export default {
    components:{
        //调用
        Mysports,
        Jyxm
    }
    
}
</script>

<style scoped>

</style>