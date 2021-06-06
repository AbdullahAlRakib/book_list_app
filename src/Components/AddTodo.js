import React, { useState } from "react";

const AddTodo  = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [isbn,setIsbn]=useState("");

    
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc || !isbn){
            alert("Please Fill All The Input Field !!!!!!!")
        }
        else{
            props.addTodo(title,desc,isbn);
            setTitle("");
            setDesc("");
            setIsbn("");
        }
       

    }
    return ( 

        <div className="addTodo-section">
            <div className="container">
                <div className="addTodo-heading text-center">
                    <h2> <span className="book">Book</span> List App</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5"> 
        <form onSubmit={submit}>
            <div class="form-group">
                <label for="exampleInputText">Title</label>
                <input type="text" value={title} onChange ={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleInputText" aria-describedby="textHelp"/>
               
            </div>
            <div class="form-group">
                <label for="exampleInputText">Author</label>
                <input type="text" value={desc} onChange ={(e)=>{setDesc(e.target.value)}} class="form-control" id="exampleInputText" aria-describedby="textHelp"/>
               
            </div>
            <div class="form-group">
                <label for="exampleInputText">ISBN #</label>
                <input type="text" value={isbn} onChange ={(e)=>{setIsbn(e.target.value)}} class="form-control" id="exampleInputText" aria-describedby="textHelp"/>
               
            </div>
          
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </div>
                </div>
     );
}
 
export default AddTodo;