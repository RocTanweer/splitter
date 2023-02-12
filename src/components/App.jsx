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

  const [inputsState, setInputsState] = useState({
    Bill: { value: "", isInvalid: false },
    "Number of People": { value: "", isInvalid: false },
  });

  let tipAmountPerPerson = 0;
  let totalAmountPerPerson = 0;
  let totalBill = inputsState["Bill"].value;
  let totalPeople = inputsState["Number of People"].value;

  if (totalBill && totalPeople) {
    let totalTip = tip.value ? totalBill * (tip.value / 100) : 0;
    totalAmountPerPerson = ((totalBill + totalTip) / totalPeople).toFixed(2);
    tipAmountPerPerson = (totalTip / totalPeople).toFixed(2);
  }

  function handleInputs(newValue, label) {
    let update1 = {
      ...inputsState,
      [label]: { ...inputsState[label], value: newValue, isInvalid: false },
    };

    Object.keys(inputsState).forEach((inputLabel) => {
      if (inputLabel === label) return;

      if (!inputsState[inputLabel].value) {
        update1 = {
          ...update1,
          [inputLabel]: {
            ...inputsState[inputLabel],
            isInvalid: true,
          },
        };
      }
      setInputsState(update1);
    });
  }

  return (
    <main className="flex justify-center items-center w-full h-auto md:h-screen bg-cyan-500">
      <div className="flex justify-between items-center flex-col gap-10 md:gap-0 w-full md:w-[923px] h-auto md:h-[624px] mx-auto py-14 md:p-0  md:-translate-y-9">
        <div className="">
          <h1 id="heading" className="absolute text-[0px] opacity-0">
            Splitter
          </h1>
          <a href="/">
            <img
              src={logo}
              alt="Splitter"
              aria-labelledby="heading"
              className="mx-auto cursor-pointer"
            />
          </a>
        </div>

        <section className="flex justify-evenly items-center flex-col md:flex-row gap-9 md:gap-0 w-[90vw] md:w-full h-auto md:h-[482px] p-5 md:p-0 bg-white rounded-sm">
          <form className="flex justify-between items-center flex-col w-full md:w-[381px] h-[382px] rounded-sm">
            <TextInput
              label="Bill"
              iconPath={dollarIcon}
              value={inputsState["Bill"]}
              onChange={handleInputs}
            />
            <TipField tip={tip} setTip={setTip} />
            <TextInput
              label="Number of People"
              iconPath={personIcon}
              value={inputsState["Number of People"]}
              onChange={handleInputs}
            />
          </form>
          <div className="flex justify-center items-center w-full md:w-[413px] h-auto md:h-[417px] rounded-sm bg-cyan-200 p-3 md:p-0">
            <div className="flex justify-between items-center md:translate-y-2.5 flex-col w-full md:w-[335px] h-auto md:h-[319px]">
              <div className="flex justify-center gap-5 md:gap-0 md:justify-between flex-col items-center w-full h-36">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-sm md:text-base text-white">
                      Tip Amount
                    </p>
                    <p className="text-xs text-cyan-400">/ person</p>
                  </div>

                  <p className="text-cyan-100 text-4xl md:text-5xl">
                    ${tipAmountPerPerson}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs md:text-base text-white">
                      Total Amount
                    </p>
                    <p className="text-xs text-cyan-400">/ person</p>
                  </div>

                  <p className="text-cyan-100 text-4xl md:text-5xl">
                    ${totalAmountPerPerson}
                  </p>
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
