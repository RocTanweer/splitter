function RadioBtn({ id, radioValue, name, tip, setTip }) {
  const handleRadioField = (e) => {
    const currEl = e.target;
    setTip({ type: "radio", value: +currEl.value });
  };

  return (
    <div className="relative w-[117px] h-[48px] text-center">
      <input
        type="radio"
        checked={tip.type === "radio" && tip.value === radioValue}
        id={id}
        name={name}
        value={radioValue}
        onChange={handleRadioField}
        className="absolute top-1 left-1 opacity-0 peer"
      />
      <label
        htmlFor={id}
        className="w-full h-full py-[14px] block bg-cyan-200 text-white text-[20px] rounded-sm cursor-pointer peer-checked:bg-cyan-100 peer-checked:text-cyan-200 hover:bg-cyan-500 hover:text-cyan-200 transition duration-300 ease-in-out"
      >
        {`${radioValue}%`}
      </label>
    </div>
  );
}

export default RadioBtn;
