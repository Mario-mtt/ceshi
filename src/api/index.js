let location = "http://localhost:3000";

//然后封装请求地址并暴露出去
export let api ={
    login:location+"/botu/login",
    food:location+"/botu/food",
    searchfood:location+"/botu/searchfood"
}