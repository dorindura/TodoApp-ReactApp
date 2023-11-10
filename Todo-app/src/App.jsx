import React, {useState, createContext, useEffect} from "react";
// import Card from "./components/card/Card";
// import Input from "./components/input/Input";
// import TodoItem from "./components/todo-item/TodoItem";
// import TextArea from "./components/input/TextArea";
// import Button from "./components/button/Button";
// import Modal from "./components/modal/Modal";
import "./App.css";
import CardTasks from "./components/card-tasks/CardTasks";
// import EditTodoForm from "./components/EditTodoForm/EditTodoForm";



const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

export const TodoContext = createContext();

function App() {

  const mappingForCompletedItems = TODOS_MOCK.map((item) => {
    return item.completed;
  })   

  const [taskList, setTaskList] = useState(TODOS_MOCK);
  let [completed, setCompleted] = useState(mappingForCompletedItems);
  const [taskListId] = useState(TODOS_MOCK.id);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  // const [checked, setChecked] = useState(TODOS_MOCK.completed)

  const mapForEditedTask = TODOS_MOCK.map((item) => {
    return item.id;
  })

  
  const closeTodo = () => {
    setIsEditing(false);
  }


  const checkboxHandler = (id) => {
      const newTodos = taskList.map(todo=> {
        if(todo.id===id)
        return {...todo, completed: !todo.completed}
        return todo;
    })
      setTaskList(newTodos);
    }


  const editTodo = id => {
    setTaskList(taskList.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
}

  


    const editTask = (task, id) => {
      const newTodos = taskList.map(todo => todo.id === id ? {...task,
        id: id + 1,
        title: (task.title),
        description: (task.description),
        completed: (task.completed), isEditing: !todo.isEditing} : todo);
          setTaskList(newTodos);
          localStorage.setItem('taskList', JSON.stringify(newTodos));
      }

    const completedChange = (task, id) => {
      const newTodos = taskList.map(todo => todo.id === id ? {...task,
        id: id + 1,
        completed: true, isEditing: !todo.isEditing} : todo);
          setTaskList(newTodos);
          localStorage.setItem('taskList', JSON.stringify(newTodos));
    };


  const updateTask = id => {
    setTaskList(prevState => prevState.map(task => (task.id === id ? 
      {... task, title: updateTask.title} : task)))
  }

  const toggleCompleted = id => {
    setTaskList(taskList.map(task => task.id === id ? {task, completed: !task.completed} : task));
  }

  const deleteTodo = id => {
    setTaskList(prevState => prevState.filter(task => task.id !== id));
  };

  const updateTodo = task => {
    setTaskList(prevState => prevState.map(t => (t.id === task.id ? {...t, checked: !t.checked}
      : t
      )))
  };

  const closeEditMode = () => {
    setTaskList(false);
  }

  const toggleComplete = (id) => {
    setTaskList(
      taskList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }


  const enterEditMode = (task, id) => {
    setEditedTask(task.id);
    setIsEditing(true);
  }
    

  const onNewTaskAdd = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        id: `${prevState + 1}`,
        title: (newTask.title),
        description: (newTask.description),
        completed: false
      }],
    );
  };

  const mappingForTitleInTodosMock = TODOS_MOCK.map((item) => {
    return item.title;
  })

  console.log(mappingForTitleInTodosMock)
    
  const onEditTask = (updateTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...updateTask,
        id: `${taskList.length}`,
        title: (updateTask.title),
        description: (updateTask.description),
        completed: (updateTask.completed)
      },
    ]);
  }

  


  return (
    <div className="App">
      <div className="app-container">
        <TodoContext.Provider value={taskList}>
          <CardTasks setCompleted={setCompleted} closeEditMode={closeEditMode}
          toggleCompleted={toggleCompleted} enterEditMode={enterEditMode} 
          setTaskList={setTaskList} deleteTodo={deleteTodo} updateTodo={updateTodo}
          taskListId={taskListId} editTodo={editTodo} onEditTask={onEditTask}
          onNewTaskAdd={onNewTaskAdd} completed={completed} taskList={taskList}
          isEditing={isEditing} setIsEditing={setIsEditing} closeTodo={closeTodo} 
          editTask={editTask} completedChange={completedChange} checkboxHandler={checkboxHandler}
          />
        </TodoContext.Provider>
      </div>
    </div>
  );
  }

export default App;
