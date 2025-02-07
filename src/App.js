import "./App.css";
import AutoComplete from "./components/AutoComplete";
import Counter from "./components/Counter";
import DisplayList from "./components/DisplayList";
import DynamicUserInput from "./components/DynamicUserInput";
import SimpleFetchData from "./components/SimpleFetchData";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width:"100%",
        gap:"20px",
      }}
    >
      <Counter />
      <DynamicUserInput/>
      <DisplayList/>
      <ToggleSwitch/>
      <SimpleFetchData/>
      <AutoComplete/>
    </div>
  );
}

export default App;
