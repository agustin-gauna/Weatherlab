import React from "react";

import { UilEye } from "@iconscout/react-unicons";

const VisibilityInfo = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col gap-2 lg:px-8">
      <div className="flex gap-1 items-center ">
        <UilEye size={24} />
        <h4 className="font-bold">Visibility</h4>
      </div>

      <div className="flex items-end">
        <p className="font-bold text-3xl">10</p>
        <p>km</p>
      </div>
    </div>
  );
};

export default VisibilityInfo;
