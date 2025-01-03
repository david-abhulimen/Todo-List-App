import React from 'react';

const TodoListItem = (props) => {

    const handleDelClick = () => {
        props.delete(props.id)
    }

    const handleDoneClick = () => {
        props.toggleCompletion(props.id)
    }

    return (
        <div className="todoListItem">
            <div className="taskTextContainer">
            {/* <input type="checkbox" name="completeMarker1" className="completed" /> */}
            <p className={props.completed ? "strikeOver todoListText" : "todoListText"} onClick={handleDoneClick}>{props.text}</p>
            </div>
            <div className="deleteButton" onClick={handleDelClick}>
                <svg className="delIcon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
            </div>
        </div>
    )
}

export default TodoListItem