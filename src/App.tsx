import "./App.css";
import { NumberInputCustomOnBlur } from "./components/NumberInputCustomOnBlur";

function App() {
  return (
    <div className="App">
      <h1>Number Input</h1>

      <p>not decimalSeparator</p>
      <NumberInputCustomOnBlur isAllowed={true} isDisplayErrorInline={false} />

      <p>decimalSeparator = 5</p>
      <NumberInputCustomOnBlur
        isDisplayErrorInline={false}
        decimalSeparator={5}
        isAllowed={true}
      />
    </div>
  );
}

export default App;
