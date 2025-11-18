import styled from "@emotion/styled";
import { useContext } from "react";
import TodoContext from "..";

const Li = styled.li``;

interface TextSpanProps {
  readonly done: boolean;
}

const TextSpan = styled.span<TextSpanProps>`
  color: ${(props) => (props.done ? "#999999" : "inherit")};
  text-decoration: ${(props) => (props.done ? "line-through" : "inherit")};
  cursor: ${(props) => (props.done ? "pointer" : "inherit")};
`;

const RemoveSpan = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

interface TodoItemProps {
  todo: {
    no: number;
    todo: string;
    done: boolean;
  };
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const todoContext = useContext(TodoContext);
  const deleteTodo = todoContext?.actions.deleteTodo!;
  return (
    <Li>
      <TextSpan done={todo.done}>{todo.todo}</TextSpan>
      <RemoveSpan onClick={() => deleteTodo(todo.no)}>[삭제]</RemoveSpan>
    </Li>
  );
};
