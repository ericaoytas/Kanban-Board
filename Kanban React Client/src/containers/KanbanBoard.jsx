import React, {useState, useEffect, useCallback} from 'react';
import Board from '../components/Board/Board';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import BoardModals from './BoardModals';
import * as api from '../services/KanbanService';
import * as log from '../utils/ErrorHandler';
import {ModalType} from '../constants/CustomEnums';

function KanbanBoard() {

    const untitledBoard = {id: 0, name: "Untitled Board"};

    // Boards
    const [boards, setBoards] = useState([{}]);
    const setBoardsHandler = useCallback(boards => {
        setBoards(boards);
    }, []);

    const fetchBoards = useCallback(function() {
        // GET all boards
        api.getBoards().then((response) => {
            setBoardsHandler(response.data);
        }).catch(error => log.logError(error)); 
    }, [])

    // Effect
    useEffect(() => {
        fetchBoards();
    }, [setBoardsHandler]); 

    // Tabs
    const [key, setKey] = useState(boards[0].id);

    function selectTab(newKey, event) {
        if (newKey === "-1") {
            updateBoardModal(true, ModalType.CREATE, 0); // Open form modal to add board
        }
        setKey(newKey);
    }

    const boardTabs = boards.map(board => {
        return (
            <Tab eventKey={board.id} title={board.name}>
                <Board board={board} fetchBoards={fetchBoards} updateModal={updateBoardModal}/>
            </Tab>
        )
    })

    // Board Modal
    const [boardModal, setBoardModal] = useState({
        isShow: false, 
        type: ModalType.CREATE,
        selectedId: 0
    });

    function updateBoardModal(isShow, type, id) {
        setBoardModal({
            isShow: isShow,
            type: type,
            selectedId: id
        });
    }


    return (
        <div className="KanbanBoard">

            <Tabs
                id="controlled-tab-example"
                activekey={key}
                onSelect={selectTab}
            >
                {boardTabs}
                <Tab eventKey="-1" title="+"/>
            </Tabs>
            <BoardModals
                modal={boardModal}
                updateModal={updateBoardModal}
                onHide={() => updateBoardModal(false, ModalType.CREATE, 0)}
                fetchBoards={fetchBoards}
            />
        </div>
    )
}

export default KanbanBoard;