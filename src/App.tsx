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

function App() {
  // return <Hello></Hello>;
  // return <PropsAndState></PropsAndState>;
  // return <StateComponent1></StateComponent1>;
  // return <StateComponent2></StateComponent2>;
  // return <NonContext></NonContext>;
  // return <ContextExample />;
  // return <Context2 />;
  return (
    <Layout>
      <Example1 />
      <Example2 />
    </Layout>
  );
}

export default App;
