// fetch all list items in the database
export const fetchAllListItems = () => {
    return $.ajax({
        url: '/api/lists',
        method: 'GET'
    })
}

// fetch one list item (although not sure if I need this one)
export const fetchListItem = (listId) => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: 'GET'
    })
}

// create a list item
export const createListItem = list => {
    return $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: {list}
    })
}

// destroy a list item
export const deleteListItem = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: 'DELETE'
    })
}