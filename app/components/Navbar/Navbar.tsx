"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isQROpen, setIsQROpen] = useState(false);
  const qrModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        qrModalRef.current &&
        !qrModalRef.current.contains(event.target as Node)
      ) {
        setIsQROpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-2 md:px-0 py-5 border-b border-[#F4F4F4]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="OROX"
            width={116}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* QR Code Button */}
          <button
            onClick={() => setIsQROpen(!isQROpen)}
            className="relative flex h-12 w-12 items-center justify-center hover:bg-[#E9E9EF] rounded-[8px] p-2"
          >
            <Image
              src="/icons/QR.svg"
              alt="QR Icon"
              width={20}
              height={20}
              className="h-8 w-8"
            />

            {/* QR Code Modal */}
            {isQROpen && (
              <div
                ref={qrModalRef}
                className="fixed sm:absolute inset-0 sm:inset-auto sm:right-0 sm:top-full bg-white
                          sm:mt-5 sm:w-64 md:w-80 sm:rounded-b-xl sm:border sm:border-[#F4F4F4] sm:p-8
                          flex flex-col sm:block shadow-[0px_8px_32px_0px_rgba(0,0,0,0.15)]"
              >
                <div className="w-full h-full flex flex-col sm:block max-w-[90%] sm:w-auto mx-auto">
                  {/* Close button for mobile - top right */}
                  <button
                    onClick={() => setIsQROpen(false)}
                    className="absolute right-4 top-4 p-2 text-[#293483] sm:hidden"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="bg-white rounded-2xl p-6 sm:p-0 h-full flex flex-col">
                    <div className="flex flex-col h-full sm:h-auto">
                      {/* QR Code - at the top */}
                      <div className="flex-1 flex items-center justify-center sm:block pt-8 sm:pt-0 mb-8">
                        <Image
                          src="/images/qr-code.png"
                          alt="OROX App QR Code"
                          width={300}
                          height={300}
                          className="w-[240px] max-w-[300px] h-auto"
                        />
                      </div>

                      {/* Bottom section with OR and Install APK - pushed to bottom on mobile */}
                      <div className="mt-auto sm:mt-0 space-y-6 sm:space-y-4">
                        <div className="flex items-center justify-center space-x-2 w-full">
                          <hr className="w-full h-[1px] bg-[#C9CCE0]" />
                          <span className="text-xs text-[#293483] whitespace-nowrap px-2">
                            OR
                          </span>
                          <hr className="w-full h-[1px] bg-[#C9CCE0]" />
                        </div>

                        <a
                          href="https://onelink.to/65gpe9"
                          className="flex w-full items-center justify-center space-x-2 rounded-full border border-[#78CAB9] px-6 py-2 text-gray-600 hover:bg-gray-50 text-[14px]"
                        >
                          <Image
                            src="/icons/download.svg"
                            alt="Download Icon"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                          />
                          <span className="font-semibold text-[#293483] text-[14px]">
                            Install APK
                          </span>
                        </a>

                        <button
                          onClick={() => setIsQROpen(false)}
                          className="hidden sm:flex w-full items-center justify-end space-x-1 text-sm text-[#2F5DFD]"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="font-semibold">Close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
