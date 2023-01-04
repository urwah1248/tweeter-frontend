import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

const initialState={
    loading:false,
    profile:{},
    profileTweet:[],
    error:"",
    accessProfile:false,
editprofile:{},
ifedit:false
}


export function ProfileReducer(state=initialState, action){
    switch(action.type){
        case "VIEW_PROFILE":return {...state, loading:true,  accessProfile:false};
        case "VIEW_PROFILE_SUCCED":{console.log(action.payload)
            return{
            ...state, loading:false, profile:action.payload.data, accessProfile:true, profileTweet:action.payload.data.tweets
        }}
        case "VIEW_PROFILE_FAIL":return{
            ...state, loading:false, error:action.payload, accessProfile:false
        }
        case "EDIT_PROFILE":return {...state, loading:true, ifedit:false}
        case "EDIT_PROFILE_SUCCED":{
            console.log(action.payload)
            return{
                ...state, loading:false, editprofile:action.payload.data, accessProfile:true, ifedit:true
            }

        }  
        case "EDIT_PROFILE_FAIL":{
            console.log(action.payload)
            return{
            ...state, loading:false, editprofile:action.payload, accessProfile:false, ifedit:true
        }
    }
    case "FAKE_TWEET_DELETE_ACTION":{
        console.log(action.payload)
        return {
            ...state, profileTweet :(state.profileTweet.filter((tw)=>{return tw._id != action.payload }))
        };
    }
        default :return state
    }
}