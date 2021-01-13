import React, {useState, useEffect} from 'react';
import Board from '../components/Board/Board';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import BoardModals from './Modals/BoardModals';
import {ModalType} from '../constants/CustomEnums';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';
import * as ActionType from '../store/actions/actionTypes';

import './containers.css'

function KanbanBoard(props) {

    useEffect(() => {
        props.getBoards();
        // eslint-disable-next-line
    }, [props.getBoards]); 

    useEffect(() => {
        props.getCategories(props.activeBoardId);
        // eslint-disable-next-line
    }, [props.activeBoardId, props.getCategories]);

    useEffect(() => {
        props.getColors();
        // eslint-disable-next-line
    }, []);

    // Tabs
    const [key, setKey] = useState(props.boards[0].id); 

    function selectTab(newKey) {
        if (newKey === "-1") {
            updateBoardModal(true, ModalType.CREATE, 0); // Open form modal to add board
        }
        setKey(newKey);
        props.setActiveBoardId(newKey);
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
                className="Tabs"
            >
                {props.boards.length <= 1? null: boardTabs}
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
        boards: state.boardReducer.boards,
        board: state.boardReducer.selectedBoard,
        activeBoardId: state.boardReducer.activeBoardId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBoards: () => dispatch(actionCreators.getBoards()),
        getBoard: (id) => dispatch(actionCreators.getBoard(id)),
        setActiveBoardId: (id) => dispatch({type: ActionType.SET_ACTIVE_BOARD_ID, id: id}),
        updateBoard: (board) => dispatch(actionCreators.updateBoard(board)),
        createBoard: (board) => dispatch(actionCreators.createBoard(board)),
        deleteBoard: (id) => dispatch(actionCreators.deleteBoard(id)),
        getCategories: (boardId) => dispatch(actionCreators.getCategories(boardId)),
        getColors: () => dispatch(actionCreators.getColors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);