export const ADD_TODO = 'ADD_TODO';
export const UPDATE_BOOL = 'UPDATE_BOOL';
export const DELETE_COMPLETE = 'DELETE_COMPLETE';

export const addToDo = todo =>{
    return {type: ADD_TODO, payload: todo};
};

export const updateBooleanValue = id =>{
    return {type : UPDATE_BOOL, payload: id}
}

export const deleteCompletedTask = id =>{
    return {type : DELETE_COMPLETE, payload: id}
}