import "./CardTasks.css";
import TodoItem from "../todo-item/TodoItem";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import Modal2 from "../modal2/Modal2"
import { useState } from "react";
import EditTodoForm from "../EditTodoForm/EditTodoForm";


const CardTasks = (props) => {
  const {onNewTaskAdd, onEditTask, taskList, deleteTodo, updateTodo, 
    updateTask, enterEditMode, isEditing} = props;


console.log("propsCompletedCardtask", props.completed);


  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2] = useState(true);
  
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleNewTaskAdd = (task) => {
        onNewTaskAdd(task);
        closeModal();
    };

    const handleEditTask = (task) => {
      props.onEditTask(task);
      props.setIsEditing(false);  
    };

    
console.log("propsChecked", props.checked);

    return (
        <div className="card-tasks">
        <h1>My todos</h1>
          {taskList.length > 0 && (
          <Button onClick={openModal}>Add +</Button>
          )}
          <div className="list-container">
           {props.taskList.filter((item)=> {
              return item.completed === false;
            }).map((item, index) => (  
              item.isEditing ? 
              (
          // <Modal onClose={closeModal} isOpen={isOpen}>
          // <Modal2 onClose={closeModal} isOpen2={isOpen2}>
            <EditTodoForm
              // enterEditMode={props.enterEditMode}
              updateTodo={props.updateTodo}
              taskList={taskList}
              editTask={props.editTask}
              item={item}
              // task={todo}
              // onClose={closeModal}
              isOpen={isOpen}
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              editTodo={props.editTodo}
              updateTask={props.updateTask}
              closeEditMode={props.closeEditMode}
              handleTitleChange={props.handleTitleChange}
              handleEditTask={handleEditTask}
              closeTodo={props.closeTodo}
              handleIsEditing={props.handleIsEditing}
            />
            // </Modal2>
          // </Modal>
                ) : (
            <TodoItem
             checkboxHandler={props.checkboxHandler}
             completedChange={props.completedChange}
             editTask={props.editTask}
             key={index}
             id={item.id}
             title={item.title}
             description={item.description}
             completed={item.completed}
             deleteTodo={deleteTodo}
             taskList={taskList}
             setTaskList={props.setTaskList}
             editTodo={props.editTodo}
             editedTask={props.editedTask}
             updateTodo={props.updateTodo}
             enterEditMode={props.enterEditMode}
             updateTask={props.updateTask}
             editItem={props.editItem}
             handleCheckboxChange={props.handleCheckboxChange}
             toggleCompleted={props.toggleCompleted}
             setCompleted={props.setCompleted}
             checked={props.checked}
            />
            )
            )
            )
            }
            {/* <TodoItem completed={false} /> */}
          </div>

          <div className="separator"></div>

        <h2>Completed</h2>
          <div className="list-container">
          {props.taskList.filter((item)=> {
              return item.completed === true;
            }).map((item, index) => (
              item.isEditing ? 
              (
          // <Modal onClose={closeModal} isOpen={isOpen}>
          // <Modal2 onClose={closeModal} isOpen2={isOpen2}>
            <EditTodoForm
              // enterEditMode={props.enterEditMode}
              updateTodo={props.updateTodo}
              taskList={taskList}
              editTask={props.editTask}
              item={item}
              // task={todo}
              // onClose={closeModal}
              isOpen={isOpen}
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              editTodo={props.editTodo}
              updateTask={props.updateTask}
              closeEditMode={props.closeEditMode}
              handleTitleChange={props.handleTitleChange}
              handleEditTask={handleEditTask}
              closeTodo={props.closeTodo}
              handleIsEditing={props.handleIsEditing}
            />
              ) : (
            <TodoItem
             checkboxHandler={props.checkboxHandler}
             completedChange={props.completedChange}
             editTask={props.editTask}
             key={index}
             id={item.id}
             title={item.title}
             description={item.description}
             completed={item.completed}
             updateTodo={props.updateTodo}
             deleteTodo={deleteTodo}
             taskList={taskList}
             editTodo={props.editTodo}
             enterEditMode={props.enterEditMode}
             handleCheckboxChange={props.handleCheckboxChange}
             setCompleted={props.setCompleted}
             checked={props.checked}
             setChecked={props.setChecked}
            />
            )
            ))}
          </div>
          {props.taskList.map((item) => (
          <Modal key={item.id} onClose={closeModal} isOpen={isOpen}>
            <Card
             addNewTask={handleNewTaskAdd}></Card>
          </Modal>
          ))}
        </div>
        
    );

};

// console.log("TitleInCardTask", item.title);

export default CardTasks;



