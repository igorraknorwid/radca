import Link from "next/link";
import Image from "next/image";
import React from "react";
import Prime from "./Prime";
import ServiceList from "./ServiceList";
import { b2b } from "../content/b2b";
import { b2c } from "../content/b2c";
import Voice from "./Voice";

export default function Content() {
  return (
    <div id='start'>
      <div
        className='brightness-75'
        style={{
          // background: ` url("https://cclaw.pl/wp-content/uploads/Adwokat-Gdansk-Przemyslaw-Czaicki-Radca-prawny-Gdansk-Agata-Czaicka.jpg") no-repeat center / cover`,
          background: ` url("https://res.cloudinary.com/zielona-g-ra/image/upload/v1663762699/radcy/the-connected-narrative-FYGKPTJN8zw-unsplash_lcg9tt.webp") no-repeat center / cover`,

          width: "100%",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className='mx-auto w-full lg:w-4/6 '>
        <div className='relative'>
          <Prime />
          <section className='text-center pt-20 px-3 '>
            <h3
              className='uppercase text-lg mb-6'
              style={{ letterSpacing: "8px" }}
            >
              ŚWIADCZYMY USŁUGI PRAWNE SZYTE NA MIARĘ
            </h3>
            <h2
              className='text-5xl font-bold raleway mb-12'
              style={{ letterSpacing: "8px" }}
            >
              ZAKRES USŁUG
            </h2>
            <p
              className='mb-16 text-lg lg:px-80 nunito'
              style={{ letterSpacing: "2px" }}
            >
              Lubimy to, co robimy. Świadomie wybraliśmy te obszary prawa,
              którymi chcemy się zajmować i w których jesteśmy po prostu dobrzy.
            </p>
            <div className='border-b border-black my-4 lg:mx-80'></div>
          </section>
          <section className='text-center pt-20 px-3 '>
            <h2
              className='text-5xl font-bold raleway mb-12'
              style={{ letterSpacing: "8px" }}
            >
              PRAWNIK DLA BIZNESU
            </h2>
            <p
              className='mb-16 text-lg lg:px-80 nunito'
              style={{ letterSpacing: "2px" }}
            >
              Świadczymy kompleksową obsługę prawną firm, w szczególności małych
              i średnich przedsiębiorstw w Gdańsku, jak i w całej Polsce.
              Poniżej znajdą Państwo kategorie spraw, w których od lat pomagamy
              małym i średnim przedsiębiorcom.
            </p>
            <ServiceList list={b2b} />
            <div className='border-b border-black my-4 lg:mx-80'></div>
          </section>
          <section className='text-center pt-20 px-3 '>
            <h2
              className='text-5xl font-bold raleway mb-12'
              style={{ letterSpacing: "8px" }}
            >
              PRAWNIK DLA CIEBIE
            </h2>
            <p
              className='mb-16 text-lg lg:px-80 nunito'
              style={{ letterSpacing: "2px" }}
            >
              Każdy w codziennym życiu potrzebuje czasem prawnika. Jeśli
              potrzebujesz pomocy prawnej, zobacz, w czym może Ci pomóc nasza
              kancelaria adwokacka w Gdańsku:
            </p>
            <ServiceList list={b2c} />
            <div className='border-b border-black my-4 lg:mx-80'></div>
          </section>
        </div>
      </div>
    </div>
  );
}
