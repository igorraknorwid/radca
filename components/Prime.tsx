import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Prime() {
  return (
    <section className='absolute z-0  prime text-white'>
      <h1 className='text-3xl lg:text-5xl  '>TWÓJ ADWOKAT W GDAŃSKU</h1>
      <p className='hidden lg:block text-2xl  lg:px-40 leading-relaxed raleway'>
        Jesteśmy profesjonalnymi prawnikami, zaangażowanymi w Twoje sprawy.
        Naszą kancelarię prawną w Gdańsku tworzą adwokat Przemysław Czaicki i
        radca prawny Agata Czaicka. Ponadto, współpracujemy z dobrymi i
        doświadczonymi prawnikami o różnych specjalizacjach zarówno w Gdańsku i
        Trójmieście, jak i w całej Polsce. Szukasz adwokata w Gdańsku?
        Zapraszamy!
      </p>
      <div className='mt-10 w-2/3 mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center  gap-y-10 lg:gap-y-0  lg:gap-x-10  uppercase '>
          <a
            href='#uslugi'
            className='text-white text-xl font-medium hover:bg-black border py-5 basis-1/3 w-full  transition duration-300 ease-out hover:ease-in cursor-pointer'
          >
            Zakres usług
          </a>
          <a className='text-white text-xl font-medium hover:bg-black border py-5 basis-1/3 w-full transition duration-300 ease-out hover:ease-in cursor-pointer'>
            O kancelarii
          </a>
          <a className='text-white text-xl font-medium hover:bg-black border py-5 basis-1/3 w-full transition duration-300 ease-out hover:ease-in cursor-pointer'>
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
