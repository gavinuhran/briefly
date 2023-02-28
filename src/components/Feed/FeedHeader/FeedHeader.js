import React from 'react';
import './FeedHeader.css'
import RefreshButton from './RefreshButton';

function FeedHeader() {
  return (
    <div className="feed-header">
      <h1 class="feed-heading">Notre Dame Athletics</h1>
      <RefreshButton />
    </div>
  );
}

export default FeedHeader;
