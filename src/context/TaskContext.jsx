import { createContext, useState, useEffect } from "react";

/* 
  Fuente de datos
*/
import { tasks as data } from "../data/task";

/* 
  Desarrollo
*/
console.log(data)

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks( [...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description,
        }] )
      }
    
    function deleteTask(taskId) {
    setTasks( tasks.filter( task => task.id !== taskId  ) )
    }

    useEffect(() => {
    setTasks(data)
    }, []);
    

    return (
        <TaskContext.Provider value={ {
            tasks: tasks, 
            createTask: createTask, 
            deleteTask: deleteTask,
        } }>
            {props.children}
        </TaskContext.Provider>
    )
}