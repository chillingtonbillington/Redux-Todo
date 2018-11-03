export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_BOOL = 'UPDATE_BOOL';

export const updateToDoTask = task =>{
    return {type: UPDATE_TODO, payload: {todo : task}};
};

export const updateBooleanValue = value =>{
    return {type : UPDATE_BOOL, payload: {completed : value}}
}