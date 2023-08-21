import Image from "next/image";
import Vercel from "public/vercel.svg";
import ArrowIcon from "./arrow";

export default function Project({ img = Vercel ,name = "", link = "", description = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 rounded flex items-center justify-between px-3 py-4 w-full">
      <div className="h-24 w-full flex items-center justify-between space-x-6">
        <div className="relative w-20 items-center hidden md:flex">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="rounded-full h-16 w-16"
          />
        </div>
        <div className="flex flex-col flex-auto">
          <h1 className="font-bold mb-2 text-md lg:text-lg text-neutral-900 dark:text-neutral-100">{name}</h1>
          <p className="text-neutral-900 text-xs lg:text-sm dark:text-neutral-300">
            {description}
          </p>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 w-10">
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}
