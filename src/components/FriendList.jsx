
const Card=({avatar, name, status})=>{
    const color= (status)=>{
        if (status) { return "hsl(123, 100%, 50%)"}
        return "red"
     }
return <li className="friends-list-item">
<img className="friends-list-item-image" src={avatar} alt="Avatar" width="48" />
<p className="friends-list-item-name">{name}</p>
<p className="friends-list-item-status"
style={{color: color(status)}}>{status? "online" : "offline"}</p>
</li>
}

export const FriendList =({friends})=>{
return      (<ul className="friends-list">
               {friends.map((friend)=>{
                return (<Card
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    status={friend.isOnline}
                    />)

               })} 
            
            </ul>)
}
    

