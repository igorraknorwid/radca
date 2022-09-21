import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ContactInfo() {
  return (
    <section className='py-10 text-left' style={{ lineHeight: "30px" }}>
      <h3 style={{ letterSpacing: "2px" }} className='font-semibold mb-5'>
        KANCELARIA ADWOKACKA
      </h3>
      <div className='mb-4' style={{ lineHeight: "30px" }}>
        <p>Ul. Dobra 5 (I piętro)</p>
        <p>xx-103 Miasto</p>
      </div>
      <div>
        <p className='font-bold mb-4'>Jan Xxxxxx</p>
      </div>

      <div className='mb-4'>
        <p>+48 509 xxx xxx</p>
        <p>abc@xxxx.pl</p>
      </div>
      <div className='mb-4'>
        <p>NIP: 583 288 xx xx</p>
        <p>REGON: 22199xxxx</p>
      </div>
      <div className='mb-4 '>
        <div className='border border-white p-5 inline-block'>
          <p>Kancelaria prowadzi również spotkania zdalne.</p>
          <p> Zapraszamy do kontaktu w celu ustalenia terminu.</p>
        </div>
      </div>
      <div className='mb-4'>
        <p>Nr rachunku bankowego:</p>
        <p>PLN 05 1910 1048 2786 7525 xxxx xxxx</p>
        <p>EUR 48 1910 1048 2786 7525 xxxx xxxx</p>
        <p>USD 04 1910 1048 2216 7525 xxxx xxxx</p>
      </div>
    </section>
  );
}
