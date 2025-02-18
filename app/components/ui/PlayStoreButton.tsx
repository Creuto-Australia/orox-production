import Image from "next/image";

export const PlayStoreButton = () => {
  return (
    <a href="#" className="inline-block transition-opacity hover:opacity-80">
      <Image
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        width={270}
        height={80}
        className="h-10 w-auto"
      />
    </a>
  );
};
