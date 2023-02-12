function TextInput({ label, iconPath, value, onChange }) {
  const { value: inputVal, isInvalid } = value;

  const handleInputField = (e) => {
    onChange(+e.target.value, label);
  };

  return (
    <div className="w-full md:w-96 bg-white">
      <div className="flex w-full justify-between mb-[10px] ">
        <label htmlFor="temp" className="text-cyan-300">
          {label}
        </label>
        <span className={`${isInvalid ? "text-danger" : ""}`}>
          {isInvalid && "can't be zero"}
        </span>
      </div>
      <div
        className={`w-full px-3 py-3 bg-cyan-600 flex justify-between items-center gap-2 rounded-sm ${
          isInvalid ? "ring-1 ring-offset-1 ring-danger" : ""
        }`}
      >
        <span className="flex-grow-1">
          <img src={iconPath} alt="dollar-icon" />
        </span>
        <input
          type="number"
          placeholder="0"
          value={inputVal}
          onChange={handleInputField}
          className="flex-grow-2 outline-none text-[19px] text-right caret-cyan-200 bg-transparent placeholder:text-cyan-400 text-cyan-200 "
          id="temp"
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default TextInput;
