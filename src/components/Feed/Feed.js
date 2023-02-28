import React from 'react';
import './Feed.css'
import FeedHeader from './FeedHeader';
import FollowingMenu from './FollowingMenu';

function Feed() {
  return (
    <div className="feed">
        <FeedHeader />
        <FollowingMenu />
    </div>
  );
}

export default Feed;
