import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AddTask = ({addTask}) =>{
  const[value,updateValue] = useState("");

const handleSubmit = e =>{
  e.preventDefault();
  if(value !=="")
  {
    addTask(value)
    updateValue("");
  }
};

return(
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={value}
      placeholder="Enter your task"
      onChange={e =>updateValue(e.target.value)}
      />
      <button type="submit"><i class="material-icons">add</i></button>
  </form>
);
}
const ToDoList = ()=> {
  const addTask = text =>updateTask([...tasks,{text}]);
  const [tasks,updateTask] = useState([
    ]);
    
  const toggleTask = index =>{
    const newTask= [...tasks];
    if(newTask[index].isCompleted)
    {
      newTask[index].isCompleted = false;
    }
    else{
      newTask[index].isCompleted = true;
      }
    updateTask(newTask);
  }

  const removeTask = task =>{
    const newTask= [...tasks];   //existing tasks and new tasks will be stored in these 3 dots
    newTask.splice(task,1);      //splice means removing particular item
    updateTask(newTask); 
  }
  return(
    <div className="list-of-tasks-todo">
      {tasks.map((task,index) =>(
        <div className='task-status'>
          <span onClick={()=> toggleTask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
        
          {task.text}
          </span>
          <button onClick={()=> removeTask(index)}><i class="material-icons">clear</i> </button>
        </div>
      ))}
      <AddTask addTask={addTask}/>
    </div>
  );
}
ReactDOM.render(<ToDoList/>,document.getElementById('root'));          //rendering ToDoList

