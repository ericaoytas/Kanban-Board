import React, {useState, useEffect, useCallback} from 'react';
import Board from './Board/Board';

import * as api from '../../services/KanbanService';
import * as log from '../../services/ErrorHandler';

function KanbanBoard() {


    // States
    const [currentBoard, setCurrentBoard] = useState({});
    const [boards, setBoards] = useState([{}]);

    const setBoardsHandler = useCallback(boards => {
        setBoards(boards);
      }, []);

    // Effect
    useEffect(() => {

        // GET one board by id
        // api.getBoardById(boardId).then((response) => {
        //     setCurrentBoard(response.data);
        // }).catch(error => log.logError(error)); 

        // GET all boards
        api.getBoards().then((response) => {
            setBoardsHandler(response.data);
        }).catch(error => log.logError(error)); 


        console.log("useEffect() in KanbanBoard");
    }, [setBoardsHandler]); 




    function consoleLog() {
        console.log(boards[1])
    }

    return (
        <div className="KanbanBoard">
            <button onClick={consoleLog}>Test</button>
            <Board 
                board={boards[1]} 
                // categories={categories}
                // showModal={updateModalState}
                />

        </div>
    )
}

export default KanbanBoard;