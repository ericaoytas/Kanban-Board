import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import CreateNewNote from './CreateNewNote';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [modalShow, setModalShow] = useState(false); 

  return (
    <div className="app">
      <Header />
      <button
        onClick={() => setModalShow(true)}
      >Click here</button>
      <CreateNewNote
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Board />
    </div>
  );
}

export default App;
