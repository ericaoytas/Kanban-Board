import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';

import 'bootstrap/dist/css/bootstrap.css';
import noteData from '../noteData.jsx';

function App() {
  

  return (
    <div className="app">
      <Header />
      <Board noteData={noteData} />
    </div>
  );
}

export default App;
