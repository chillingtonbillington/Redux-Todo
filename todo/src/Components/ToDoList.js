import React from 'react';
import {connect} from 'react-redux';
import {updateBooleanValue} from '../action';



const ToDoList = (props) =>{
  
    return(
        <div>
            <h1>To do list:</h1>
                <div onClick = {() =>{updateBooleanValue()}}>
                    {props.todos.map(todo =>{
                        return(
                            <div>{todo.todo}</div>
                        )
                    })}
                </div>

        </div>
    )
}
const mapStateToProps = () =>{
    return {};
}

export default connect(mapStateToProps)(ToDoList);