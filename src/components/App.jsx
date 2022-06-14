import { useState } from "react";

import "../styles/globals.css";

// Custom Components
import TextInput from "./TextInput";
import TipField from "./TipField";

// Media
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";
import logo from "../assets/logo.svg";

function App() {
  const [tip, setTip] = useState({});

  return (
    <main className="flex justify-center items-center w-full h-screen bg-cyan-500">
      <div className="flex justify-between items-center flex-col w-[923px] h-[624px] mx-auto -translate-y-9">
        <div className="">
          <h1 id="heading" className="absolute text-[0px] opacity-0">
            Splitter
          </h1>
          <a href="/">
            <img src={logo} alt="Splitter" aria-labelledby="heading" className="mx-auto cursor-pointer" />
          </a>
        </div>

        <section className="flex justify-evenly items-center w-full h-[482px] bg-white rounded-sm">
          <form className="flex justify-between items-center flex-col w-[381px] h-[382px] rounded-sm">
            <TextInput label="Bill" iconPath={dollarIcon} isInvalid={false} />
            <TipField tip={tip} setTip={setTip} />
            <TextInput label="Number of People" iconPath={personIcon} isInvalid={false} />
          </form>
          <div className="flex justify-center items-center w-[413px] h-[417px] rounded-sm bg-cyan-200">
            <div className="flex justify-between items-center translate-y-2.5 flex-col w-[335px] h-[319px]">
              <div className="flex justify-between flex-col items-center w-full h-36">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-white">Tip Amount</p>
                    <p className="text-xs text-cyan-400">/ person</p>
                  </div>

                  <p className="text-cyan-100 text-5xl">$0.00</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-white">Total Amount</p>
                    <p className="text-xs text-cyan-400">/ person</p>
                  </div>

                  <p className="text-cyan-100 text-5xl">$0.00</p>
                </div>
              </div>

              <button className="w-full bg-cyan-100 text-cyan-200 py-3 text-xl rounded-sm uppercase hover:bg-cyan-500 transition duration-300 ease-in-out focus-visible:bg-cyan-500 focus-visible:outline-none active:bg-cyan-100">
                Reset
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default App;
