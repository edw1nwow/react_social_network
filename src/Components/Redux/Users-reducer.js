const Follow = 'follow'
const UnFollow = 'Unfollow'
const SET_USERS = 'SET_USERS'

let initialState = {
  usersData:[]
  // usersData: [
  //    { id: 1, Followed: true , Name: "Stas", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
  //   { id: 2, Followed: true , Name: "Anatoliy", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
  //    { id: 3, Followed: false , Name: "Lera",Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
  //    { id: 4, Followed: true , Name: "Alex", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
  //   { id: 5, Followed: false , Name: "Gena", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
  //  ],
}

const usersReducer = (state = initialState, action) => {
 
  switch(action.type) {
      case Follow:
        return {
          ...state, 
          usersData: state.usersData.map( u =>{
          if( u.id === action.usersId){
            return {...u, Followed: true }
          }  
            return u;
         })
      };
      
      case UnFollow:
        
        return{
        ...state, 
        usersData: state.usersData.map( u =>{
        if( u.id === action.usersId){
          return {...u, Followed: false }
        }
          return u;
       })
    };
      case SET_USERS:
        {debugger;
          return{ ...state, usersData: [...state.usersData, ...action.usersData]
          }
        } 
      default:
          return state
  }
}

export const FollowAC = (usersId) => ({ type: Follow, usersId });
export const unFollowAC = (usersId) => ({ type: UnFollow, usersId });
export const setUsersAC = (usersData) => ({ type: SET_USERS, usersData });






export default usersReducer;
