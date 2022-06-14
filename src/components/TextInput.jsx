import { useState } from "react";

function TextInput({ label, iconPath, isInvalid }) {
  const [value, setValue] = useState("");

  const handleInputField = (e) => {
    const re = /[+-]?([0-9]*[.])?[0-9]+/;
    const currEl = e.target;

    if (!re.test(currEl.value)) {
      return;
    }
    setValue(currEl.value);
  };

  return (
    <div className=" w-[385px] bg-white">
      <div className="flex w-full justify-between mb-[10px] ">
        <label htmlFor="temp" className="text-cyan-300">
          {label}
        </label>
        <span className={`${isInvalid ? "text-danger" : ""}`}>{isInvalid && "can't be zero"}</span>
      </div>
      <div className={`w-full px-3 py-3 bg-cyan-600 flex justify-between items-center gap-2 rounded-sm ${isInvalid ? "ring-1 ring-offset-1 ring-danger" : ""}`}>
        <span className="flex-grow-1">
          <img src={iconPath} alt="dollar-icon" />
        </span>
        <input
          type="text"
          placeholder="0"
          value={value}
          onChange={handleInputField}
          className="flex-grow-2 outline-none text-[19px] text-right caret-cyan-200 bg-transparent placeholder:text-cyan-400 text-cyan-200"
          id="temp"
        />
      </div>
    </div>
  );
}

export default TextInput;