import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Briefly!</h1>
      <p>Check out <Link to="/home">your feed</Link>.</p>
    </div>
  );
}

export default HomePage;
