import { authConstants } from "../constant/auth.constant";
import { store } from "../store";

export const authServices = {
    login,
    register,
    logout
}
 
 function login(data){
    return  fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        },

    
    }).then((data)=>data.json()) 

}

 function register(data){
    return fetch("https://reqres.in/api/register",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        },
    }).then((data)=>data.json);
}





function logout() {
    store.dispatch({type:authConstants.LOGOUT})
}







