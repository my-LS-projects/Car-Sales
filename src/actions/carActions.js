// action suite - 3 things
// 1. action creators - function that... creates actions (return action objects out of it)
// 2. action types - variables containing type strings to save us from spelling errors
// 3. actions - objects that describe to the reducer what event has occured and how it should update state
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log('gtfo: ', item)
    return { type: REMOVE_FEATURE, payload: item }
};


export const BUY_ITEM = 'BUY_ITEM'
export const buyItem = item => {
    // dipsatch an action here to add an item
    console.log('BUY ITEM: ', item)
    return { type: BUY_ITEM, payload: item }
};