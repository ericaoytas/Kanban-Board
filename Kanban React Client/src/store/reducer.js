
import * as ActionType from './actions';
import {ComponentType, ModalType} from '../constants/CustomEnums';

const initialState = {
    isOpen: false,
    modalType: ModalType.NONE,
    componentType: ComponentType.NONE,
    selectedId: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.CLOSE_MODAL: 
            return {
                ...initialState
            }
        case ActionType.CREATE_NOTE: 
            return {
                isOpen: true,
                modalType: ModalType.CREATE,
                componentType: ComponentType.NOTE,
                selectedId: 0
            }
        case ActionType.VIEW_NOTE: 
            return {
                isOpen: true,
                modalType: ModalType.READ,
                componentType: ComponentType.NOTE,
                selectedId: action.selectedId
            }
        case ActionType.UPDATE_NOTE: 
            return {
                ...state,
                modalType: ModalType.UPDATE
            }
        case ActionType.CREATE_BOARD: 
            return {
                isOpen: true,
                modalType: ModalType.CREATE,
                componentType: ComponentType.BOARD,
                selectedId: 0
            }
        case ActionType.UPDATE_BOARD: 
            return {
                isOpen: true,
                modalType: ModalType.UPDATE,
                componentType: ComponentType.BOARD,
                selectedId: action.selectedId
            }
        case ActionType.CREATE_CATEGORY: 
            return {
                isOpen: true,
                modalType: ModalType.CREATE,
                componentType: ComponentType.CATEGORY,
                selectedId: 0
            }
        case ActionType.UPDATE_CATEGORY: 
            return {
                isOpen: true,
                modalType: ModalType.CREATE,
                componentType: ComponentType.CATEGORY,
                selectedId: action.selectedId
            }
        default:
            return state;
    }
}

export default reducer;