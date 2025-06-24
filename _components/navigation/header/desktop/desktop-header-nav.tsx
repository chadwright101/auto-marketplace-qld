"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

interface NavItem {
  title: string;
  url: string;
  submenu?: {
    title: string;
    url: string;
  }[];
}

const DesktopHeaderNav = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <nav className="self-end">
      <ul className="flex gap-5 items-center min-[1700px]:gap-50px">
        {(navData as NavItem[]).map((item, id) => {
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <li
              key={id}
              className="relative"
              onMouseEnter={() => setActiveId(id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <Link
                href={item.url}
                className={classNames("text-paragraph flex items-center", {
                  "text-white": activeId !== id,
                  "text-yellow": activeId === id,
                })}
              >
                {item.title}
                {hasSubmenu && (
                  <ChevronDown
                    size={30}
                    strokeWidth={1.5}
                    color={activeId === id ? "#FFFD01" : "#FFFFFF"}
                    className={classNames("transition-transform duration-200", {
                      "rotate-180": activeId === id,
                    })}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {hasSubmenu && (
                <div
                  className={classNames(
                    "absolute top-full left-0  z-50 transition-all duration-200",
                    {
                      "opacity-100 visible translate-y-0": activeId === id,
                      "-translate-x-[34px] min-w-[150px] min-[1700px]:-translate-x-12 min-[1700px]:min-w-[180px]":
                        item.title === "About",
                      "translate-x-3.5": item.title === "Dealership Portal",
                      "opacity-0 invisible -translate-y-2": activeId !== id,
                    }
                  )}
                >
                  <div className="h-[30px] w-full bg-blue"></div>
                  <div className="bg-[#3B3B3C]">
                    {item.submenu!.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.url}
                        className="block px-5 py-2.5 text-white hover:bg-yellow hover:text-black transition-colors duration-200 min-[1700px]:px-8"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
        <li>
          <Link
            href="sell-my-car"
            aria-label="Sell My Car"
            className="px-6 bg-yellow min-[1700px]:px-[75px] h-[90px] flex items-center justify-center gap-3 ease-in-out duration-200"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            <h3
              className={classNames(
                "text-subheading  ease-in-out duration-200",
                {
                  "scale-[98%] translate-x-[1px]": ctaHover,
                }
              )}
            >
              Sell My Car
            </h3>
            <Image
              src="/icons/click.svg"
              alt="Sell My Car"
              width={62}
              height={50}
              className={classNames(
                "h-auto w-12 min-[1700px]:w-[62px] ease-in-out duration-200",
                {
                  "scale-[98%] -translate-x-[1px]": ctaHover,
                }
              )}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopHeaderNav;
