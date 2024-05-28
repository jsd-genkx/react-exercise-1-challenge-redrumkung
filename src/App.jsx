import "./App.css";
import MyFirstFunctionComponent from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import MyFirstFunctionalComponent from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import MyFirstClassComponent from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
  return (
    <div>
      <MyFirstFunctionComponent name="Function" />
      <MyFirstFunctionalComponent name="Functional" />
      <MyFirstClassComponent name="Class" />
    </div>
  );
}

export default App;
