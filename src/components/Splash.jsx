import { motion } from "framer-motion";
import darkLogo from "../assets/dd-dark.png";

export default function Splash() {
  return (
    <section className="h-screen bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white-primary flex flex-col items-center justify-center px-6 sm:px-12">
      <div className="text-center max-w-3xl font-montserrat relative">
        <motion.h1
          className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold drop-shadow-lg leading-tight mb-[-1.5rem]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DOUBLE
        </motion.h1>
        <motion.h1
          className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold drop-shadow-lg leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DRIFT
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg font-bold text-white/90 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to the new era of design.
        </motion.p>
      </div>
    </section>
  );
}
