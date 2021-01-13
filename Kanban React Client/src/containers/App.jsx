import React from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import KanbanBoard from './KanbanBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test from '../utils/Test';

import './containers.css';

function App() {
  

  return (
    <div className="App">
      <Header />
      <KanbanBoard />
      <Footer />
    </div>
  );
}

export default App;
