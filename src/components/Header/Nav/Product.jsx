

function Product() {
  return (
    <div className="absolute w-[924px] z-20 text-black top-6 -left-[27rem] invisible group-hover:visible">
      <div className="mt-4 bg-white rounded-xl">
        <div className="relative">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-8 h-8 rotate-45 bg-white"></span>
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-solid border-4 border-transparent"></span>
        </div>
        <h3 className="flex items-center gap-2 mx-6 py-4 text-2xl border-b-2">
          Product
          <img src="/icons/arrow_forward_default.svg" alt="" className="mt-1" />
        </h3>
        <ul className="grid grid-cols-2">
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/crm.svg" alt="" className="" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">CRM</h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  Eliminate busywork and manage deals
                </p>
              </div>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img
                src="/icons/relationship_intelligence.svg"
                alt=""
                className="w-[50px]"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">
                  Relationship Intelligence
                </h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  Uncover new opportunities and find warm introductions
                </p>
              </div>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/reporting.svg" alt="" className="w-[50px]" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">Reporting</h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  Drive Efficiency to Close More Deals
                </p>
              </div>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/mobile.svg" alt="" className="w-[50px]" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">Mobile</h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  Manage Deals From Anywhere
                </p>
              </div>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img src="/icons/integrations.svg" alt="" className="w-[50px]" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">Integrations</h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  Use Relationship Intelligence Everywhere
                </p>
              </div>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 w-fit group/item cursor-pointer">
              <img
                src="/icons/deal_flow_software.svg"
                alt=""
                className="w-[50px]"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">Deal Flow Software</h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  Easily Manage Your Deals
                </p>
              </div>
            </div>
          </li>
          <li className="mx-6 py-4 border-b-2 flex items-center">
            <div className="flex items-center gap-4 group/item cursor-pointer w-[340px]">
              <img src="/icons/salesforce.svg" alt="" className="w-[50px]" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold">Salesforce</h4>
                <p className="text-sm font-normal no-underline underline-offset-4 group-hover/item:underline">
                  The Power of Relationship Intelligence Inside Salesforce
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
