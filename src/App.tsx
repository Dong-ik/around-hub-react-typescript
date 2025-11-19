import { PropsAndState } from "./example/PropsAndState";
import { StateComponent1 } from "./example/StateComponent1";
import { StateComponent2 } from "./example/StateComponent2";
import Hello from "./example/Hello";
import { NonContext } from "./example/Context/NonContext";
import { ContextExample } from "./example/Context/Context";
import { Context2 } from "./example/Context/Context2";
import { Layout } from "./layouts/Layout";
import { Example1 } from "./pages/Example1";
import { Example2 } from "./pages/Example2";
import { BlogPosts } from "./pages/BlogPosts";
import Photos from "./pages/Photo";
import TodoList from "./pages/TodoList";
import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import styled from "@emotion/styled";

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  // return <Hello></Hello>;
  // return <PropsAndState></PropsAndState>;
  // return <StateComponent1></StateComponent1>;
  // return <StateComponent2></StateComponent2>;
  // return <NonContext></NonContext>;
  // return <ContextExample />;
  // return <Context2 />;
  // return (
  //   <Layout>
  //     <Example1 />
  //     <Example2 />
  //   </Layout>
  // );
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path={"*"}
          element={
            <>
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            </>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
