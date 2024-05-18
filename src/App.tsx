import React from 'react';
import { Header} from "./components/Header/Header"
import "./style/global.css"
import {useEffect} from 'react'
import { Tasks } from './components/Tasks/Tasks';

function App() {

   useEffect(()=>{

    console.log("Executando A Função do useEffect")
    
   },[]) /// se o array de dependências não for inserido o useEffect ficará disparando 
   //a todo momento podendo causar uma lentidão no sistema.

   // Sempre que uma variável do array de dependência for alterada ,o useEffect Será disparado 

  return <>
     <Header/>
     <Tasks/>
  </>

}

export default App;

