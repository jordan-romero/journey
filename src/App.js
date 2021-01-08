import React from 'react'

import Actor from './components'
import './styles.css';

function App() {
  const data = {
    h: 32,
    w: 32
  }
  return (
    <div className="zone-container">
      <Actor sprite={`/sprites/skins/m1.png`} data={data} />
    </div>
  );
}

export default App;
