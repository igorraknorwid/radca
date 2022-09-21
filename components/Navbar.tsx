import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { links } from "../content/navigation";

interface INavbar {
  navStyle?: string;
  ulStyle?: string;
  liStyle?: string;
  liStyleActive?: string;
  aStyle?: string;
  aStyleActive?: string;
  clickHandler?: () => void;
}

export default function Navbar({
  navStyle,
  ulStyle,
  liStyle,
  aStyle,
  aStyleActive,
  liStyleActive,
  clickHandler,
}: INavbar) {
  const router = useRouter();
  const path = router.asPath;

  if (links.length === 0) {
    return null;
  }

  return (
    <nav className={navStyle && navStyle}>
      <ul className={ulStyle && ulStyle}>
        {links.map((item, index) => {
          if (path === item.slug) {
            return (
              <li
                onClick={clickHandler ? clickHandler : () => {}}
                key={index}
                className={liStyleActive && liStyleActive}
              >
                <Link href={item.slug} className={aStyleActive && aStyleActive}>
                  {item.text}
                </Link>
              </li>
            );
          }
          return (
            <li
              onClick={clickHandler ? clickHandler : () => {}}
              key={index}
              className={liStyle && liStyle}
            >
              <Link href={item.slug} className={aStyle && aStyle}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
