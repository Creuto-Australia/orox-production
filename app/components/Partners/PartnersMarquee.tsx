import Marquee from "react-fast-marquee";
import Image from "next/image";

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
  return (
    <section className="py-4 sm:py-6 md:py-8 bg-[#0A0B1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <h2 className="text-base sm:text-sm font-medium md:w-36 md:shrink-0 mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
            Global partners working with OROX
          </h2>

          <div className="flex-1">
            <Marquee
              gradient={true}
              gradientColor="#0A0B1E"
              speed={40}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-12 px-4">
                {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={320}
                      height={128}
                      className="w-auto h-16 md:h-16 object-contain"
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
