import {ADD_TODO, UPDATE_BOOL, DELETE_COMPLETE} from './action';

const initialState = {
    todos : []
}

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
            const id = Date.now();
            return Object.assign({}, state,{
                todos : [
                    ...state.todos,
                    {todo : action.payload,
                    id : id,
                    completed : false,
                    }

                ]
            } )
        case UPDATE_BOOL:
            const updatedArray = state.todos.map(item =>{
                if(item.id === action.payload){
                    return{todo: item.todo, id: item.id, completed: !item.completed}
                }else return item;
            })
            return Object.assign({}, state, {todos : updatedArray});
        case DELETE_COMPLETE:
            const deleteArray = state.todos.filter(item =>{
                return item.completed === false
            })
            return Object.assign({}, state, {todos: deleteArray})      
        default:
            return state;
    };
}