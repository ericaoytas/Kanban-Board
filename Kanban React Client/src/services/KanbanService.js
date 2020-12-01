import axios from 'axios'

const SERVER_URL = 'http://localhost:8080/';
const BOARD_REST_API_URL = SERVER_URL + 'api/boards';
const CATEGORY_REST_API_URL = SERVER_URL + 'api/categories';
const NOTE_REST_API_URL = SERVER_URL + 'api/notes';


// BOARD

function getBoards() {
    return axios.get(BOARD_REST_API_URL);
}

function getBoardById(id) {
    return axios.get(BOARD_REST_API_URL + `/${id}`);
}

// CATEGORY
function getCategoriesByBoardId(id) {
    return axios.get(CATEGORY_REST_API_URL, {
        params: {
            board: id
        }
    });
}

// NOTE
function getNotesByCategoryId(id) {
    return axios.get(NOTE_REST_API_URL, {
        params: {
            category: id
        }
    })
}

function getNoteById(id) {
    return axios.get(NOTE_REST_API_URL + `/${id}`);
}




export {getBoards, getBoardById, getCategoriesByBoardId, getNotesByCategoryId, getNoteById};