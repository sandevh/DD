import { motion } from "framer-motion";
import {
  FaBehance,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white font-montserrat pt-28 pb-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <motion.div
        className="absolute top-32 left-1/3 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-maroon-primary/30 rounded-full blur-3xl"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-extrabold drop-shadow-lg mb-4 leading-tight">
            CONTACT
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-bold tracking-wide">
            Let's make something unforgettable together.
          </p>
        </motion.div>

        {/* Contact + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMailBulk className="w-6 h-6 text-white/80" />
                <p className="text-white/90 font-medium text-sm sm:text-base break-all">
                  hi.thedoubledrift@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="w-6 h-6 text-white/80" />
                <p className="text-white/90 font-medium text-sm sm:text-base">
                  +94 0769 647 115
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    Icon: FaInstagram,
                    href: "https://www.instagram.com/thedoubledrift?igsh=MWNqYXl5aGU5MG4xaA==",
                  },
                  {
                    Icon: FaBehance,
                    href: "https://www.behance.net/doubledrift",
                  },
                  {
                    Icon: FaYoutube,
                    href: "https://youtube.com/@thedoubledrift?si=Ae_n2AmAnUjuMvvj",
                  },
                  {
                    Icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/manoj-edward-99560622a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <div>
              <label className="block mb-2 font-bold text-white text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-white text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm sm:text-base"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-white text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows="5"
                required
                className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm sm:text-base"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white font-extrabold text-lg shadow-md hover:brightness-110 transition-all duration-300 hover:cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
