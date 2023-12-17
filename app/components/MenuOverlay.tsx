import React from "react";
import NavbarLink from "./NavbarLink";

interface MenuOverlayProps {
  links: {
    path: string;
    title: string;
    top: number;
  }[];
}
export const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavbarLink href={link.path} title={link.title} top={link.top} />
        </li>
      ))}
    </ul>
  );
};
