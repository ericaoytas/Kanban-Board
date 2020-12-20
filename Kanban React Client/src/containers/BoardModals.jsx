import React, { useState, useEffect, useCallback } from 'react';

import EditBoardModal from '../components/Modal/BoardModal/BoardFormModal';

import * as api from '../services/KanbanService';
import * as log from '../utils/ErrorHandler';
import { ModalType } from '../constants/CustomEnums';
function BoardModals(props) {

    const { fetchBoards, modal, onHide, ...rest } = props;
    const blankBoard = { id: 0, name: "" }

    // State: board
    const [board, setBoard] = useState(blankBoard);

    // Effect: Get board
    useEffect(() => {

        if (modal.selectedId > 0 && modal.isShow) {
            getBoard(modal.selectedId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => fetchBoards();
    }, [fetchBoards, modal.isShow, modal.selectedId]);

    // Get Board
    async function getBoard(id) {
        const response = await api.getBoardById(id);
        const data = await response.data;
        setBoard(data);
    }

    // Add Board
    function addBoard(newBoard) {
        api.createBoard(newBoard).then(response => {
            setBoard(response.data)
        }).catch(error => log.logError(error));
    }

    // Delete Board
    function deleteBoard(id) {
        api.deleteBoard(id).catch(error => log.logError(error));
        window.location.reload();
    }

    // Update Board
    async function updateBoard(board) {
        const response = await api.updateBoard(board);
        const data = await response.data;
        fetchBoards();
        onHide();
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
                board.id === 0 && modal.type !== ModalType.CREATE ?
                    null
                    :
                    <EditBoardModal
                        board={board}
                        operations={operations}
                        modal={modal}
                        onHide={onHide}
                        {...rest} />
            }

        </div>
    )
}

export default BoardModals;