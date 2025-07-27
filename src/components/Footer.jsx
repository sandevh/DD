import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBehance, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white font-montserrat px-6 py-12 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-maroon-secondary/30 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 20, -20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-base md:text-[1.05rem] leading-relaxed">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-extrabold mb-3">Double Drift</h3>
          <p className="text-white/80 font-medium max-w-sm mx-auto md:mx-0">
            Design studio built to disrupt. Bold branding, striking campaigns,
            and fearless visuals.
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-bold mb-4 uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white"
              >
                <Link
                  to={item.to}
                  className="text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-xl font-bold mb-4 uppercase tracking-wide">
            Follow Us
          </h4>
          <div className="flex justify-center md:justify-end gap-4">
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
                aria-label={`Link to ${Icon.displayName || "social media"}`}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-sm mt-12 tracking-wide">
        © {new Date().getFullYear()} Double Drift. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
