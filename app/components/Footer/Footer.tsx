import Image from "next/image";
import Link from "next/link";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { AppStoreButton } from "../ui/AppStoreButton";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/oroxapp/",
      icon: "/icons/socials/Item.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/oroxapp?igsh=MXJxYW5hMTY3Y3J5OQ%3D%3D&utm_source=qr",
      icon: "/icons/socials/Item-1.svg",
    },
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: "/icons/socials/Item-2.svg",
    // },
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: "/icons/socials/Item-3.svg",
    // },
    {
      name: "Twitter",
      href: "https://x.com/oroxapp?s=11",
      icon: "/icons/socials/Item-4.svg",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-[36px]">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Main Content Column */}
          <div className="w-full lg:max-w-md">
            {/* Logo */}
            <Image
              src="/images/logo-footer.png"
              alt="OROX Logo"
              width={116}
              height={40}
              className="h-16 w-auto mb-6"
            />

            {/* Description */}
            <p className="text-[#19191B] max-w-[400px] mb-6 text-[16px]">
              OROX puts your money on autopilot with AI-powered quantitative
              investing, risk-adjusted strategies and secure blockchain-backed
              growth.
            </p>

            {/* More About Us Button */}
            <Link
              href="https://www.opusmomentus.com/"
              className="inline-flex items-center font-bold text-[#2F5DFD] hover:text-[#2F5DFD] mb-12 text-[14px]"
            >
              <span>More about us</span>
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H12M12 4V12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Download App Section */}
            <div className="lg:hidden">
              <h3 className="text-[18px] font-bold mb-4">Download app</h3>
              <div className="flex gap-2 flex-wrap mb-8">
                <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU " />
                <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
              </div>
            </div>

            {/* Divider */}
            <hr className="lg:hidden border-t-2 border-[#999999] mb-8" />

            {/* Contact and Location */}
            <div className="lg:hidden mb-12">
              <div className="mb-8">
                <h3 className="text-[20px] font-bold mb-[24px]">Contact us</h3>
                <div className="space-y-2 text-black/50 text-[14px]">
                  {/* <p>+61 2XX XXX XXX</p> */}
                  <p>hello@oroxglobal.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] font-bold mb-[24px]">Location</h3>
                <div className="space-y-2 text-black/50 text-[14px]">
                  <p>2 Locomotive Street, South Eveleigh NSW 2015 Australia</p>
                  <p>201 Kent Street, Sydney NSW 2000 Australia</p>
                </div>
              </div>
            </div>

            {/* Social Icons and Copyright */}
            <div className="flex justify-between items-center md:mt-36 mt-24">
              <div className="grid grid-flow-col grid-rows-2 gap-x-2 gap-y-2 w-fit">
                {navigation.social.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className={`text-gray-400 hover:text-gray-600 ${
                      index === 0 ? "col-span-2 justify-self-start" : ""
                    }`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={36}
                      height={36}
                    />
                  </Link>
                ))}
              </div>
              <div className="text-[12px] text-[#19191B] text-right">
                <p>© 2025 — Copyright</p>
                <p>All Rights reserved</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-12 lg:mt-0">
            {/* Download App Section */}
            <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-60">
              <h3 className="text-[28px] font-bold">Download app</h3>
              <div className="flex gap-2 flex-wrap">
                <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU " />
                <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
              </div>
            </div>
            <hr className="my-8 border-t-2 border-[#999999] hidden lg:block" />

            {/* Contact and Location Section */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-8 sm:gap-20 flex-grow mt-72">
              <div>
                <h3 className="text-[20px] font-bold mb-[24px]">Contact us</h3>
                <div className="space-y-2 text-black/50 text-[14px]">
                  <p>hello@oroxglobal.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-[20px] font-bold mb-6">Location</h3>
                <div className="space-y-4 text-black/50 text-[14px]">
                  <p>2 Locomotive Street South Eveleigh, NSW 2015 Australia</p>
                  <p>201 Kent Street Sydney, NSW 2000 Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Disclaimer Section */}
      <div className="bg-[#EAF5FF] text-[#19191B]/60 text-[12px]">
        <div className="max-w-7xl mx-4 md:mx-auto py-8 md:py-8">
          <p>© 2025 Opus Momentus Proprietary Ltd. All Rights Reserved.</p>
          <br />
          <p>
            The materials on this website are for illustration and discussion
            purposes only and do not constitute an offering. An offering may be
            made only by delivery of a confidential offering memorandum to
            appropriate investors. PAST PERFORMANCE IS NO GUARANTEE OF FUTURE
            RESULTS.
          </p>
        </div>
      </div>
    </footer>
  );
};
