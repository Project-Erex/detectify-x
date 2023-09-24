import {useState} from "react";

// import Sidebar from './Components/Sidebar/Sidebar'

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
