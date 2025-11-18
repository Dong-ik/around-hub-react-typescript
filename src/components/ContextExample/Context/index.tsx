import { createContext, useState } from "react";

type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

type TodoListContextValueType = {
  state: { todoList: Array<TodoListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleTodo: (no: number) => void;
  };
};

const TodoContext = createContext<TodoListContextValueType | undefined>(
  undefined,
);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = (props: Props) => {
  const [TodoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "리액트 공부하기", done: false },
    { no: 2, todo: "타입스크립트 공부하기", done: true },
    { no: 3, todo: "컴포넌트 만들기", done: false },
    { no: 4, todo: "Context API 만들기", done: false },
  ]);

  const addTodo = (todo: string) => {
    setTodoList([...TodoList, { no: Date.now(), todo: todo, done: false }]);
  };

  const deleteTodo = (no: number) => {
    setTodoList(TodoList.filter((item: TodoListItemType) => item.no !== no));
  };

  const toggleTodo = (no: number) => {
    const index = TodoList.findIndex((item) => item.no === no);
    TodoList[index].done = true;
    setTodoList(TodoList);
  };

  //<TodoContext.Provider />의 value로 전달할 객체 생성
  const value: TodoListContextValueType = {
    state: { todoList: TodoList },
    actions: { addTodo, deleteTodo, toggleTodo },
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
