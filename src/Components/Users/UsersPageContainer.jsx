import UsersPage from './UsersPageC'
import { connect } from 'react-redux'
import {FollowAC, unFollowAC, setUsersAC  } from '../Redux/Users-reducer'


let mapStateToProps = (state) => {
   return {
   Users: state.users.usersData
  }
}




let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(FollowAC(usersId))
    },
    unFollow: (usersId) => {
      dispatch(unFollowAC(usersId))
    } ,
    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData))
    } 
  }
};




const users = connect(mapStateToProps, mapDispatchToProps) (UsersPage);

export default users

