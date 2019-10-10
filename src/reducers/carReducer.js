 // comment just because i hate my code starting at line 1 and want a reason to give it space to breathe

import { BUY_ITEM , REMOVE_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};


export const carReducer = ( state = initialState, action ) => {
    // console.log("STATE: ",state)
    console.log('ACTION: ', action)
    switch(action.type){
        case BUY_ITEM:
            console.log('ADD FEATURE PAYLOAD: ', action.payload)
            return {
                ...state,
                // additionalPrice: state.additionalPrice + action.payload.price,
                car: {...state.car, features: [...state.car.features, action.payload ], price: state.car.price + action.payload.price},
                store: state.store.filter(({id}) => ![...state.car.features.map(({id}) => id), action.payload.id].includes(id))
                // filter through store array, create a new array populated with current id of all features including action id from payload
                // make sure the id we are filtering on does not match the id inside of the array we created
            };
        case REMOVE_FEATURE:
            console.log('REMOVE FEATURE PAYLOAD: ', action.payload)
            return {
                ...state, 
                // additionalPrice: state.additionalPrice - action.payload.price,
                car: {...state.car, features: state.car.features.filter(({id}) => ![...state.store.map(({id}) => id), action.payload.id].includes(id)), price: state.car.price - action.payload.price},
                store: [...state.store, action.payload]
            };
        default: 
        return state
    }
}