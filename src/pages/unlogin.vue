<template>
    <div class="unlogin-div">
        <img @click="exit()" src="@/assets/login-exit.jpg" alt="">
        <h3>手机号登录</h3>
        <input class="phone" type="text" v-model="phone" placeholder="输入手机号码" @blur="checkphone()">
        <p class="first-p">
            <input class="yzm" type="text" v-model="yzm" placeholder="输入验证码" readonly>
            <span class="first-span" @click="getyzm()">获取验证码</span>
        </p>
        <button @click="login()">进入伯图</button>
        <p class="last-p">进入即表示您同意《用户协议》和《隐私策略》</p>
    </div>
</template>

<script>
import {api} from "@/api/index"
export default {
    data(){
        return {
            phone:"",
            yzm:""
        }

    },
    methods: {
        exit(){
            this.$router.go(-1);
        },
        checkphone(){
            if(this.phone.trim() == ""){
                this.$toast("请您输入手机号码");
            }else{
                let reg = /^(13|15|17|18)\d{9}$/
                if(!reg.test(this.phone)){
                    this.$toast("手机号码格式不正确");
                }
            }
        },
        login(){
            let reg = /^(13|15|17|18)\d{9}$/;
            if(this.phone.trim() == ""){
                this.$toast("请您输入手机号码");
            }else if(!reg.test(this.phone)){
                this.$toast("手机号码格式不正确");
            }else{
                this.axios({
                    url:api.login,
                    method:"get",
                    params:{
                        "phone":this.phone
                    }
                }).then((ok)=>{
                    window.console.log(ok);
                    if(ok.data.bo==1){
                        //表示登录成功，就可以跳转
                        localStorage.setItem("phone",this.phone);
                        this.$toast.success("欢迎您!");
                        this.$router.push("/home");
                    }else{
                        this.$toast.fail("登录失败");
                        this.phone = "";
                        this.yzm = "";
                    }

                });
            }          
        },
        getyzm(){
            let _str = "0123456789";
            let _yzm = "";
            for(let i=0;i<6;i++){
                _yzm += Math.floor(Math.random()*_str.length);
            }
            this.yzm = _yzm;
        }
    },
    
}
</script>

<style scoped>
    .unlogin-div{
        width: 100%;
        height: 6.67rem;
        background-color: white;
        padding: 1.0rem 0 1.0rem .3rem;
        box-sizing: border-box;
    }
    .unlogin-div img{
        width: .27rem;
        position: fixed;
        left: .25rem;
        top: .25rem;
    }
    .unlogin-div h3{
        color: #2a2928;
        font-size: .33rem;
    }
    .unlogin-div input{
        display: block;
        width: 88%;
        height: .60rem;
        background-color: #f8f8f8;
        border-radius: .3rem;
        border: 0;
        text-indent: .2rem;
    }
    .unlogin-div .first-p{
        position: relative;
    }
    .phone{
        margin: .35rem 0;
    }
    .yzm{
        margin-bottom: .35rem;
    }
    .unlogin-div input[placeholder]{
        font-size: .2rem;
    }
    .unlogin-div .first-span{
        color: #ff6d3d;
        font-size: .18rem;
        position: absolute;
        top: .18rem;
        right: .6rem;
    }
    .unlogin-div button{
        display: block;
        width: 88%;
        height: .6rem;
        background-color: #ff6d3d;
        color: white;
        font-size: .25rem;
        border-radius: .30rem;
        border: 0;
    }
    .last-p{
        color: #7a7676;
        font-size: .15rem;
        position: fixed;
        bottom: .3rem;
    }
</style>