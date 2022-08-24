import { fetchAllListItems, fetchListItem, createListItem, deleteListItem } from "../util/list_util";

// export constants
export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

// regular action creators
const receiveLists = lists => {
    return {
        type: RECEIVE_ALL_LISTS,
        lists
    }
};

const receiveList = list => {
    return {
        type: RECEIVE_LIST_ITEM,
        list
    }
}

const removeList = listId => {
    return {
        type: REMOVE_LIST_ITEM,
        listId
    }
}

// thunks
export const getAllLists = lists => dispatch => fetchAllListItems()
    .then(lists => dispatch(receiveLists(lists)))

export const getListItem = listId => dispatch => fetchListItem(listId)
    .then(list => dispatch(receiveList(list)))

export const makeListItem = list => dispatch => createListItem(list)
    .then(list => dispatch(receiveList(list)))

export const removeListItem = listId => dispatch => deleteListItem(listId)
    .then(() => dispatch(removeList(listId)))