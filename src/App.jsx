import { useState } from "react";

//custom components
import CustomForms from "./components/CustomForms";

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForms addTask={addTask} />
    </div>
  );
}

export default App;
