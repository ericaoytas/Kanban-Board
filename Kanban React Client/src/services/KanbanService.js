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

function createBoard(board) {
    return axios.post(BOARD_REST_API_URL, board);
}

function updateBoard(board) {
    return axios.put(BOARD_REST_API_URL, board);
}

function deleteBoard(id) {
    return axios.delete(BOARD_REST_API_URL + `/${id}`);
}

// CATEGORY
function getCategoriesByBoardId(boardId) {
    return axios.get(CATEGORY_REST_API_URL, {
        params: {
            board: boardId
        }
    });
}

function getCategoryById(id) {
    return axios.get(CATEGORY_REST_API_URL + `/${id}`);
}

function createCategory(category, boardId) {
    return axios.post(CATEGORY_REST_API_URL, category, {
        params: {
            board: boardId
        }
    })
}

function updateCategory(category, boardId) {
    return axios.put(CATEGORY_REST_API_URL, category, {
        params: {
            board: boardId
        }
    })
}

function deleteCategory(id) {
    return axios.delete(CATEGORY_REST_API_URL + `/${id}`);
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

function createNote(note, category, color) {
    return axios.post(NOTE_REST_API_URL, note, {
        params: {
            category: category,
            color: color
        }
    })
}

function updateNote(note, category, color) {
    return axios.put(NOTE_REST_API_URL, note, {
        params: {
            category: category,
            color: color
        }
    })
}

function deleteNote(id) {
    return axios.delete(NOTE_REST_API_URL + `/${id}`);
}

export {
    getBoards, 
    getBoardById, 
    createBoard,
    updateBoard,
    deleteBoard,

    getCategoriesByBoardId, 
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    
    getNotesByCategoryId, 
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};