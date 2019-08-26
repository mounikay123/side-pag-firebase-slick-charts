const initialState={
username:"mounikay123@gmail.com",
password :"mounika123",
auth:false,
errors:""
}
const LoginReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_LOGIN" :
            console.log("action",action.payload)
            if(state.username=== action.payload.username && state.password===action.payload.password){
                return {
                    ...state, 
                    auth:true,
                    errors:""
                }
            }
            else{
                return {
                    ...state, 
                    errors:"not matching username &password"
                }

            }
         
            default:
                return state
    }
}
export default LoginReducer;