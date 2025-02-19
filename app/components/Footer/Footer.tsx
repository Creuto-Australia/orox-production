import Image from "next/image";
import Link from "next/link";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { AppStoreButton } from "../ui/AppStoreButton";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: "/icons/socials/Item.svg",
    },
    {
      name: "Instagram",
      href: "#",
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
      href: "#",
      icon: "/icons/socials/Item-4.svg",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo and Description */}
          <div className="max-w-md flex flex-col justify-between h-full">
            <div className="space-y-6">
              <Image
                src="/images/logo-footer.png"
                alt="OROX Logo"
                width={116}
                height={40}
                className="h-16 w-auto"
              />
              <p className="text-[#19191B] max-w-[400px]">
                OROX puts your money on autopilot with AI-powered quantitative
                investing, risk-adjusted strategies, and secure
                blockchain-backed growth.
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-bold text-[#2F5DFD] hover:text-[#2F5DFD]"
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
            </div>

            <div className="flex flex-col gap-4 mt-64">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="grid grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-2">
                  {navigation.social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={30}
                        height={30}
                      />
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col items-end text-sm text-[#19191B]">
                  <p>© 2025 — Copyright</p>
                  <p>All Rights reserved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-12 lg:mt-0">
            {/* Download App Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-60">
              <h3 className="text-xl font-bold">Download app</h3>
              <div className="flex gap-2 flex-wrap">
                <PlayStoreButton href="https://play.google.com/store/apps/details?id=com.oroxlabs.app.android&hl=en_AU " />
                <AppStoreButton href="https://apps.apple.com/au/app/orox/id6452677869" />
              </div>
            </div>
            <hr className="my-8 border-t-2 border-[#999999]" />

            {/* Contact and Location Section */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 flex-grow mt-96">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact us</h3>
                <div className="space-y-2 text-gray-500">
                  <p>hello@oroxglobal.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="space-y-2 text-gray-500">
                  <p>2 Locomotive Street South Eveleigh, NSW 2015 Australia</p>
                  <p>201 Kent Street Sydney, NSW 2000 Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Disclaimer Section */}
      <div className="px-4 py-4 md:px-36 md:py-8 bg-[#EAF5FF] text-[#19191B] text-sm">
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
    </footer>
  );
};
