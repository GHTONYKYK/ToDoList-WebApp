"use client";
import React from 'react';
import Image from 'next/image';
import TodoItems from './TodoItems';
import { useState, useRef , useEffect} from 'react';

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();

  // useRef is used to get the value of input field
//  const [todoList, setTodoList] = useState(localStorage.getItem); is save to data to local localStorage
//save the data to local localStorage, and empty array 
//when ever close and open web , we get the data from local localStorage
//JSON.parse(localStorage.getItem("todos")) parses the JSON string retrieved from local storage into a JavaScript array if it exists.


  const add = () => {
    const inputText = inputRef.current.value;
//inputRef.current accesses the current DOM element that inputRef is pointing to.
//inputRef.current.value retrieves the current value of that input element.
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),   //Date.now() is a JavaScript method that returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix epoch).
      text: inputText,   //id: Date.now(), you often need to assign a unique key to each item. Using Date.now() can provide a simple solution to create unique keys for each item.
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);  //(prev) => [...prev, newTodo] is a function that takes the previous state 
    //(prev) as an argument and returns a new array.
    //newTodo is added to the end of the new array.
    inputRef.current.value = "";
    //inputRef.current.value = "" sets the value of that input element to an empty string.
    //inputRef.current.value = ""; clears any text that was previously entered in the input field.
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
//prevTodos.filter((todo) => todo.id !== id) creates a new array by filtering out the to-do item with the matching id.
//(todo) => todo.id !== id is a callback function that checks if the id of each todo item does not match the given id.
//The filter method includes only those todo items for which the condition (todo.id !== id) is true.
//prevTodos.filter(...) creates a new list of to-dos, but it skips the to-do with the matching id.
//.filter((todo) => todo.id !== id) means: "Keep all to-dos except the one with the given id."

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {    // if the current todo item has the same id as the one passed into the function.
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;   // If the id does not match, the current todo object is returned unchanged.
      });
    });
  };
 


useEffect(()=>{
  localStorage.setItem("todoList", JSON.stringify(todoList));
}, [todoList])

 



  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 h-[600px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <Image src="/todo_icon.png" width={20} height={20} alt="todo_icon" />
        <h1 className="text-3xl font-semibold text-blue-800">To DO List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-300 rounded-full text-blue-700">
        <input
          ref={inputRef}
          className="text-blue-800 bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder-red-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add
        </button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              className="text-blue-800"
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
