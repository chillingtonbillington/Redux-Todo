import React from 'react';
import {connect} from 'react-redux';
import {updateBooleanValue} from '../action';

import styles from '../css/to-do-list.css';


class ToDoList extends React.Component{
    changeValue = (id) =>{
        this.props.updateBooleanValue(id)
    }
    render(){
        return(
            <div>
                <h1>To do list:</h1>
                    <div>
                        {this.props.todos.map(item =>{
                            return(
                                <div 
                                    className = {!item.completed ? 'incomplete-task' : 'complete-task' }
                                    onClick = {() =>{this.changeValue(item.id)}}>
                                    {item.todo}
                                </div>
                            )
                        })}
                    </div>
                
                

            </div>
        )
    }    
}
const mapStateToProps = (state) =>{
    return {todos : state.todos};
}

export default connect(mapStateToProps, {updateBooleanValue})(ToDoList);