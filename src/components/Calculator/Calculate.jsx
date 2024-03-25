import { useEffect, useState } from "react";

function Calculate() {
  const [inputValue, setInpuValue] = useState({
    teamMembers: 10,
    sizeOfNetwork: 2000,
    signalsPerContact: 0.5,
    legitimateSignals: 10,
    hardToDiscoverSignals: 20,
  });
  const [newSignals, setNewSignals] = useState(0);

  useEffect(() => {
    setNewSignals(
      inputValue.teamMembers *
        inputValue.sizeOfNetwork *
        inputValue.signalsPerContact *
        (inputValue.legitimateSignals / 100) *
        (inputValue.hardToDiscoverSignals / 100)
    );
  }, [inputValue]);
  return (
    <div className="w-full sm:w-[600px] h-fit shadow-2xl rounded-3xl overflow-hidden">
      <div className="bg-primary/10 flex flex-col rounded-3xl m-5 px-5 py-6 gap-3">
        <h5 className="text-[18px] font-bold leading-[26px]">
          Number of Team Members
        </h5>
        <input
          type="number"
          value={inputValue.teamMembers}
          min={0}
          onChange={(e) =>
            setInpuValue((prev) => ({
              ...prev,
              teamMembers: e.target.value,
            }))
          }
          className="outline-none bg-primary/10 rounded-full text-[18px] px-5 py-4"
        />
      </div>
      <div className="bg-primary/10 flex flex-col rounded-3xl m-5 px-5 py-6 gap-3">
        <h5 className="text-[18px] font-bold leading-[26px]">
          Size of Network:
        </h5>
        <input
          type="number"
          value={inputValue.sizeOfNetwork}
          min={0}
          onChange={(e) =>
            setInpuValue((prev) => ({
              ...prev,
              sizeOfNetwork: e.target.value,
            }))
          }
          className="outline-none bg-primary/10 rounded-full text-[18px] px-5 py-4"
        />
      </div>
      <div className="bg-primary/10 flex flex-col rounded-3xl m-5 px-5 py-6 gap-3">
        <h5 className="text-[18px] font-bold leading-[26px]">
          Number of Signals Per Contact:
        </h5>
        <input
          type="number"
          value={inputValue.signalsPerContact}
          min={0}
          onChange={(e) =>
            setInpuValue((prev) => ({
              ...prev,
              signalsPerContact: e.target.value,
            }))
          }
          className="outline-none bg-primary/10 rounded-full text-[18px] px-5 py-4"
        />
      </div>
      <div className="bg-primary/10 flex flex-col rounded-3xl m-5 px-5 py-6 gap-3">
        <h5 className="text-[18px] font-bold leading-[26px]">
          Percent of Legitimate Signals:
        </h5>
        <div className="flex items-center">
          <span className="font-bold">0</span>
          <div className="relative flex w-full px-4 select-none">
            <input
              type="range"
              min="0"
              max="100"
              value={inputValue.legitimateSignals}
              onChange={(e) =>
                setInpuValue((prev) => ({
                  ...prev,
                  legitimateSignals: e.target.value,
                }))
              }
              className="outline-none"
            />
            <span
              style={{
                left: `${(inputValue.legitimateSignals / 100) * 84 + 6}%`,
              }}
              className="absolute -top-[8px]"
            >
              {inputValue.legitimateSignals}
            </span>
          </div>
          <span className="font-bold">100</span>
        </div>
      </div>
      <div className="bg-primary/10 flex flex-col rounded-3xl m-5 px-5 py-6 gap-3">
        <h5 className="text-[18px] font-bold leading-[26px]">
          Percent of Hard to Discover Signals:
        </h5>
        <div className="flex items-center">
          <span className="font-bold">0</span>
          <div className="relative flex w-full px-4 select-none">
            <input
              type="range"
              min="0"
              max="100"
              value={inputValue.hardToDiscoverSignals}
              onChange={(e) =>
                setInpuValue((prev) => ({
                  ...prev,
                  hardToDiscoverSignals: e.target.value,
                }))
              }
              className="outline-none"
            />
            <span
              style={{
                left: `${(inputValue.hardToDiscoverSignals / 100) * 84 + 6}%`,
              }}
              className="absolute -top-[8px]"
            >
              {inputValue.hardToDiscoverSignals}
            </span>
          </div>
          <span className="font-bold z-0">100</span>
        </div>
      </div>
      <div className="bg-primary/10 flex flex-col rounded-3xl m-5 px-5 py-6 gap-3">
        <h5 className="text-xl font-bold leading-[26px]">
          NUMBER OF NEW SIGNALS
        </h5>
        <p className="range-slider outline-none bg-primary-gray/5 rounded-full text-[18px] px-5 py-4 font-medium">
          {Math.round(newSignals)}
        </p>
      </div>
    </div>
  );
}

export default Calculate;
