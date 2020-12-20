import React from 'react';
import Header from '../templates/Header';
import KanbanBoard from './KanbanBoard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <div className="app">
      <Header />
      <KanbanBoard />
    </div>
  );
}

export default App;
