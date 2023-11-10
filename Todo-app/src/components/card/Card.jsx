import React, {useEffect, useState} from "react";
import "./Card.css";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import clsx from "clsx";
// import Checkbox from "../checkbox/CheckBox";

const Card = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCompleted, setIsCompleted] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskTitle: "",
    taskDescription: "",
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
  }, [taskTitle, taskDescription])


  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  }

  const resetForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setIsCompleted("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: props.id,
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };
    // console.log("newtask:", newTask);
    props.addNewTask(newTask, props.id);
    // console.log("propsAddNewTask", props.addNewTask(newTask));
    resetForm();
  }

  return (
  <div className="card">
    <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        
        <Input
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
        >Create
        </Button>
      </form></div>);
};

export default Card;
