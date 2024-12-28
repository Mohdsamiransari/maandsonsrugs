import React from "react";
import HeaderTitle, { CustomSection } from "../common/CommonUtility";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
import homeData from "../home/json/Home.json";


interface NewArrivalInterface {
    header: string;
    newArrivalCarousel: {
      carpetImg: string;
      hoverImg: string;
      carpetName: string;
      carpetType: string;
      price: string;
    }[];
  }

function SimilarRugs() {
    const newArrivalData: NewArrivalInterface = homeData.newArrival;
  return (
    <CustomSection>
      <HeaderTitle title="More of This Design" />
      <Carousel className=" ">
        <CarouselContent>
          {newArrivalData.newArrivalCarousel.map((data, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <Link href={"/rugs/one"} className="group relative">
                {/* Base Image */}
                <Image
                  src={data.carpetImg}
                  alt=""
                  className="w-full h-full max-h-[600px] transition-opacity duration-700 ease-in-out md:group-hover:opacity-0"
                  width={500}
                  height={500}
                />
                {/* Hover Image */}
                <Image
                  src={data.hoverImg}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full max-h-[600px] opacity-0 transition-opacity duration-700 ease-in-out md:group-hover:opacity-100"
                  width={500}
                  height={500}
                />
                <h4 className="mt-4 mb-1 text-base">{data.carpetName}</h4>
                <p className="text-xl">From ${data.price}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 top-[45%]" />
        <CarouselNext className="absolute right-1 top-[45%]" />
      </Carousel>
    </CustomSection>
  );
}

export default SimilarRugs;