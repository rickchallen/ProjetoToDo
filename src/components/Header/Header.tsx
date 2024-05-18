  import styles from "./style.module.scss"
  import { StatsCards } from "../StatsCards/StatsCards"

export const Header: React.FC = ()=>{

  return(<header className={styles.header}>
    <div className={styles.container}>
     <div>
      <h1>My Todo List </h1>
      <span>Bem-vindo,Ricardo</span>
     </div>

     <div>
      <StatsCards title="Total de Tarefas" value={5}/>
      <StatsCards title="Tarefas Pendentes" value={4}/>
      <StatsCards title="Tarefas Concluidas" value={1}/>
     
     </div>
     </div>  

  </header> )
}