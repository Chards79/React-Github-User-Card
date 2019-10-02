import React from 'react';

function FollowerCard(props) {
    console.log(props);
    const { follower: { login, avatar_url, id } } = props
    return (
        <div className="follower-cards">
            <h1>{login}</h1>
            <img width="50%" src={avatar_url} alt="Profile Pic" key={id} />
        </div>
    )
}

export default FollowerCard;