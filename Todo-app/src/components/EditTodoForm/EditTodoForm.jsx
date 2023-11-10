import React, {useEffect, useState} from "react";
import "./EditTodoForm.css";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import clsx from "clsx";
// import Modal2 from "../modal2/Modal2";
// import Checkbox from "../checkbox/CheckBox";

const EditTodoForm = (props) => {

  const {taskList, editTodo, editTask, updateTask, updateTodo, id} = props;




  const mapForTitleInTaskList = taskList.map((item) => {
    return item.title
  })

  console.log("titleEditForm", taskList);

  // const [isOpenModal2, setIsOpenModal2] = useState(true);

  const closeEdit = () => {
    props.item.isEditing=false;
  } 

  const [taskTitle, setTaskTitle] = useState(props.title);
  const [taskDescription, setTaskDescription] = useState(props.description);
  const [taskCompleted, setIsCompleted] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskTitle: taskTitle,
    taskDescription: taskDescription,
    isValid: true,
  });


  useEffect(() => {
    let taskTitleErrorMessage = "";
    let taskDescriptionErrorMessage = "";
    let isFormValid = true;

    if(taskTitle.length === 0) {
      taskTitleErrorMessage = "This field is Required!";
      isFormValid = false;
    }

    if (taskDescription.length === 0) {
      taskDescriptionErrorMessage = "This field is Required!";
      isFormValid = false;
    }
    setFormValidation({
      taskTitle: taskTitleErrorMessage,
      taskDescription: taskDescriptionErrorMessage, 
      isValid: isFormValid,
    })
  }
  , [taskTitle, taskDescription]
  )


  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  }
  
  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const updateTask = {
      key: `${props.item.id + 1}`,
      id: `${props.item.id + 1}`,
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    // console.log("updateTask", updateTask);
    props.editTask(updateTask, props.item.id);
    props.item.isEditing=false;
  }

  

  console.log("setTaskTitleEditForm", taskTitle);

  return (
  <div className="card">
    <h2>Update Todo</h2>
      <form onSubmit={handleSubmit}>
        <Input
        updateTask={updateTask}
        value={taskTitle}
        name="taskTitle"
        completed={taskCompleted}
        onChange={handleTitleChange} 
        // placeholder="Title" 
        type="text" 
        className={clsx("primary-input", formValidation.taskTitle && "error")}
        />
        <p className="error-message">{formValidation.taskTitle}</p>
        <TextArea 
        value={taskDescription}
        description={taskDescription}
        onChange={handleDescriptionChange} 
        // placeholder="Description" 
        className={clsx("primary-input", "textarea", formValidation.taskDescription && "error")}
        />
        <p className="error-message">{formValidation.taskDescription}</p>
        <Button
        className={clsx("primary-button", !formValidation.isValid && "error-button")}
        disabled={!formValidation.isValid}
        type="submit"
        // onClick={() => props.enterEditMode(props.task)}
        >Update Task
        </Button>
      </form>
      </div>
      );
};

export default EditTodoForm;
