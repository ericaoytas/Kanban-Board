import React, { useState, useEffect, useCallback } from 'react';

import BoardFormModal from '../../components/Modal/BoardModal/BoardFormModal';

import * as api from '../../services/KanbanService';
import * as log from '../../utils/ErrorHandler';
import { ModalType } from '../../constants/CustomEnums';
function BoardModals(props) {

    const { boardOperations, board, modal, onHide, ...rest } = props;

    // Get Board By Id
    useEffect(() => {
        if (modal.selectedId > 0 && modal.isOpen) {
            boardOperations.get(modal.selectedId);
        }
    }, [modal.isOpen, modal.selectedId]);

    function addBoard(newBoard) {
        boardOperations.create(newBoard);
        onHide();
    }

    function deleteBoard(id) {
        boardOperations.delete(id);
        window.location.reload();
    }

    function updateBoard(board) {
        boardOperations.update(board);
        onHide();
    }

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
                    <BoardFormModal
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