import React, {useState, useEffect} from 'react';

import EditBoardModal from './EditBoardModal';

import * as api from '../../../services/KanbanService';
import * as log from '../../../services/ErrorHandler';

function BoardModals(props) {

    const {fetchBoards, modal, ...rest} = props;
    const blankBoard = {id: 0, name: ""}

    // State: board
    const [board, setBoard] = useState(blankBoard);

    // Effect: Get board
    useEffect(() => {
        if (modal.selectedId > 0 && modal.isShow) {
            getBoard(modal.selectedId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchBoards, modal.isShow, modal.selectedId]);

    // Get Board
    async function getBoard(id) {
        const response = await api.getBoardById(id);
        const data = await response.data;
        setBoard(data);
    }

    // Add Board
    function addBoard(newBoard) {
        api.createBoard(newBoard).catch(error => log.logError(error));
    }

    // Delete Board
    function deleteBoard(id) {
        console.log(id);
        api.deleteBoard(id).catch(error => log.logError(error));
        window.location.reload();
    }

    // Update Board
    function updateBoard(board) {
        api.updateBoard(board).catch(error => log.logError(error));
        fetchBoards();
    }

    // Crud operations
    const operations = {
        create: addBoard,
        delete: deleteBoard,
        update: updateBoard
    };

    return (
        <div>
            {
                board.id === 0? 
                null
                :
                <EditBoardModal 
                board={board}
                operations={operations}
                modal={modal}
                {...rest} />
            }

        </div>
    )
}

export default BoardModals;