import Image from "next/image";
import { title } from "process";
import React from "react";

interface ICard {
  id: number;
  src: string;
  title: string;
  text: string;
}

interface ICards {
  cards: ICard[];
}

function Card({ id, src, title, text }: ICard) {
  return (
    <div
      className='w-full lg:basis-1/3 
      flex flex-col min-h-full items-stretch bg-white text-black '
      style={{ minHeight: "700px" }}
    >
      <div className='shrink-1 grow relative basis-1/2  '>
        <Image
          src={src}
          layout='fill'
          alt=''
          objectPosition='center'
          objectFit='cover'
          className='hover:scale-105 transition duration-300 ease-out hover:ease-in cursor-pointer '
        />
      </div>
      <div className='shrink-0 grow basis-1/2 py-10 px-10'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='nunito mt-4 text-lg'>{text}</p>
      </div>
    </div>
  );
}

export default function Cards({ cards }: ICards) {
  return (
    <div className=' bg-transparent flex  gap-5 flex-wrap xl:flex-nowrap  '>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          src={card.src}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
}
