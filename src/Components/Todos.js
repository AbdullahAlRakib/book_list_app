import React from "react";
import TodoItem from "../Components/TodoItem";
const Todos = (props) => {
    return ( 
        <div className="todos-section">
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-5">
                        <div className="noTodo-info">
                        {props.todos.length===0? <h6>No Books to Display</h6>:
                        
                        props.todos.map((todo)=>{
                            return <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>
                        })
                        }
                     
                      
                   </div>
                    </div>
                </div>
            </div>
        </div>
      
     );
}
 
export default Todos;