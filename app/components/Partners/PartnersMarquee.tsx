"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

const PARTNERS = [
  {
    name: "Binance",
    logo: "/images/partners/Logo Holder.png",
  },
  {
    name: "Trading Technologies",
    logo: "/images/partners/Logo Holder-1.png",
  },
  {
    name: "Ethereum",
    logo: "/images/partners/Logo Holder-2.png",
  },
  {
    name: "BitGo",
    logo: "/images/partners/Logo Holder-3.png",
  },
  {
    name: "Nosis",
    logo: "/images/partners/Logo Holder-4.png",
  },
  {
    name: "CQG",
    logo: "/images/partners/Logo Holder-5.png",
  },
];

export const PartnersMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-[#070926] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center overflow-hidden">
          <h2 className="text-base sm:text-sm font-medium md:w-36 md:shrink-0 mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
            Global partners working with OROX
          </h2>

          <div className="flex-1 overflow-hidden">
            <Marquee
              gradient={true}
              gradientColor="#070926"
              speed={60}
              className="overflow-hidden"
              gradientWidth={isMobile ? 50 : 100}
            >
              <div className="flex items-center gap-8 sm:gap-10 px-4 sm:px-10">
                {[
                  ...PARTNERS,
                  ...PARTNERS,
                  ...PARTNERS,
                  ...PARTNERS,
                  ...PARTNERS,
                  ...PARTNERS,
                ].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex items-center justify-center min-w-[120px] sm:min-w-[160px]"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={320}
                      height={128}
                      className="w-auto h-14 sm:h-16 md:h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};
