import { useState } from "react";

import "../styles/globals.css";

// Custom Components
// import TextInput from "./TextInput";
import TipField from "./TipField";

// Media
// import dollarIcon from "../assets/icon-dollar.svg";
// import personIcon from "../assets/icon-person.svg";

function App() {
  const [tip, setTip] = useState({});

  return (
    <main className="w-full h-screen bg-cyan-500">
      <TipField tip={tip} setTip={setTip} />
    </main>
  );
}
export default App;
