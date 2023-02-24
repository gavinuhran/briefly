import React from 'react';
import './FollowingMenu.css'

function FollowingMenu() {
  return (
    <div className="following-menu">
      <h1 class="following-header">Following</h1>
      <ul class="following-list">
        <li class="following-item">
          <div class="following-item-icon"></div>
          <p class="following-item-text">@PeteSampson_</p>
        </li>
        <li class="following-item">
          <div class="following-item-icon"></div>
          <p class="following-item-text">@timprister</p>
        </li>
        <li class="following-item">
          <div class="following-item-icon"></div>
          <p class="following-item-text">@timomalleyND</p>
        </li>
        <li class="following-item">
          <div class="following-item-icon"></div>
          <p class="following-item-text">@NDJackNolan</p>
        </li>
      </ul>
    </div>
  );
}

export default FollowingMenu;
