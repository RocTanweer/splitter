import RadioBtn from "./RadioBtn";

const radioData = [
  {
    id: 1,
    value: 5,
    name: "tip",
  },
  {
    id: 2,
    value: 10,
    name: "tip",
  },
  {
    id: 3,
    value: 15,
    name: "tip",
  },
  {
    id: 4,
    value: 25,
    name: "tip",
  },
  {
    id: 5,
    value: 50,
    name: "tip",
  },
];

function TipField({ tip, setTip }) {
  const handleTextField = (e) => {
    const currEl = e.target;
    setTip({ type: "text", value: +currEl.value });
  };

  return (
    <fieldset className="bg-white">
      <legend className="mb-[20px] text-cyan-300">Select Tip %</legend>

      <div className="grid grid-rows-2 grid-cols-3 place-items-center gap-y-4 gap-x-[14px] w-[380px]">
        {radioData.map((radio) => {
          const { id, value, name } = radio;
          return <RadioBtn key={id} id={id} radioValue={value} name={name} tip={tip} setTip={setTip} />;
        })}
        <input
          type="text"
          placeholder="Custom"
          name="tip"
          value={tip.type === "text" ? tip.value : ""}
          onChange={handleTextField}
          className="w-full h-full bg-cyan-600 rounded-sm placeholder:text-[23px] placeholder:text-cyan-300 placeholder:text-center text-right px-3 text-[23px] text-cyan-200 caret-cyan-200 outline-none "
        />
      </div>
    </fieldset>
  );
}

export default TipField;
