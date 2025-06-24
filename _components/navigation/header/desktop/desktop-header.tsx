import Link from "next/link";

import Image from "next/image";
import DesktopHeaderNav from "./desktop-header-nav";

export function DesktopHeader() {
  return (
    <div className="hidden desktop:flex items-center justify-between h-[90px]">
      <Link href="/" className="flex items-center hover:opacity-95">
        <Image
          src="/logo/amq-logo.svg"
          alt="Auto Marketplace QLD logo"
          width={72}
          height={72}
        />
        <div className="relative -ml-1">
          <h1 className="text-white text-[28px] leading-[28px] font-bold tracking-[0.030rem]">
            Auto <span className="text-yellow">Marketplace</span> QLD
          </h1>
          <div className="absolute top-[24.5px] right-0 flex gap-[1px] place-self-end bg-blue z-50">
            <h2 className="text-white text-[9px] leading-[9px] italic font-light">
              Sell smarter. Faster. Online.
            </h2>
            <Image
              src="/icons/car.svg"
              alt="Sell smarter. Faster. Online."
              width={15}
              height={8}
            />
          </div>
        </div>
      </Link>
      <DesktopHeaderNav />
    </div>
  );
}
