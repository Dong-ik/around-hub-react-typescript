import { TodoForm } from "../../components/ContextExample/Context/ToDoForm";
import { TodoList } from "../../components/ContextExample/Context/ToDoList";
import { TodoProvider } from "../../components/ContextExample/Context";

export const Context2 = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};
