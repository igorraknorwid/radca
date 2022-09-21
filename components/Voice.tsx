import Image from "next/image";
import React from "react";

export default function Voice() {
  return (
    <section className='text-white bg-black py-16 mt-20 text-center px-3'>
      <div className='lg:w-4/6 mx-auto grid grid-cols-1 lg:grid-cols-2 '>
        <div>
          <Image
            src='https://cclaw.pl/wp-content/uploads/Adwokat-Gdansk-Przemyslaw-Czaicki-i-radca-prawny-Agata-Czaicka-kancelaria-adwokacka-Gdansk-1024x682.jpg'
            alt=''
            width={555}
            height={367}
          />
        </div>
        <div className='mt-10 lg:mt-0  max-w-xl mx-auto min-h-full flex flex-col items-stretch'>
          <h2 className='text-3xl shrink-0'>
            ROZUMIEMY TWOJE POTRZEBY. POTRAFIMY CI POMÓC.
          </h2>
          <div className='nunito text-lg text-center lg:text-left mt-5 shrink-0 grow'>
            <p>
              Nie chcemy cytować Ci przepisów i zostawiać Cię z mętlikiem w
              głowie. Chcemy zaoferować Ci konkretną, przystępną pomoc i
              dostarczyć usługę skrojoną na miarę Twoich potrzeb.
            </p>
            <p>
              Jesteśmy tu po to, żeby rozwiązać Twój problem prawny oraz aby Cię
              przed nim uchronić.
            </p>
          </div>
          <div className='shrink-0 mb-5'>
            <a
              href='#start'
              className='text-white text-xl font-medium hover:bg-white hover:text-black border   w-full  transition duration-300 ease-out hover:ease-in cursor-pointer uppercase px-10 py-5 '
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
