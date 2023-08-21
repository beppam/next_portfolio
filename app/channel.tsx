import Image from "next/image";
import Vercel from "public/vercel.svg";
import ArrowIcon from "./arrow";

export default function Channel({ img = Vercel, icon = Vercel, link = "", name = "", count = "", countType = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
            <Image
              alt={name}
              src={icon}
              className="rounded-full h-16 w-16"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className={count != "" ? "text-neutral-600 dark:text-neutral-400" : "hidden"}>
            {count} {countType}
          </p>
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}