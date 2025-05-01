import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getRugByCategory } from "@/lib/actions/rug.action";
import { rugDetailInterface } from "./NewArrival";


interface NewArrivalData {
  message: string;
  rugs: rugDetailInterface[];
}
async function Hero() {
  const heroData: Partial<NewArrivalData> = await getRugByCategory("Hero");

  return (
    <section className=" h-[500px] md:h-dvh relative">
      <div
        className="w-full h-full absolute -z-10 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(102, 102, 102, .3)), url(${"/assets/home/hero-bg.png"}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="home-hero-container">
        <h2 className="home-hero-title">
          Elevate Every Room with Luxurious, Handcrafted Rugs
        </h2>
        <h4 className="home-hero-subtitle">MA&SONS - Style Meets Comfort</h4>
        <div className="homer-hero-hover-card-wrapper">
          {heroData.rugs?.map((data: rugDetailInterface, index: number) => (
            <Link key={index} href={`/rugs/${data._id}`}>
              <div className="group home-hero-hover-card">
                <Image
                  src={data.rugImg[0] ?? ""}
                  alt=""
                  className="home-hero-hover-card__image"
                  width={500}
                  height={500}
                />
                <div className="home-hero-hover-card__text">
                  <h4>{data.rugName}</h4>
                  <p>{data.rugStyle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
