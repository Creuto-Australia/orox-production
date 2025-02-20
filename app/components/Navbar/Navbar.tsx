"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isQROpen, setIsQROpen] = useState(false);
  const qrModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (qrModalRef.current && !qrModalRef.current.contains(event.target as Node)) {
        setIsQROpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
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
            className="relative flex h-10 w-10 items-center justify-center"
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
              <div ref={qrModalRef} className="absolute right-0 top-full mt-4 w-80 rounded-lg bg-white p-4 shadow-lg">
                <div className="space-y-4">
                  <Image
                    src="/images/qr-code.jpg"
                    alt="OROX App QR Code"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                  <div className="text-center">
                    <span className="text-sm text-gray-500">OR</span>
                  </div>
                  <button className="flex w-full items-center justify-center space-x-2 rounded-full border border-[#78CAB9] px-4 py-2 text-gray-600 hover:bg-gray-50">
                    <Image
                      src="/icons/download.svg"
                      alt="Download Icon"
                      width={20}
                      height={20}
                      className="h-6 w-6"
                    />
                    <span className="font-bold text-[#293483]">Install APK</span>
                  </button>

                  <button
                    onClick={() => setIsQROpen(false)}
                    className="flex w-full items-center justify-end space-x-1 px-3 py-1 text-sm text-blue-600"
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
                    <span>Close</span>
                  </button>
                </div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
