import React from 'react';
import {updateToDoTask} from '../action';
import {connect} from 'react-redux';

class ToDoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : [{
                todo : '',
                
            }]
        }
    }    
    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.updateToDoTask(this.state.todo);
    }
    render(){  
        return(
            <div className = 'to-do-form-container'>
                <form onSubmit = {this.submitHandler}>
                    <input 
                        type = 'text' 
                        name = 'todo'
                        value = {this.state.todo}
                        onChange = {this.inputHandler}
                    />
                    <button type = 'submit' className = 'submit-button'>Add to do</button>
                </form>
            </div>
        )
    }    
}

const mapStateToProps = () => {
    return {};
};
export default connect (mapStateToProps)(ToDoForm);
