
import React from 'react'
import { useState } from 'react';
import './App.css'

 const Todo = () => {
  const[todos,setTodos]=useState([]);
  const[inputValue,setInputValue]=useState('');
  const[editMode,setEditMode]=useState(false);
  const[editId,setEditId]=useState(null);
  const[editValue,setEditValue]=useState('');

  const deleteItem = (id) => {
    const updatedItems = todos.filter
    ((todo) => todo.id !== id);
    setTodos(updatedItems);
   
  }
  const enterEditMode = (id,text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  }
const addTodo = () => {
    if(inputValue.trim()!== ''){
      const newTodo = {
        id:new Date().getTime(),
        text:inputValue,
  }
      setTodos([...todos,newTodo]);
      setInputValue('');
         
    }
  }
  
    const updateTodo = () => {
      const UpdatedTodos = todos.map((todo)  =>{
        if(todo.id === editId )
        {
          return {...todo,
            text:editValue }
      }
      return todo;
    });
    setTodos(UpdatedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue('');

    }
  

  return (
    <div className='todo-container'>
    <h2>ToDo List</h2>
    <input  placeholder='Add Task...' type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    {
      editMode?(
       <div>
        <input type='text'
        value={editValue}
        onChange={(e) => setEditValue
        (e.target.value)}/>
        <button onClick={updateTodo}>Update</button>
        </div>
        
      ):(
        <button onClick={addTodo}>Add</button>
      )
        
    }
    <ul>
      {todos.map((todo)=>(
        <li
         key={todo.id}
         >
        {todo.text}
        <div>
        <button  onClick={() => deleteItem(todo.id)} > Delete </button>
                  <button onClick={() => enterEditMode(todo.id,todo.text)} >Edit</button>
                  </div>
        </li>
      ))}
    </ul>
   
    </div>
  )
}

export default Todo;
