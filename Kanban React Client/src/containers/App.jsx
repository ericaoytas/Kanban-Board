import React from 'react';
import Header from '../templates/Header';
import KanbanBoard from './KanbanBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test from '../utils/Test';

function App() {
  

  return (
    <div className="app">
      <Header />
      <KanbanBoard />
      {/* <Test /> */}
    </div>
  );
}

export default App;
