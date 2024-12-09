import React from 'react';
import Image from 'next/image';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
        <Image src={isComplete ? "/tick.png" : "/not_tick.png"} width={20} height={20} alt="tick" />
        <p className={`text-blue-700 ml-4 decoration-green-700 ${isComplete? "line-through" : ""}`}>{text}</p>
      </div>
      <Image onClick={() => deleteTodo(id)} className="cursor-pointer" src="/delete.png" width={20} height={20} alt="delete" />
    </div>
  );
};

export default TodoItems;
 