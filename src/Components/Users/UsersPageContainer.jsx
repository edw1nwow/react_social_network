import UsersPage from './UsersPage'
import { connect } from 'react-redux'
import {FollowAC, unFollowAC  } from '../Redux/Users-reducer'

let mapStateToProps = (state) => {
  return {
   Users: state.users.usersData
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(FollowAC(usersId))
    },
    unFollow: (usersId) => {
      dispatch(unFollowAC(usersId))
    } 
    
  }
};

const Users = connect(mapStateToProps, mapDispatchToProps) (UsersPage);

export default Users;