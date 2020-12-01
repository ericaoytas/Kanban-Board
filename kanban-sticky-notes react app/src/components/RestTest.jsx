import React, {useState, useEffect} from 'react';
import * as api from '../services/KanbanService';

function RestTest() {
    const [boards, setBoards] = useState([{}]);
    const [board, setBoard] = useState({});

    useEffect(() => {
        api.getBoards().then((response) => {
            setBoards(response.data);
        });
        api.getBoardById(1).then((response) => {
            setBoard(response.data);
        })
    });

    function temp() {
        console.log(board);
    }
    return (
    <div>
        <h1>Boards</h1>
        <button onClick={temp}>Click</button>
        <table>
            <thead>
                <tr>
                    <th>Board ID</th>
                    <th>Board Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{board.id}</td>
                    <td>{board.name}</td>
                </tr>
                
                
                {/* {boards.map(board => {
                    return (
                        <tr>
                            <td>{board.id}</td>
                            <td>{board.name}</td>
                        </tr>
                    )
                })} */}
            </tbody>
        </table>
    </div>
    )
}

export default RestTest;