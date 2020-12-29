import {authConstants} from '../constant/auth.constant'
import {authServices} from '../services/auth.services'

export const authActions = {
    login,
    register,
    logout
}

function login(data) {
    return dispatch =>{
        dispatch({
            type:authConstants.LOGIN_REQUEST_ACTION,
            data:null  
        })
        authServices.login(data)
            .then(response=>{
                if(response.token){
                    dispatch({
                        type:authConstants.LOGIN_SUCCESS_ACTION,
                        data:response
                    })
                } else{
                    dispatch({
                        type:authConstants.LOGIN_ERROR_ACTION,
                        data:response
                    })
                }
            }).catch(err=>{
                dispatch({type:authConstants.LOGIN_ERROR_ACTION,payload:err.message})
            })
    }
}

function register(data){
    return dispatch =>{
        dispatch({
            type:authConstants.REGISTER_REQUEST_ACTION,
            data:null
        })
        authServices.register(data)
        .then(
            response =>{
                if(response.token){
                    dispatch(({
                        type:authConstants.REGISTER_SUCCESS_ACTION,
                        data:response.data
                    }))
                } else {
                    dispatch(({
                        type:authConstants.REGISTER_ERROR_ACTION,
                        data:response
                    }))
                }
            },
            error=>{
                dispatch(({
                    type:authConstants.REGISTER_ERROR_ACTION,
                    data:error.message
                })).catch(err=>{
                    dispatch({type:authConstants.REGISTER_ERROR_ACTION,payload:err.message})

                })
            }
        )
    }
}


function logout() {
   return dispatch =>{
       dispatch({
           type:authConstants.LOGOUT
       })
   }
}