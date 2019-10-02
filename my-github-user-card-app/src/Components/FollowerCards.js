import React from 'react';
import FollowerCard from './FollowerCard';

function FollowerCards({ myFollowers }) {
    return (
        <div>
            {myFollowers.map(follower =>
                <FollowerCard follower={follower} />
            )}
        </div>
    )
}

export default FollowerCards;