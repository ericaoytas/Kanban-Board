import React, {useState, useEffect} from 'react';
import Board from './Board/Board';

import * as api from '../../services/KanbanService';
import * as log from '../../services/ErrorHandler';

function KanbanBoard() {
    const boardId = 2;

    // States
    const [currentBoard, setCurrentBoard] = useState({});


    // Effect
    useEffect(() => {

        // GET board
        api.getBoardById(boardId).then((response) => {
            setCurrentBoard(response.data);
        }).catch(error => log.logError(error)); 

    }, [currentBoard]);

    return (
        <div className="KanbanBoard">

            <Board 
                board={currentBoard} 
                // showModal={updateModalState}
                />

        </div>
    )
}

export default KanbanBoard;