import React, {useEffect} from 'react';
import BoardFormModal from '../../components/Modal/BoardModal/BoardFormModal';
import { ModalType } from '../../constants/CustomEnums';
function BoardModals(props) {

    const blankBoard = { id: 0, name: "" };

    // Get Board By Id
    useEffect(() => {
        if (props.modal.selectedId > 0 && props.modal.isOpen) {
            props.boardOperations.get(props.modal.selectedId);
        }
        // eslint-disable-next-line
    }, [props.modal.isOpen, props.modal.selectedId, props.boardOperations.get]);

    function addBoard(newBoard) {
        props.boardOperations.create(newBoard);
        props.onHide();
    }

    function deleteBoard(id) {
        props.boardOperations.delete(id);
        window.location.reload();
    }

    function updateBoard(board) {
        props.boardOperations.update(board);
        props.onHide();
    }

    const operations = {
        create: addBoard,
        delete: deleteBoard,
        update: updateBoard
    };

    let selectedModal = null;

    switch (props.modal.type) {
        case ModalType.CREATE:
            selectedModal =
                <BoardFormModal
                    title="Create Board"
                    board={blankBoard}
                    operations={operations}
                    modal={props.modal}
                    onHide={props.onHide} />
            break;
        case ModalType.UPDATE:
        default:
            selectedModal =
                <BoardFormModal
                    title="Edit Board"
                    board={props.board}
                    operations={operations}
                    modal={props.modal}
                    onHide={props.onHide} />
            break;
    }

    return (
        <div>
             {selectedModal}
        </div>
    )
}

export default BoardModals;