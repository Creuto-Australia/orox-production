import Image from "next/image";

interface StoreButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

export const AppStoreButton = ({ href, target, rel }: StoreButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-block transition-opacity hover:opacity-80"
    >
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
