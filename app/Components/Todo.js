// "use client";
// import React from 'react';
// import Image from 'next/image';
// import TodoItems from './TodoItems';
// import { useState, useRef , useEffect} from 'react';

// const Todo = () => {

//   const defaultTodo = { id: Date.now(), text: "giving this team good grade", isComplete: false };
//   const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
//   const inputRef = useRef();

 

//   const add = () => {
//     const inputText = inputRef.current.value;
 
//     if (inputText === "") {
//       return null;
//     }

//     const newTodo = {
//       id: Date.now(),     //this is for unique value 
//       text: inputText,    
//       isComplete: false,
//     };
//     setTodoList((prev) => [...prev, newTodo]);   
     
//     inputRef.current.value = "";
    
//   };

//   const deleteTodo = (id) => {
//     setTodoList((prevTodos) => {
//       return prevTodos.filter((todo) => todo.id !== id);
//     });
//   };
 

//   const toggle = (id) => {
//     setTodoList((prevTodos) => {
//       return prevTodos.map((todo) => {
//         if (todo.id === id) {     
//           return { ...todo, isComplete: !todo.isComplete };
//         }
//         return todo;    
//       });
//     });
//   };
 


// useEffect(()=>{
//   localStorage.setItem("todoList", JSON.stringify(todoList));
// }, [todoList])

 



//   return (
//     <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 h-[600px] rounded-xl">
//       <div className="flex items-center mt-7 gap-2">
//         <Image src="/todo_icon.png" width={20} height={20} alt="todo_icon" />
//         <h1 className="text-3xl font-semibold text-blue-800">To DO List</h1>
//       </div>

//       <div className="flex items-center my-7 bg-gray-300 rounded-full text-blue-700">
//         <input
//           ref={inputRef}
//           className="text-blue-800 bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder-blue-600"
//           type="text"
//           placeholder="Add your task"
//         />
//         <button
//           onClick={add}
//           className="border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
//         >
//           Add
//         </button>
//       </div>

//       <div>
//         {todoList.map((item, index) => {
//           return (
//             <TodoItems
//               className="text-blue-800"
//               key={index}
//               text={item.text}
//               id={item.id}
//               isComplete={item.isComplete}
//               deleteTodo={deleteTodo}
//               toggle={toggle}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Todo;










//second try 

"use client";
import React from 'react';
import Image from 'next/image';
import TodoItems from './TodoItems';
import { useState, useRef, useEffect } from 'react';

const Todo = () => {
  // Default todo item
  const defaultTodo = { id: Date.now(), text: "Giving this team good grade", isComplete: false };

  // Initialize todoList state: check if there's data in localStorage
  const [todoList, setTodoList] = useState(() => {
    // If there's no saved todos in localStorage, set the default todo
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return [defaultTodo]; // Return default todo if no todos in localStorage
  });

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value;

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(), // Ensure a unique id
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    // Save todo list to localStorage whenever todoList changes
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 h-[600px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <Image src="/todo_icon.png" width={20} height={20} alt="todo_icon" />
        <h1 className="text-3xl font-semibold text-blue-800">To DO List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-300 rounded-full text-blue-700">
        <input
          ref={inputRef}
          className="text-blue-800 bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder-blue-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
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
