import {useState} from "react";
import Maincontent from "./Components/Main/Maincontent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Maincontent />
    </>
  );
}

export default App;
