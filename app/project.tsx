import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Vercel from "public/vercel.svg";
import ArrowIcon from "./arrow";

export default function Project({
  img = Vercel,
  name = "",
  link = "",
  description = "",
}) {
  const isLive = link !== "not-live";
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (!isLive) {
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <a
        href={isLive ? link : undefined}
        target={isLive ? "_blank" : undefined}
        className={`cursor-pointer border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 rounded flex items-center justify-between px-3 py-4 w-full`}
        onClick={handleClick}
      >
        <div className="h-24 w-full flex items-center justify-between space-x-6">
          <div className={`relative w-20 items-center hidden md:flex`}>
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="rounded-full h-16 w-16"
            />
          </div>
          <div className={`flex flex-col flex-auto`}>
            <h1 className="font-bold mb-2 text-md lg:text-lg text-neutral-900 dark:text-neutral-100">
              {name}
            </h1>
            <p className="text-neutral-900 text-xs lg:text-sm dark:text-neutral-300">
              {description.length > 80
                ? `${description.slice(0, 50)}...`
                : description}
            </p>
          </div>
          {isLive && (
            <div className="text-neutral-700 dark:text-neutral-300 w-10">
              <ArrowIcon />
            </div>
          )}
        </div>
      </a>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center cursor-pointer bg-white/80 dark:bg-[#111010]/80"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            ref={popupRef}
            className="h-1/3 w-1/2 bg-neutral-50 dark:bg-neutral-900 p-8 rounded flex"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                alt={name}
                src={img}
                height={64}
                width={64}
                sizes="33vw"
                className="rounded-full h-30 w-30"
              />
            </div>

            {/* Name and Description */}
            <div className="ml-4">
              <h2 className="text-2xl font-bold mb-4">{name}</h2>
              <p className="text-neutral-900 text-xs lg:text-sm dark:text-neutral-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
