import { useState } from "react";

function Details({ details }) {
  const [showDetails, setShowDetails] = useState([]);

  const handleDisplayDetails = (index) => {
    if (showDetails.some((item) => item === index)) {
      setShowDetails(showDetails.filter((item) => item !== index));
    } else setShowDetails((prev) => [...prev, index]);
  };

  return (
    <div className="w-full sm:w-[608px] h-fit lg:sticky lg:top-[10rem] left-0">
      <h2 className="lg:w-[478px] text-3xl md:text-[40px] lg:text-[56px] font-bold sm:leading-[62px] mb-7">
        Find Signals That Close Deals
      </h2>
      {details.map((item, index) => (
        <div
          key={item.id}
          id={index}
          className="flex flex-col min-h-[76px] justify-between bg-primary/20 px-6 py-5 rounded-2xl my-4"
        >
          <div className="flex justify-between">
            <h4 className="font-bold text-[22px]">{item.title}</h4>
            <img
              src="/icons/caret_down_default.svg"
              alt="caret"
              className={`cursor-pointer ${
                showDetails.includes(index) ? "rotate-180" : ""
              }`}
              onClick={() => handleDisplayDetails(index)}
            />
          </div>
          {showDetails.includes(index) && (
            <>
              <h6 className="text-xl leading-9 font-normal">{item.question}</h6>
              {item.average && (
                <span className="inline-block">
                  <span className="font-bold">Average:</span> {item.average}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Details;
