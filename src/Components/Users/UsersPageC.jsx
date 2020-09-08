import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from "../../assets/img/user.png"

 
class UsersPage extends React.Component {

   
    componentDidMount() {
        if (this.props.Users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
                     }) 
    }
}
    render(){
    return <div>
  
{ 

    this.props.Users.map(u =>
    
    <div className={s.label} key={u.id}>
        <div className={s.avaFollow}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto }
            alt="" className={s.avatar}/>
            <div>{u.Followed 
            ? <button onClick={() => { this.props.unFollow(u.id)}}>Unfollow</button> 
            : <button onClick={() => { this.props.follow(u.id)}} >Follow</button>} 
    
            </div>
        </div>
        <div className={s.card}>   
            <div className={s.cardName}>
                <h4>{u.name}</h4>
                <p>{u.status}</p>   
            </div>
            <div className={s.cardLocation}>
                <div> <span>u.location.Country</span></div>
                <div> <span>u.location.City</span></div>
            </div>
        </div>
    </div>  
    )}
 <button onClick={this.getUsers}>Get users </button>
</div>
}
}


export default UsersPage