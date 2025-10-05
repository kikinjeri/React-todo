import { useState } from "react";

//custom components
import CustomForms from "./components/CustomForms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CustomForms />
    </div>
  );
}

export default App;
