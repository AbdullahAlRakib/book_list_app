import React from "react"
const TodoItem = ({todo,onDelete}) => {
    return ( 
        <div className="todoItem-info">
            <div className="container">
                <div className="row ">
                    <div className="col-md-5">
                        <div className="todoItem-table">

                  
    <table class="table   table-bordered">
  <thead>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">#ISBN</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{todo.title}</td>
      <td>{todo.desc}</td>
      <td>{todo.isbn}</td>
      <td><button className="btn btn-danger" onClick = {()=>{onDelete(todo)}}>X</button></td>
    </tr>
 
  </tbody>
</table>
</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TodoItem;