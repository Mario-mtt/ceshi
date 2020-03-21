<template>
    <div>
        <van-nav-bar title="设置" left-arrow @click-left="onClickLeft"/>
        <van-cell title="手机号" :value="phone" />
        <van-cell title="清除缓存" :value="cache" @click="dialog()"/>
        <van-cell title="版本信息" value="v2.1.3"/>
        <van-button type="default" size="large" @click="exit()">退出登录</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            phone:"",
            cache:"20.20MB"
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        dialog(){
            this.$dialog.confirm({
                title:"确定清除所有缓存",
                message: '系统只会清除不需要的缓存'
            }).then(()=>{
                //确认执行的方法
                this.cache = "0.0KB"

            }).catch(()=>{
                //取消执行的方法

            });

        },
        exit(){
            localStorage.removeItem("phone");
            this.$router.push("/home");
        }
    },
    created() {
        this.phone = this.$route.query.userinfo;
    },
    
}
</script>

<style scoped>

</style>