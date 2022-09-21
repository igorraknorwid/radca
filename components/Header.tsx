import { motion } from "framer-motion";
import React from "react";
import Logo from "./Logo";

import Navbar from "./Navbar";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-200%" },
};
const variantsBlur = {
  open: { opacity: 0.5, y: 0 },
  closed: { opacity: 0, y: "-200%" },
};

function Up() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      href='#start'
      className='bg-black hover:bg-neutral-800  text-white flex justify-center items-center'
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 50,
        padding: "20px",
        borderRadius: "2000px",
      }}
    >
      <div
        className='flex justify-center items-center'
        style={{ width: "20px", height: "20px" }}
      >
        <i className='up' />
      </div>
    </motion.a>
  );
}

export default function Header() {
  const [init, setInit] = React.useState(true);
  const [state, setState] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const myRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (active) {
      document.body.classList.add("blockk");
    } else {
      document.body.classList.remove("blockk");
    }

    return function cleanup() {
      document.body.classList.remove("blockk");
    };
  }, [active]);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setState(entry.isIntersecting);
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, []);
  React.useEffect(() => {
    const height = 80;
    window.addEventListener("scroll", () => {
      if (window.scrollY > height) {
        setInit(false);
      }
    });
  }, []);

  const clickHandler = () => {
    console.log("Blur");
    setState(false);
  };

  return (
    <>
      {!state && <Up />}

      {active && (
        <motion.div
          animate={active ? "open" : "closed"}
          variants={variantsBlur}
          transition={{ duration: 1 }}
          onClick={() => {
            setActive(!active);
          }}
          style={{
            position: "fixed",
            zIndex: 10,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "gray",
            opacity: 0.2,
          }}
        ></motion.div>
      )}

      <div className='indicator h-px' ref={myRef}></div>

      <motion.div
        animate={active ? "open" : "closed"}
        variants={variants}
        initial={false}
        transition={{ duration: 1 }}
        className='z-50 header__mobile_menu  fixed  w-full mx-auto md:hidden  bg-black text-white border-t'
      >
        <Navbar
          navStyle='bg-black text-white '
          ulStyle='w-full mx-auto'
          liStyle='text-center'
          liStyleActive='text-center '
          aStyleActive=''
          aStyle=''
          clickHandler={clickHandler}
        />
      </motion.div>

      <header
        className={`z-50 flex justify-center items-center   ${
          init ? "header__init  " : state ? "header__fat" : "header__slim "
        }  ${active && "bg-black"}`}
      >
        <div className='flex justify-between items-center w-full lg:w-11/12  mx-5 '>
          <div
            className={` ${
              init
                ? "header__logo_box_init"
                : state
                ? "header__logo_box_fat"
                : "header__logo_box_slim"
            }`}
          >
            <Logo />
          </div>

          <div
            className={`${
              init
                ? "header__navbar_box_init"
                : state
                ? "header__navbar_box_fat"
                : "header__navbar_box_slim"
            }`}
          >
            <div className='hidden md:flex justify-center items-center gap-2 md:gap-8 lg:gap-20 text-white nunito '>
              <Navbar
                ulStyle='flex justify-center items-center gap-4 lg:gap-16 xl:gap-16 nunito'
                liStyle='hover:opacity-50 transition-all text-sm lg:text-lg'
                liStyleActive='hover:opacity-50 transition-all text-sm lg:text-lg  text'
                aStyleActive=''
              />
            </div>
            <div className='md:hidden'>
              <div
                className={active ? "burger-btn active" : "burger-btn"}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
