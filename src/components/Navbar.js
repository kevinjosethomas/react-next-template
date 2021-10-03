import Link from "next/link";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MobileNav } from "./MobileNav";

export const useNavbarState = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    setIsOpen,
  };
};

export const Navbar = (props) => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useNavbarState();

  return (
    <Fragment>
      <nav className="flex flex-row items-center justify-end w-screen py-8 border-b-2 md:justify-between bg-dark-200 border-emph-200">
        <div className="flex-row items-center justify-center hidden ml-16 md:flex">
          <Link href="/">
            <span
              className={`cursor-pointer font-proxima font-semibold ${
                router.pathname == "/"
                  ? "text-gray-300"
                  : "text-gray-500 hover:text-gray-400"
              } mr-6`}
            >
              HOME
            </span>
          </Link>
          <Link href="/server">
            <span
              className={`cursor-pointer font-proxima font-semibold ${
                router.pathname == "/server"
                  ? "text-gray-300"
                  : "text-gray-500 hover:text-gray-400"
              } mr-6`}
            >
              SERVER RENDERED
            </span>
          </Link>
          <Link href="/static">
            <span
              className={`cursor-pointer font-proxima font-semibold ${
                router.pathname == "/static"
                  ? "text-gray-300"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              STATIC GENERATED
            </span>
          </Link>
        </div>
        <div className="flex-row items-center justify-center hidden mr-16 md:flex">
          <a href="https://discord.kevinthomas.codes" target="_blank">
            <i className="mr-4 text-3xl text-gray-500 fab fa-discord hover:text-gray-400"></i>
          </a>
          <a
            href="https://github.com/TrustedMercury/react-next-template"
            target="_blank"
          >
            <i className="text-3xl text-gray-500 fab fa-github hover:text-gray-400"></i>
          </a>
        </div>
        <div className="mr-12 md:hidden">
          <i
            className="text-2xl text-gray-500 fas fa-bars"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </Fragment>
  );
};
