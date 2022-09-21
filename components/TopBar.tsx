import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <section className='hidden md:block bg-black text-white fixed top-0 left-0 right-0 z-10'>
      <div className='w-full lg:w-11/12 mx-auto px-3 py-2 flex justify-end'>
        <div className='flex items-center gap-x-5'>
          <div className='flex items-center gap-x-3'>
            <Image src='/email.png' height={24} width={24} alt='phone' />
            <a href='mailto: abc@example.com'>abc@example.com</a>
          </div>
          <div className='flex items-center gap-x-3'>
            <Image
              src='/ph_phone-call.svg'
              height={24}
              width={24}
              alt='phone'
            />
            <a href='tel:6031112298'>555-xxx-xxxx</a>
          </div>
        </div>
      </div>
      <div className='bg-white h-px '></div>
    </section>
  );
};

export default TopBar;
