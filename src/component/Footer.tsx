"use client";
// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const styles = {
  pokeball: {
    backgroundImage: "url('/assets/images/bg-pokeball.svg')",
  },
  footer: {
    height: "60px",
    boxShadow: "0px -5px 10px rgba(0,0,0,0.1), 0px -10px 20px rgba(0,0,0,0.1)",
  },
  leftFooter: {
    backgroundImage: "url('/assets/images/footer-left.svg')",
    height: "200px",
    width: "250px",
  },
  rightFooter: {
    backgroundImage: "url('/assets/images/footer-right.svg')",
    height: "200px",
    left: "250px",
  },
};

const Footer = () => {
  return (
    <>
      <div className="h-20" />
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-no-repeat bg-right-bottom select-none -z-50"
        style={styles.pokeball}
      />
      <footer
        id="footer"
        className="fixed bottom-0 left-0 right-0 flex bg-white backdrop-blur-md text-xs"
        style={styles.footer}
      >
        <div>
          <IconPoke />
          Pokedex
        </div>
        <Link href="/" className="flex-1 flex justify-center ">
          <Image
            alt="image"
            src="/assets/images/icon-snap.png"
            className="-mt-4"
            width={24}
            height={24} // specify width and height for next/image optimization
          />
        </Link>
        <div>
          <IconUser />
          Profile
        </div>
      </footer>
    </>
  );
};

export default Footer;

interface NavItemProps {
  to?: string;
  children: React.ReactNode;
}

// const NavItem: React.FC<NavItemProps> = ({ to = "/", children }) => (
//   <LinkActive
//     to={to}
//     className="menu-item flex-1 flex justify-center items-center flex-col text-gray-600 gap-0.5 text-center border-b-2 transition-all hover:bg-blue-50"
//     activeClassName="text-blue-600  border-b-blue-400 bg-blue-100"
//     inactiveClassName="border-b-white"
//   >
//     {children}
//   </LinkActive>
// );

const IconUser = () => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const IconPoke = () => (
  <svg
    className="w-6 h-6"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      d="M15.1742 28.3484C22.4503 28.3484 28.3484 22.4503 28.3484 15.1742C28.3484 7.8981 22.4503 2 15.1742 2C7.8981 2 2 7.8981 2 15.1742C2 22.4503 7.8981 28.3484 15.1742 28.3484Z"
      strokeWidth="2.22663"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke="currentColor"
      d="M15.1741 19.1267C16.2223 19.1267 17.2276 18.7103 17.9688 17.9691C18.71 17.2279 19.1264 16.2226 19.1264 15.1744C19.1264 14.1262 18.71 13.121 17.9688 12.3798C17.2276 11.6386 16.2223 11.2222 15.1741 11.2222C14.1259 11.2222 13.1206 11.6386 12.3795 12.3798C11.6383 13.121 11.2219 14.1262 11.2219 15.1744C11.2219 16.2226 11.6383 17.2279 12.3795 17.9691C13.1206 18.7103 14.1259 19.1267 15.1741 19.1267V19.1267Z"
      strokeWidth="2.22663"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke="currentColor"
      d="M2 15.1743H11.222M19.1265 15.1743H28.3484"
      strokeWidth="2.22663"
    />
  </svg>
);

// function LinkActive({
//   children,
//   to = "/",
//   className,
//   activeClassName,
//   inactiveClassName,
// }: {
//   children: React.ReactNode;
//   to?: string;
//   className: string;
//   activeClassName: string;
//   inactiveClassName: string;
// }) {
//   const router = useRouter();
//   const isActive = router.pathname === to;

//   return (
//     <Link
//       href={to || "/"}
//       className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
//     >
//       {children}
//     </Link>
//   );
// }
