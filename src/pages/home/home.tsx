import React, { ChangeEvent, useRef } from "react";
import { useState } from "react";

export const Home = () => {
  const [list, setList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCreate = () => {
    if (!inputRef.current?.value) return;

    const newList = [...list, inputRef.current?.value];

    setList(newList);

    inputRef.current.value = "";
  };

  return (
    <div>
      <p>Home page</p>

      <input ref={inputRef} placeholder="type something" />
      <button onClick={handleCreate}>Create</button>

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
