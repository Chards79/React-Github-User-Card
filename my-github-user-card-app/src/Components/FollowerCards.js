import React from 'react';

function FollowerCards(props) {
    return (
        <div className="follower-cards">
            <h1>{props.myFollowers.login}</h1>
            <img width="50%" src={props.myFollowers.avatar_url} alt="Profile Pic" key={props.myFollowers.id} />
            <div className="card-info">
                <p>{props.myFollowers.bio}</p>
                <p>{props.myFollowers.location}</p>
                <p>{`Followers: ${props.myFollowers.followers}`}</p>
            </div>
        </div>
    )
}

export default FollowerCards;