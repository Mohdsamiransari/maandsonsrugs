import React from "react";
import { CustomSection } from "../common/CommonUtility";
// import SelectColor from "./components/SelectColor";
import SelectSize from "./components/SelectSize";
import RugDetail from "./components/RugDetail";
import RugImages from "./components/RugImages";
import { getSingleRug } from "@/lib/actions/rug.action";
import { rugDetailInterface } from "../home/NewArrival";



interface SingleRugPros {
  message: string;
  rug: rugDetailInterface;
}

async function SingleRug({ slug }: { slug: string }) {
  const singleRugData: Partial<SingleRugPros> = await getSingleRug(slug);
  return (
    <CustomSection>
      <div className="grid grid-cols-12 gap-4 relative">
        <RugImages images={singleRugData?.rug?.rugImg ?? []} />
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between items-center">
            <h4 className="text-base">{singleRugData?.rug?.rugStyle}</h4>
            <h4 className="text-base text-[#666666]">
              {singleRugData?.rug?.rugCode}
            </h4>
          </div>
          <h2 className="text-3xl mt-4 mb-2">{singleRugData?.rug?.rugName}</h2>
          <p className="text-lg text-[#444444]">
            {singleRugData?.rug?.rugDescription}
          </p>
          {/* <SelectColor /> */}
          <SelectSize sizeData={singleRugData?.rug?.rugSizes ?? []} />
          <RugDetail details={singleRugData?.rug?.rugMaterials ?? []} />
        </div>
      </div>
    </CustomSection>
  );
}

export default SingleRug;
