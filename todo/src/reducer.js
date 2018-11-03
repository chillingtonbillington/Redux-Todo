import {UPDATE_TODO, UPDATE_BOOL} from './action';

const initialState = {todos : [{todo : '', completed : false,}]}

export default (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_TODO:
            return {...state, ...action.payload};
        case UPDATE_BOOL:
            return {...state, ...action.payload};    
        default:
            return state;
    };
}