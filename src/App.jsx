import {useState} from "react";
import Maincontent from "./Components/Main/Maincontent";
import Routers from "./Routers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Maincontent />
      {/* <Routers /> */}
    </>
  );
}

export default App;
