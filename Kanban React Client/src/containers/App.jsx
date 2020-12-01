import React from 'react';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import KanbanBoard from '../components/KanbanBoard/KanbanBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import noteData from '../noteData.jsx';


function App() {
  

  return (
    <div className="app">
      <Header />
      <KanbanBoard />
    </div>
  );
}

export default App;
