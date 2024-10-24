import React from "react";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { SafeAreaView } from "react-native";
import ToDoForm from "./components/ToDoForm";
function App() {
  const addTask=(task)=>{
    if(tasks.some((ListTask) => 
       ListTask===task)){
        alert("Task already exists")
        return;
      }
    setTasks([...tasks, task]);
    };
    
      
    
    
    
  
  const [tasks, setTasks] = useState([]);

  
    return (
        <SafeAreaView>
           
            <ToDoForm OnAddTask={addTask} />
            <ToDoList tasks={tasks} />
        </SafeAreaView>
      );
    
    }  
    
export default App;