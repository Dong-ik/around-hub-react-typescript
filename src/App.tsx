import { PropsAndState } from "./example/PropsAndState";
import { StateComponent1 } from "./example/StateComponent1";
import { StateComponent2 } from "./example/StateComponent2";
import Hello from "./example/Hello";
import { NonContext } from "./example/Context/NonContext";

function App() {
  // return <Hello></Hello>;
  // return <PropsAndState></PropsAndState>;
  // return <StateComponent1></StateComponent1>;
  // return <StateComponent2></StateComponent2>;
  return <NonContext></NonContext>;
}

export default App;
