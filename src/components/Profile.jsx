export const Profile =(props)=>{
return     <div className="user-profile-box">
                <div className="user-profile">
                    <img
                    className="user-profile-image"
                    src={props.image}
                    alt="User avatar"
                    />
                    <p className="user-profile-name">{props.name}</p>
                    <p className="user-profile-tag">@{props.tag}</p>
                    <p className="user-profile-location">{props.location}</p>
                </div>

                <ul className="user-profile-utilitis-list">
                    <li className="user-profile-utilitis-item">
                    <span className="user-profile-utilitis-title">Followers</span>
                    <span className="user-profile-utilitis-value">{props.stats.followers}</span>
                    </li>
                    <li className="user-profile-utilitis-item">
                    <span className="user-profile-utilitis-title">Views</span>
                    <span className="user-profile-utilitis-value">{props.stats.views}</span>
                    </li>
                    <li className="user-profile-utilitis-item">
                    <span className="user-profile-utilitis-title">Likes</span>
                    <span className="user-profile-utilitis-value">{props.stats.likes}</span>
                    </li>
                </ul>
            </div>


}