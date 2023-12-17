import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  title: string;
  top: number;
}
const NavbarLink = ({ href, title, top }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={() => {
        window.scrollTo({
          top: top,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
