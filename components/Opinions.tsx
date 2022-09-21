import Link from "next/link";
import Image from "next/image";
import React from "react";

interface IOpinion {
  id: number;
  name: string;
  text: string;
  role?: string;
}

interface IOpinions {
  opinions: IOpinion[];
}
export default function Opinions({ opinions }: IOpinions) {
  return (
    <div className='mx-0 bg-gray-200'>
      <section className='mx-auto w-full lg:w-4/6 text-center py-20 px-3 '>
        <h3 className='uppercase text-lg mb-6' style={{ letterSpacing: "8px" }}>
          JESTEŚMY ZAANGAŻOWANI DO SAMEGO KOŃCA
        </h3>
        <h2
          className='text-4xl font-bold raleway mb-12'
          style={{ letterSpacing: "8px" }}
        >
          OPINIE NASZYCH KLIENTÓW
        </h2>
        <div className='flex items-start flex-col lg:flex-row lg:justify-between gap-y-10 lg:gap-x-40'>
          {opinions.map((o) => (
            <div
              key={o.id}
              className='lg:basis-1/3  p-5 bg-white lg:bg-gray-200    hover:bg-white transition duration-300 ease-out hover:ease-in rounded-3xl '
            >
              <p className='nunito'>{o.text}</p>
              <h3 className='text-lg font-semibold mt-5'>{o.name}</h3>
              <p className='uppercase text-sm' style={{ letterSpacing: "2px" }}>
                {o.role && o.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
