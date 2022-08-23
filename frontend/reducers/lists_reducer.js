import {RECEIVE_ALL_LISTS, RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM} from '../actions/list_actions'

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_LISTS:
            return action.lists
        case RECEIVE_LIST_ITEM:
            nextState[action.list.id] = action.list;
            return nextState
        case REMOVE_LIST_ITEM:
            delete nextState[action.listId]
            return nextState;
        default:
            return state;
    }
};

export default listsReducer;