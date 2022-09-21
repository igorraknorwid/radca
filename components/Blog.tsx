import React from "react";
import { title } from "process";
import Cards from "./Cards";

const cards = [
  {
    id: 1,
    src: "https://cclaw.pl/wp-content/uploads/szybki-podzial-majatku.jpg",
    title: "SZYBKI PODZIAŁ MAJĄTKU. 6 RZECZY, KTÓRE MUSISZ WIEDZIEĆ.",
    text: "Rozwodzisz się, ale nie zależy Ci na długiej sądowej batalii? Chcesz zakończyć małżeństwo i sprawy związane z podziałem majątku jak najszybciej? Sprawdź, co musisz wiedzieć i jak to zrobić.",
  },
  {
    id: 2,
    src: "https://cclaw.pl/wp-content/uploads/umowa-nda-umowa-o-zachowaniu-poufnosci.jpg",
    title:
      "UMOWA O ZACHOWANIU POUFNOŚCI (NDA). WSZYSTKO, CO MUSISZ O NIEJ WIEDZIEĆ.",
    text: "Umowa NDA - często spotykany dokument otwierający wiele współprac, nie tylko biznesowych. Przeczytaj, w jakich sytuacjach się ją zawiera i jaki jest rzeczywisty cel. Dowiedz się, co w niej zawrzeć, żeby zapewnić jej realną skuteczność.",
  },
  {
    id: 3,
    src: "https://cclaw.pl/wp-content/uploads/co-z-mieszkaniem-po-rozwodzie-Adwokat-rozwodowy-Gdansk-.jpg",
    title: "CO Z MIESZKANIEM PO ROZWODZIE?",
    text: "Rozwód to nie tylko bardzo obciążające psychicznie wydarzenie, ale moment, w którym trzeba uregulować wiele bardzo istotnych kwestii. Jedną z nich jest sprawa mieszkania po rozwodzie. Jakie mamy opcje? Czy zawsze sąd rozstrzyga kwestię mieszkania? Co jeśli małżonkowie muszą mieszkać razem nawet po rozwodzie? Jak się odnaleźć w gąszczu regulacji prawnych?",
  },
];

export default function Blog() {
  return (
    <section className='text-white bg-black py-16 mt-20 text-center px-3'>
      <h2 className='text-3xl  mb-20'>PORADY PRAWNE</h2>
      <div className='w-11/12 mx-auto'>
        <Cards cards={cards} />
      </div>

      <div className='mt-20'>
        <a
          href='#start'
          className='text-white text-xl font-medium hover:bg-white hover:text-black border   w-full  transition duration-300 ease-out hover:ease-in cursor-pointer uppercase px-10 py-5 '
        >
          WSZYSTKIE PORADY
        </a>
      </div>
    </section>
  );
}
