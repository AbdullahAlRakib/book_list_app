import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import { useState,useEffect} from "react";
import AddTodo from "./Components/AddTodo";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else(
    initTodo=JSON.parse(localStorage.getItem("todos"))
  )
  const onDelete=(todo)=>{
    console.log("I am On Delete",todo);
    setTodos(todos.filter((e)=>{
     return e!== todo;

    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc,isbn)=>{
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
       sno =todos[todos.length-1].sno+1;
    }
  
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
      isbn:isbn
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
    localStorage.setItem("todos",JSON.stringify(todos));
    

  }
  const [todos,setTodos]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>
    <Router>
    <Header title = "Book List App"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </Router>
    </>
    
  );
}

export default App;
