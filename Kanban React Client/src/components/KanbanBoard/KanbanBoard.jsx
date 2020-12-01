import React, {useState, useEffect} from 'react';
import Board from './Board/Board';
import NoteModals from '../modals/NoteModals/NoteModals'
import * as api from '../../services/KanbanService';
function KanbanBoard() {
    const boardId = 2;

    // States
    const [currentBoard, setCurrentBoard] = useState({});
    const [modalState, setModalState] = useState({
        isShow: false, 
        type:"ViewNote", 
        selectedId:1
    });

    // TEST
    const [temp, setTemp] = useState({});

    // Set State
    function updateModalState(isShow, type, selectedId) {
        setModalState({
            isShow: isShow,
            type: type,
            selectedId: selectedId
        });
    }


    // Effect
    useEffect(() => {

        // GET board
        api.getBoardById(boardId).then((response) => {
            setCurrentBoard(response.data);
        }) .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });


    });

    // TEST function
    function consoleLog() {
        api.getNoteById(2).then((response) => {
            setTemp(response.data);
        })
        console.log(temp);
    }

    return (
        <div className="KanbanBoard">
            <button onClick={consoleLog}>TEST</button>
            <Board 
                board={currentBoard} 
                showModal={updateModalState}
                />
            <NoteModals 
                modal={modalState}
                showModal={updateModalState}
                onHide={() => updateModalState(false, modalState.type, modalState.selectedId)}
            />
        </div>
    )
}

export default KanbanBoard;