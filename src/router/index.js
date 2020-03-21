import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

//通过路由懒加载机制加载路由
let Home = ()=>import("@/pages/home");
let Medical = ()=>import("@/pages/medical");
let Circle = ()=>import("@/pages/circle");
let My = ()=>import("@/pages/my");
let Znzd = ()=>import("@/pages/znzd");
let Ddyh = ()=>import("@/pages/ddyh");
let Ysc = ()=>import("@/pages/ysc");
let Jkkp = ()=>import("@/pages/jkkp");
let Details = ()=>import("@/pages/details");
let Unlogin = ()=>import("@/pages/unlogin");
let Mysetting = ()=>import("@/pages/mysetting");
let Myewm = ()=>import("@/pages/myewm");
let Mymsg = ()=>import("@/pages/mymsg");
let Notefood = ()=>import("@/pages/notefood");
let Searchfood = ()=>import("@/pages/searchfood");

export default new Router({
    routes:[
        {name:"home",path:"/home",component:Home},
        {name:"medical",path:"/medical",component:Medical},
        {name:"znzd",path:"/znzd",component:Znzd},
        {name:"ddyh",path:"/ddyh",component:Ddyh},
        {name:"ysc",path:"/ysc",component:Ysc},
        {name:"jkkp",path:"/jkkp",component:Jkkp},
        {name:"details",path:"/details",component:Details},
        {name:"circle",path:"/circle",component:Circle},
        {name:"my",path:"/my",component:My,beforeEnter:(to,from,next)=>{
            let phone = localStorage.getItem("phone");
            if(phone==null){
                next("/unlogin");
            }else{
                next();
            }
        }},
        {name:"unlogin",path:"/unlogin",component:Unlogin},
        {name:"mysetting",path:"/mysetting",component:Mysetting},
        {name:"myewm",path:"/myewm",component:Myewm},
        {name:"mymsg",path:"/mymsg",component:Mymsg},
        {name:"notefood",path:"/notefood",component:Notefood},
        {name:"searchfood",path:"/searchfood",component:Searchfood},
        {path:"/*",redirect:"/home"}
    ]
});