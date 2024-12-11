"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import TodoItems from "./TodoItems";

const Todo = () => {
  const defaultTodos = [
    {
      id: Date.now(),
      text: "Giving them good grade",
      isComplete: false,
    },
  ];

  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      } else {
        setTodos(defaultTodos);
      }
    }
  }, []);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  const add = () => {
    const inputText = inputRef.current.value;
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    saveTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    saveTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    saveTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white place-self-center w-11/12 max-w-md flex flex-col p-7 h-[600px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <Image src="/todo_icon.png" width={40} height={40} alt="todo_icon" />
        <h1 className="text-3xl font-semibold text-blue-800 dark:text-blue-400">
          To DO List
        </h1>
      </div>

      <div className="flex items-center my-7 bg-gray-300 dark:bg-gray-700 rounded-full text-blue-700 dark:text-blue-300">
        <input
          ref={inputRef}
          className="text-blue-800 dark:text-blue-400 bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder-blue-600 dark:placeholder-blue-400"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-200 px-4 py-2 rounded-full"
        >
          Add
        </button>
      </div>

      <ul className="flex-1 overflow-y-auto">
        {todos.map((item, index) => {
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
      </ul>
    </div>
  );
};

export default Todo;
