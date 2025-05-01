import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import HeaderTitle, { CustomSection } from "../common/CommonUtility";

import Link from "next/link";
import { getRugByCategory } from "@/lib/actions/rug.action";



export interface rugDetailInterface {
  _id: string;
  rugName: string;
  rugPrice: number;
  rugImg: string[];
  rugDescription: string;
  rugCode: string;
  rugSizes: string[];
  rugColors: string[];
  rugMaterials: string[];
  rugQuality: string;
  rugStyle: string;
  rugCategory: string[];
}

interface NewArrivalData {
  message: string;
  rugs: rugDetailInterface[];
}

async function NewArrival() {
  const newArrivalData: Partial<NewArrivalData> = await getRugByCategory(
    "Highlight"
  );

  return (
    <CustomSection>
      <HeaderTitle title={"New Arrival"} />
      <Carousel className=" ">
        <CarouselContent>
          {newArrivalData.rugs?.map(
            (data: rugDetailInterface, index: number) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <Link href={`/rugs/${data._id}`} className="group relative">
                  {/* Base Image */}
                  <Image
                    src={data.rugImg[0]}
                    alt=""
                    className="w-full h-full max-h-[600px] transition-opacity duration-700 ease-in-out md:group-hover:opacity-0"
                    width={500}
                    height={500}
                  />
                  {/* Hover Image */}
                  <Image
                    src={data.rugImg[1]}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full max-h-[600px] opacity-0 transition-opacity duration-700 ease-in-out md:group-hover:opacity-100"
                    width={500}
                    height={500}
                  />
                  <h4 className="mt-4 mb-1 text-base">{data.rugName}</h4>
                  {/* <p className="text-xl">From ${data.price}</p> */}
                </Link>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 top-[45%]" />
        <CarouselNext className="absolute right-1 top-[45%]" />
      </Carousel>
    </CustomSection>
  );
}

export default NewArrival;
