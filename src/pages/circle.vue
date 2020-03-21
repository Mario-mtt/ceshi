<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="聊天">
                <div class="kong-div">
                    <img src="@/assets/kong.jpg" alt="">
                </div>
            </van-tab>
            <van-tab title="通讯录">
                <van-cell-group>
                    <div class="cell-div">
                        <img src="@/assets/c1.jpg" alt="">
                        <van-cell title="新朋友" size="large" />
                    </div>
                    
                </van-cell-group>
                
                <van-cell-group>
                    <div class="cell-div">
                        <img src="@/assets/c2.jpg" alt="">
                        <van-cell title="群聊" size="large" />
                    </div>
                </van-cell-group>

                <van-cell-group>
                    <div class="cell-div">
                        <img src="@/assets/c3.jpg" alt="">
                        <van-cell title="标签" size="large" />
                    </div>
                </van-cell-group>

                <van-cell-group>
                    <div class="cell-div">
                        <img src="@/assets/c4.jpg" alt="">
                        <van-cell title="手机通讯录" size="large" />
                    </div>
                </van-cell-group>
            </van-tab>
        </van-tabs>
        <!-- 使用 -->
        <Bottombar/>
    </div>
</template>

<script>
//引用
import Bottombar from "@/components/common/bottombar";
export default {
    //调用
    components:{
        Bottombar
    },
    data() {
        return {
            active: 1
        };
    }
    
}
</script>

<style scoped>
    .kong-div{
        width: 70%;
        margin: 20% auto;
    }
    .kong-div>img{
        width: 100%;
    }
    .cell-div{
        display: flex;
        padding: .15rem;
        box-sizing: border-box;
    }
    .cell-div>img{
        width: .54rem;
        height: .54rem;
    }

</style>