import React from 'react';
import {addToDo, deleteCompletedTask} from '../action';
import {connect} from 'react-redux';

import styles from '../css/to-do-form.css'

class ToDoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            todo : ''
        }
    }    
    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})

    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.addToDo(this.state.todo);
        this.setState({
            todo: '',
        })
        
    }
    
    deleteHandler = (event) =>{
        event.preventDefault()
        this.props.deleteCompletedTask()
        
    }
 
    render(){  
        return(
            <div className = 'to-do-form-container'>
                <form >
                    <input 
                        type = 'text' 
                        name = 'todo'
                        value = {this.state.todo}
                        onChange = {this.inputHandler}
                        placeholder = '   Add A New To Do...'
                    />
                   
                        <button onClick = {this.submitHandler } type = 'submit' className = 'add-button'>Add To Do</button>
                        <button onClick = {this.deleteHandler} className = 'delete-button'>Delete Completed</button>
                    
                </form>
            </div>
        )
    }    
}

const mapStateToProps = () => {
    return {};
};
export default connect (mapStateToProps, {addToDo, deleteCompletedTask})(ToDoForm);
