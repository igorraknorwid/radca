import Link from "next/link";
import React from "react";

interface IServiceItem {
  id: number;
  title: string;
  slug: string;
  clickHandler?: () => void;
}

interface IServiceList {
  list: IServiceItem[];
}

export default function ServiceList({ list }: IServiceList) {
  return (
    <section className='mb-20'>
      <ul className='grid lg:grid-cols-2 gap-y-6 gap-x-10 uppercase '>
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className='text-black hover:text-white text-xl font-medium hover:bg-black border border-black py-5 basis-1/2 w-full  transition duration-300 ease-out hover:ease-in cursor-pointer max-w-2xl mx-auto'
            >
              <Link href={item.slug}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
