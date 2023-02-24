import React from 'react';
import './RefreshButton.css'

function refresh() {
  alert('You refreshed me!');
}

function RefreshButton() {
  return (
    <button onClick={refresh} type="button" >
        <h6 class="refresh-text">Refresh</h6>
        <div className="refresh-icon"></div>
    </button>
  );
}

export default RefreshButton;
