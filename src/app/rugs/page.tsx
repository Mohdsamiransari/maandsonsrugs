import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import { CustomSection, Divider } from "@/components/common/CommonUtility";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Divider ></Divider>
      <Divider ></Divider>
      <BreadCrumb/>
      <Divider ></Divider>
      <CustomSection>
        <div className="grid grid-cols-12 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="sm:col-span-4 lg:col-span-3">
              <Link href={"/rugs/one"} className="group relative">
                {/* Base Image */}
                <Image
                  src={"/assets/home/new_arrival_2.jpg"}
                  alt=""
                  className="w-full h-full max-h-[450px] transition-opacity duration-700 ease-in-out md:group-hover:opacity-0"
                  width={500}
                  height={500}
                />
                {/* Hover Image */}
                <Image
                  src={"/assets/home/new_arrival_3.jpg"}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full max-h-[450px] opacity-0 transition-opacity duration-700 ease-in-out md:group-hover:opacity-100"
                  width={500}
                  height={500}
                />
                <h4 className="mt-4 mb-1 text-base">dsdlkjafkdaf</h4>
                <p className="text-xl">From $34534,34</p>
              </Link>
            </div>
          ))}
        </div>
      </CustomSection>
      <Divider ></Divider>

    </div>
  );
}

export default page;