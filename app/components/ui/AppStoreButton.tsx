import Image from "next/image";

export const AppStoreButton = () => {
  return (
    <a href="#" className="inline-block transition-opacity hover:opacity-80">
      <Image
        src="/app-store-badge.png"
        alt="Download on the App Store"
        width={270}
        height={80}
        className="h-10 w-auto"
      />
    </a>
  );
};
