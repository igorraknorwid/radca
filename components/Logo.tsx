import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className='flex justify-center items-center'>
      <Link href='/'>
        <a className=''>
          <Image
            src='/logo.png'
            alt='kancelaria prawna'
            width={143}
            height={39}
          />
        </a>
      </Link>
    </div>
  );
}
