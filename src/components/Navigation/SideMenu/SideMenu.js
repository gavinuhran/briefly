import React from 'react';
import './SideMenu.css'

function SideMenu() {
  return (
    <div className="side-menu">
      <h1 class="briefings-header">Briefings</h1>
      <ul class="briefings-list">
        <li class="briefings-item-selected">
          <h6 class="briefings-item-text-selected">Notre Dame Athletics</h6>
        </li>
        <li class="briefings-item">
          <h6 class="briefings-item-text">Space Exploration</h6>
        </li>
        <li class="briefings-item">
          <h6 class="briefings-item-text">Tech News</h6>
        </li>
        <li class="add-briefings-item">
          <h6 class="add-briefings-item-text">Add new briefing</h6>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
