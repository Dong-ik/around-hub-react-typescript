import styled from "@emotion/styled";
import { useContext } from "react";
import TodoContext from "..";

const Li = styled.li``;

interface TextSpanProps {
  readonly done: boolean;
}

// done 속성에 따라 스타일 변경(true면 취소선, false면 기본 스타일)
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

// ToDoItem 컴포넌트: 개별 할 일 항목을 렌더링
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
