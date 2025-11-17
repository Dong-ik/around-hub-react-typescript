import React, { useState } from "react";

export const StateComponent1 = () => {
  const [message, setmessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setmessage(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} />
      <p>{message}</p>
    </div>
  );
};
