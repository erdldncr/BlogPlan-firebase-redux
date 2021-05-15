
const initState={
    authError:'',

}
const authReducer=(state={initState},action)=>{
    
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('error')
        return {...state,authError:'Login failed'}
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {...state,authError:''}
        case'SIGN_OUT_SUCCESS':  
        console.log('BASARILI')
        return state 
        case 'SIGNUP_SUCCESS':
            console.log('signup basarili')
            return state
        case 'SIGNUP_ERROR':
            console.log('singup basarisiz')
            return {...state,authError:action.err.message}     
        default:
            return state
    }
    
    
}
export default authReducer