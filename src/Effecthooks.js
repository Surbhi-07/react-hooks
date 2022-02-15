import { useState, useEffect } from "react";

export default function Effecthooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   console.log("hello");
    });

  return (
  <div>
  <h1>I have rendered {count} times!</h1>;
  <button onClick={()=>setCount(count+1)}>update button</button>
  </div>
  )
}