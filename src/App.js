import "./App.css";
import AutoComplete from "./components/AutoComplete";
import Counter from "./components/Counter";
import DebouncedButtonClick from "./components/DebouncedButtonClick";
import DisplayList from "./components/DisplayList";
import DynamicUserInput from "./components/DynamicUserInput";
import { Dashboard, Profile } from "./components/HigherOrderComponent";
import LifeCycleMethod from "./components/LifeCycleMethod";
import SimpleFetchData from "./components/SimpleFetchData";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
      }}
    >
      <Counter />
      <DynamicUserInput />
      <DisplayList />
      <ToggleSwitch />
      <SimpleFetchData />
      <AutoComplete />
      <DebouncedButtonClick />
      <LifeCycleMethod />
      <Dashboard isAuthenticated={true} name={"Jatin"} />
      <Profile isAuthenticated={false} name={"Jatin"} />
    </div>
  );
}

export default App;
