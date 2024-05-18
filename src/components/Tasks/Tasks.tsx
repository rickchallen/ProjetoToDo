
import {FormEvent, useState} from "react"
import styles from "./styles.module.scss"
import { json } from "stream/consumers";

interface Task{
  id: number;
  title: string;
  done: boolean;
}

export const Tasks: React.FC = ()=>{

  /*Criando um Hook */
   const [taskTitle,setTaskTitle] = useState("")
   const [tasks,setTasks] = useState([] as Task[]) 

   function handleOnSubmitAddTask(event: FormEvent){

    event.preventDefault()
    console.log(taskTitle)


    if(taskTitle.length < 3){
      alert("É Necessário Digitar mais de Três Letras Para Criar Uma Tarefa")

    }
       /* Adiciona Tarefas */ 
   // setTasks([
     // ...tasks,// pega todas as Tarefas que Já existam e coloco neste novo valor de estado de Tarefas 
      //{id:new Date().getTime(),title:taskTitle,done:false} 
   // ])

   // essa nova maneira resolve o problema de atualização do novo valor das tarefas 
   const newTasks =[
      ...tasks,
      {id:new Date().getTime(),title:taskTitle,done:false}

   ]
    setTasks(newTasks)
    localStorage.setItem("tasks",JSON.stringify(newTasks))
    setTaskTitle("")
   }

  return(

    <section className={styles.container}>
      <form onSubmit={handleOnSubmitAddTask}>
        <div>
          {/* o valor do htmlFor tem que estar igual ao id ,WHY?*/} 
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input type="text"
          value={taskTitle} 
          onChange={(event)=> setTaskTitle(event.target.value)}
          id="task-title" 
          placeholder="Titulo Da Tarefa"/>
        </div>
        <button type="submit">Adicionar</button>
      </form>

      <ul>
         {tasks.map(tasks =>{
          return ( // Na Primeira Renderização de um loop utilzando um array map é necessário colocar a prop KEY em cada elemento com um identificador unico 
             <li key={tasks.id}>
            <input type="checkbox" id={`Task-${tasks.id}`}/>
            <label htmlFor={`Task-${tasks.id}`}>{tasks.title}</label>
          </li>)
         })}
      </ul>
    </section>


)
}