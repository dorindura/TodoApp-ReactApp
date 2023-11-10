import React, { useState, useEffect, useContext } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";
import clsx from "clsx";
import { TodoContext } from "../../App";

const TodoItem = (props) => {
  // const [isCompleted, setIsCompleted] = useState(props.completed);
  const {taskListId, completed, taskList, task, updateTodo, enterEditMode, editTodo} = props;
  
  let [checked, setChecked] = useState(props.completed)
  

  const updateCheckBox = (event) => {
    event.preventDefault();
    setChecked(props.checkboxHandler)
    }
    

    const handleCheckboxChange = (e) => {
      setChecked(e.target.checked);
      props.checkboxHandler(props.id);
    }


const mapForIdInTodoItem = taskList.map((item) => {
  return item.id;
});

console.log("propsTasklist", props.taskList)


  return (
    <div className={`todo-item ${clsx(props.completed ? "todo-completed" : "todo-item" )}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checkboxHandler={props.checkboxHandler}
            value={props.completed}
            // checked={checked}
            // setChecked={setChecked}
            // onChange={handleCheckboxChange}
            taskList={props.taskList}
            completed={props.completed}
            setCompleted={props.setCompleted}
            handleCheckboxChange={handleCheckboxChange}
            toggleCompleted={props.toggleCompleted}
            checked={checked}
            setChecked={props.setChecked}
            completedChange={props.completedChange}
          />

          <h4>{props.title}</h4>
        </div>
        <div>
          {/* <button onClick={() => props.completedChange(props.id)}></button> */}
          <i onClick={() => props.editTodo(props.id)} className="fa fa-pencil" aria-hidden="true"></i>
          <i onClick={() => props.deleteTodo(props.id)} className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
      <div className="separator"></div>

      <p>
        {props.description}
      </p>
    </div>
  );
};

export default TodoItem;
