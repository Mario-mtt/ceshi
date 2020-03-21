<template>
    <div class="mytab-div">
        <van-tabs v-model="active" swipeable>
            <van-tab v-for="(item,index) in myobj.mttdata" :key="index" :title="item.bigTit">
                <Art v-for="(v,i) in item.peritem" :key="i" :myp="v.smallTit" :myimg="v.imgurl" :myarticle="v.article"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Art from "@/components/medical/art";
export default {
    components:{
        Art
    },
    data() {
        return {
            active: 1
        }
    },
    props:{
        myobj:Object
    }
    
}
</script>

<style scoped>
    .mytab-div{
        width: 100%;
        background-color: white;
        padding-bottom: .8rem;
    }
</style>