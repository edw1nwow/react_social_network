import React from 'react';
import s from './Users.module.css'



const UsersPage = (props) => {
    debugger;

  
// props.Users([
//     { id: 1, Followed: true , Name: "Stas", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
//     { id: 2, Followed: true , Name: "Lera", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
//     { id: 3, Followed: false , Name: "Sergio",Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
//     { id: 4, Followed: true , Name: "Alex", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
//     { id: 5, Followed: false , Name: "Gena", Status:'hello, im here', location:{Country: 'Ukraine', City: 'kiev' }},
// ]
// )
return(
   
    
    <div>
{ 
        props.Users.map(u =>
        
        <div className={s.label} key={u.id}>
            <div className={s.avaFollow}>
                <img src="https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg"
                alt="" className={s.avatar}/>
                <div>{u.Followed 
                ? <button onClick={() => { props.unFollow(u.id)}}>Unfollow</button> 
                : <button onClick={() => { props.follow(u.id)}} >Follow</button>} 
        
                </div>
            </div>
            <div className={s.card}>   
                <div className={s.cardName}>
                    <h4>{u.Name}</h4>
                    <p>{u.Status}</p>   
                </div>
                <div className={s.cardLocation}>
                    <div> <span>{u.location.Country}</span></div>
                    <div> <span>{u.location.City}</span></div>
                </div>
            </div>
        </div>
        
        
        )}

    </div>

    )

} 

export default UsersPage