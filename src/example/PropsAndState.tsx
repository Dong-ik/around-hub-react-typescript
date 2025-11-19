import { useState } from "react";
import { Button } from "../components/Button";
import { Label } from "../components/Label";

export const PropsAndState = () => {
  const [count, setCount] = useState<number>(0);

  const sub = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={sub} label="-" />
      <Label data={count} />
      <Button onClick={add} label="+" />
    </div>
  );
};
