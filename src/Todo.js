import React, { useState,useEffect } from "react";
import "./Todo.css";

const getDataFromLS=()=>{
  const data=localStorage.getItem('todos')
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}
const getColorFromLS=()=>{
  const bg=localStorage.getItem('bgColor')
  if(bg){
    return JSON.parse(bg)
  }
  else{
    return [];
  }
}
const Todo = () => {
  const [todos, setTodos] = useState(getDataFromLS());
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [bgColor, setBgColor] = useState(getColorFromLS());

 

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  
  useEffect(()=>{
    localStorage.setItem('bgColor',JSON.stringify(bgColor))
  },[bgColor])
  
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title, desc, time }]);
    setDesc("");
    setTime("");
    setTitle("");
    setId("");
  };
  const removeTodo = (index) => {
    let remove = todos;
    remove.splice(index, 1);
    setTodos([...remove]);
  };
  const Down = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index < todos.length - 1) {
      let updatedTodos = [...todos];
      let temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index + 1];
      updatedTodos[index + 1] = temp;
      setTodos(updatedTodos);
    }
  };
  const Up = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index > 0) {
      const updatedTodos = [...todos];
      const temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index - 1];
      updatedTodos[index - 1] = temp;
      setTodos(updatedTodos);
    }
  };
  return (
    <>
    <div className="btns">
      <h5 style={{textAlign:'center'}}>Form Background Colors</h5>
    <div className="color-btns">
          <button onClick={()=>setBgColor('black')} style={{backgroundColor:'black',color:'white'}}>Black</button>
          <button onClick={()=>setBgColor('red')} style={{backgroundColor:'red',color:'white'}} >Red</button>
          <button onClick={()=>setBgColor('pink')} style={{backgroundColor:'pink',color:'black'}}>Pink</button>
          <button onClick={()=>setBgColor('yellow')} style={{backgroundColor:'yellow',color:'black'}}>Yellow</button>
          <button onClick={()=>setBgColor('blue')} style={{backgroundColor:'blue',color:'white'}}>Blue</button>
          <button onClick={()=>setBgColor('gray')} style={{backgroundColor:'gray',color:'white'}}>Gray</button>
        </div>
        </div>
      <div className="add-todo" style={{ backgroundColor: bgColor }}>
        <form onSubmit={addTodo}>
          {/* <input
            type="text"
            placeholder="Give a Unique ID in numbers"
            value={id}
            onChange={(e)=>setId(e.target.value)}
            
          /> */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <input
            type="time"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button>Add Todo</button>
        </form>
      </div>
      {todos.map((ele) => {
        return (
          <div key={ele.id} className="display-todo "  >
            <p>{ele.title}</p>
            <p>{ele.desc}</p>
            <p>{ele.time}</p>
            {/*             <button onClick={()=>Up(ele.id)}>Up</button>
             */}{" "}
            <button onClick={() => removeTodo(ele.id)}>Remove</button>
            {/* <button onClick={()=>Down(ele.id)}>Down</button> */}
          </div>
        );
      })}
    </>
  );
};

export default Todo;
