<template>
    <div>
        <!-- 使用 -->
        <Bottombar/>
        <Search/>
        <Kswz/>
        <Ernav/>
        <Playimg/>
        <Mytab :myobj="medicalobj"/>
    </div>
</template>

<script>
//引用
import Bottombar from "@/components/common/bottombar";
import Search from "@/components/medical/search";
import Kswz from "@/components/medical/kswz";
import Ernav from "@/components/medical/ernav";
import Playimg from "@/components/medical/playimg";
import Mytab from "@/components/medical/mytab";
export default {
    //调用
    components:{
        Bottombar,
        Search,
        Kswz,
        Ernav,
        Playimg,
        Mytab
    },
    created() {
        this.axios({
            url:"/medical/data",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data);
            this.medicalobj = ok.data;

        });
    },
    data(){
        return {
            medicalobj:{}
        }
    }
    
}
</script>

<style scoped>

</style>