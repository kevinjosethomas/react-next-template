import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function MobileNav(props) {
  const router = useRouter();

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-between w-screen h-screen p-4 md:hidden bg-dark-100"
      initial="initial"
      animate="enter"
      exit="leave"
      variants={{
        initial: { x: "-100vw" },
        enter: { x: 0, transition: { duration: 0.5 } },
        leave: { x: "-100vw", transition: { duration: 0.5 } },
      }}
    >
      <div className="self-end mt-4 mr-8">
        <i
          className="text-2xl text-gray-500 fas fa-times hover:text-gray-400"
          onClick={() => props.setIsOpen(false)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <span
            className={`cursor-pointer font-proxima font-semibold text-2xl ${
              router.pathname == "/"
                ? "text-gray-300"
                : "text-gray-500 hover:text-gray-400"
            }`}
          >
            TEMPLATE HOME
          </span>
        </Link>
        <Link href="/server">
          <span
            className={`cursor-pointer font-proxima font-semibold text-2xl ${
              router.pathname == "/server"
                ? "text-gray-300"
                : "text-gray-500 hover:text-gray-400"
            } my-6`}
          >
            SERVER RENDERED
          </span>
        </Link>
        <Link href="/static">
          <span
            className={`cursor-pointer font-proxima font-semibold text-2xl ${
              router.pathname == "/static"
                ? "text-gray-300"
                : "text-gray-500 hover:text-gray-400"
            }`}
          >
            STATIC GENERATED
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
