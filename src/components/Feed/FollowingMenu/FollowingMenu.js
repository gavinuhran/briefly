import React from 'react';
import './FollowingMenu.css'

function FollowingMenu() {
  return (
    <div className="following-menu">
      <h1 class="following-header">Following</h1>
      <ul class="following-list">
        <li class="following-item">
          <div class="following-item-content">
            <div class="following-item-icon"></div>
            <p class="following-item-text">@PeteSampson_</p>
          </div>
          <div class="following-item-select-icon"></div>
        </li>
        <li class="following-item">
          <div class="following-item-content">
            <div class="following-item-icon"></div>
            <p class="following-item-text">@timprister</p>
          </div>
          <div class="following-item-select-icon"></div>
        </li>
        <li class="following-item">
          <div class="following-item-content">
            <div class="following-item-icon"></div>
            <p class="following-item-text">@timomalleyND</p>
          </div>
          <div class="following-item-select-icon"></div>
        </li>
        <li class="following-item">
          <div class="following-item-content">
            <div class="following-item-icon"></div>
            <p class="following-item-text">@NDJackNolan</p>
          </div>
          <div class="following-item-select-icon"></div>
        </li>
        <li class="following-item">
          <div class="following-item-content">
            <div class="add-following-item-icon"></div>
            <p class="add-following-item-text">Add more</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FollowingMenu;
