import React, {useState, useEffect, useCallback} from 'react';
import Board from './Board/Board';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import * as api from '../../services/KanbanService';
import * as log from '../../services/ErrorHandler';

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
    }, [fetchBoards, setBoardsHandler]); 


    // Tabs
    const [key, setKey] = useState(boards[0].id);



    function selectTab(newKey, event) {
        // if (newKey === "-1") addBoard(untitledBoard);
        setKey(newKey);
    }

    const boardTabs = boards.map(board => {
        return (
            <Tab eventKey={board.id} title={board.name}>
                <Board board={board}/>
            </Tab>
        )
    })

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

            {/* <Board board={boards[1]} /> */}
        </div>
    )
}

export default KanbanBoard;