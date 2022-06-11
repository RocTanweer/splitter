import "../styles/globals.css";

// Custom Components
import TextInput from "./TextInput";

// Media
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

function App() {
  return (
    <main className="w-full h-screen bg-cyan-500">
      <TextInput label="Bill" iconPath={dollarIcon} isInvalid={false} />
      <br />
      <TextInput label="Number of People" iconPath={personIcon} isInvalid={false} />
    </main>
  );
}
export default App;
