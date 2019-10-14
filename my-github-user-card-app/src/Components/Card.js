import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h1>{props.myGithub.name}</h1>
            <img width="50%" src={props.myGithub.avatar_url} alt="Profile Pic" key={props.myGithub.id} />
            <div className="card-info">
                <p>{props.myGithub.bio}</p>
                <p>{props.myGithub.location}</p>
                <p>{`Followers: ${props.myGithub.followers}`}</p>
            </div>
        </div>
    )
}

export default Card;