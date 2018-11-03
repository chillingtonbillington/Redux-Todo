import React from 'react';
import {connect} from 'react-redux';

const ToDoList = () =>{
    return(
        <div>
            <h1>To do list:</h1>

        </div>
    )
}
const mapStateToProps = () =>{
    return {};
}

export default connect(mapStateToProps)(ToDoList);