import React from "react";

function Industries() {
 
  return (
    <div className="absolute w-[704px] z-20 text-black top-6 -left-[19.25rem] invisible group-hover:visible">
      <div className="mt-4 bg-white rounded-xl">
        <div className="relative">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-8 h-8 rotate-45 bg-white"></span>
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-solid border-4 border-transparent"></span>
        </div>
        <h3 className="flex items-center gap-2 mx-6 py-4 text-2xl border-b-2">
          Industries
          <img src="/icons/arrow_forward_default.svg" alt="" className="mt-1" />
        </h3>
        
        <ul className="grid grid-cols-2">
          <li className="mx-6 py-4 border-b-2">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/private_equity.svg" alt="" />
              <span className="no-underline underline-offset-4 group-hover/item:underline">Private Equity</span>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/investment_banking.svg" alt="" />
              <span className="no-underline underline-offset-4 group-hover/item:underline">Investment Banking/M&A Advisory</span>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/venture_capital.svg" alt="" />
              <span className="no-underline underline-offset-4 group-hover/item:underline">Venture Capital</span>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/corporate_development.svg" alt="" />
              <span className="no-underline underline-offset-4 group-hover/item:underline">Corporate Devolopment / M&A</span>
            </div>
          </li>
          <li className="mx-6 py-4">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/commercial_real_estate.svg" alt="" />
              <span className="no-underline underline-offset-4 group-hover/item:underline">Commercial Real Estate</span>
            </div>
          </li>
          <li className="mx-6 py-4">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/consulting_crm.svg" alt="" />
              <span className="no-underline underline-offset-4 group-hover/item:underline">Consulting CRM</span>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  );
}

export default Industries;
