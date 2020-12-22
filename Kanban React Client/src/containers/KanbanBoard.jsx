import React, {useState, useEffect} from 'react';
import Board from '../components/Board/Board';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import BoardModals from './Modals/BoardModals';
import {ModalType} from '../constants/CustomEnums';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/board';

function KanbanBoard(props) {

    useEffect(() => {
        props.getBoards();
    }, [props.getBoards]); 

    // Tabs
    const [key, setKey] = useState(props.boards[0].id);

    function selectTab(newKey, event) {
        if (newKey === "-1") {
            updateBoardModal(true, ModalType.CREATE, 0); // Open form modal to add board
        }
        setKey(newKey);
    }

    const boardTabs = props.boards.map(board => {
        return (
            <Tab key={board.id} eventKey={board.id} title={board.name}>
                <Board key={board.id} board={board} updateModal={updateBoardModal}/>
            </Tab>
        )
    })

    // Board Modal
    const [boardModal, setBoardModal] = useState({
        isOpen: false, 
        type: ModalType.CREATE,
        selectedId: 0
    });

    function updateBoardModal(isOpen, type, id) {
        setBoardModal({
            isOpen: isOpen,
            type: type,
            selectedId: id
        });
    }

    const boardOperations = {
        get: props.getBoard,
        create: props.createBoard,
        update: props.updateBoard,
        delete: props.deleteBoard
    }

    return (
        <div className="KanbanBoard">
            <Tabs
                id="controlled-tab-example"
                activekey={key}
                onSelect={selectTab}
            >
                {props.boards.length === 1? null: boardTabs}
                <Tab eventKey="-1" title="+"/>
            </Tabs>
            <BoardModals
                modal={boardModal}
                updateModal={updateBoardModal}
                board={props.board}
                boardOperations={boardOperations}
                onHide={() => updateBoardModal(false, ModalType.CREATE, 0)}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        boards: state.boards,
        board: state.selectedBoard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBoards: () => dispatch(actionCreators.getBoards()),
        getBoard: (id) => dispatch(actionCreators.getBoard(id)),
        updateBoard: (board) => dispatch(actionCreators.updateBoard(board)),
        createBoard: (board) => dispatch(actionCreators.createBoard(board)),
        deleteBoard: (id) => dispatch(actionCreators.deleteBoard(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);