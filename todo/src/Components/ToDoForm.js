import React from 'react';
import {addToDo, deleteCompletedTask} from '../action';
import {connect} from 'react-redux';

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
        
    }
    deleteHandler = (event) =>{
        event.preventDefault()
        this.props.deleteCompletedTask(event.target.id)
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
                    />
                    <button onClick = {this.submitHandler } type = 'submit' className = 'add-button'>Add to do</button>
                    <button onClick = {this.deleteHandler} className = 'delete-button'>Delete completed to dos</button>
                </form>
            </div>
        )
    }    
}

const mapStateToProps = () => {
    return {};
};
export default connect (mapStateToProps, {addToDo, deleteCompletedTask})(ToDoForm);
