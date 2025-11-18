import { useContext } from "react";
import TodoContext from "..";
import { TodoItem } from "../ToDoItem";

// ToDoList 컴포넌트: 할 일 목록을 렌더링
export const TodoList = () => {
  const value = useContext(TodoContext);

  return (
    <ul>
      {value?.state.todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.no} />
      ))}
    </ul>
  );
};
