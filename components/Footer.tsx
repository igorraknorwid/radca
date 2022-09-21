import Image from "next/image";
import React from "react";
import ContactInfo from "./ContactInfo";
import Form from "./Form";

export default function Footer() {
  return (
    <footer className='text-white bg-black py-16  text-center px-3'>
      <h2 className='uppercase text-lg mb-6' style={{ letterSpacing: "8px" }}>
        MASZ PROBLEM PRAWNY I POTRZEBUJESZ POMOCY?
      </h2>
      <h2 className='text-3xl shrink-0'>KANCELARIA ADWOKACKA W GDAŃSKU</h2>
      <div className='flex justify-center mt-10'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78186.00167913857!2d20.960372915378628!3d52.23770635058453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1663749029997!5m2!1spl!2spl'
          className='lg:w-4/6 '
          style={{ border: "0", minHeight: "500px" }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='flex flex-col lg:flex-row w-full lg:w-4/6 mx-auto mt-20'>
        <div className='basis-1/2'>
          <ContactInfo />
        </div>
        <div className='basis-1/2'>
          <Form />
        </div>
      </div>
      <section className='mt-20 text-sm'>
        <div className='flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-center'>
          <div className='lg:basis-1/4 uppercase px-4 flex justify-center items-center '>
            <span>Logo</span>
          </div>
          <div className='lg:basis-1/4 text-left px-4'>
            <h3 className='uppercase text-lg mb-5 font-semibold'>
              CC LAW – TWÓJ ADWOKAT W GDAŃSKU
            </h3>
            <p>
              Szukasz profesjonalnej pomocy prawnej, udzielonej w przystępny
              sposób? Zapraszamy do naszej Kancelarii w Gdańsku. Mieści się ona
              w odległości 200 m od Sądu Okręgowego i Sądu Apelacyjnego w
              Gdańsku. Oferujemy pomoc prawną m.in. w zakresie: rozwodów, prawa
              karnego, prawa pracy, prawa spadkowego. Świadczymy też kompleksową
              obsługę prawną małych i średnich przedsiębiorców.
            </p>
          </div>
          <div className='lg:basis-1/4 text-left px-4'>
            <h3 className='uppercase text-lg mb-5 font-semibold'>
              NAJNOWSZE PORADY PRAWNE
            </h3>
            <div>
              <p>Szybki podział majątku. 6 rzeczy, które musisz wiedzieć.</p>
              <p>Umowa o zachowaniu poufności (NDA).</p>
              <p>
                Wszystko, co musisz o niej wiedzieć. Co z mieszkaniem po
                rozwodzie?
              </p>
            </div>
          </div>
          <div className='lg:basis-1/4 text-left px-4'>
            <h3 className='uppercase text-lg mb-5 font-semibold'>
              KANCELARIA ADWOKACKA W GDAŃSKU. ADWOKAT PRZEMYSŁAW CZAICKI
            </h3>
            <p>Ul. Kartuska 5 (I piętro)</p>
            <p>80-103 Gdańsk</p>
            <p>+48 509 291 491</p>
            <p>kancelaria@cclaw.pl</p>
            <p>kancelaria@cclaw.pl</p>
            <p>PON – PT 09:00 – 17:00</p>
          </div>
        </div>
      </section>
      <div className='border-b border-white my-10 lg:mx-20 '></div>
      <section>
        <div className='flex flex-col lg:flex-row w-full lg:w-11/12 mx-auto gap-x-5'>
          <div>Polityka Prywatności</div>
          <div>Powered by Igor Rak.</div>
        </div>
      </section>
    </footer>
  );
}
