import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white font-montserrat pt-24 sm:pt-32 pb-16 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-left space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg mb-4">
          About Us
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          At <span className="font-bold text-white">The Double Drift</span>,
          we're more than just designers — we're storytellers, problem solvers,
          and visual thinkers. Our team is a collective of passionate creatives
          who live and breathe design. From crafting bold brand identities to
          developing immersive 3D visuals and precision-driven packaging
          designs, we bring every concept to life with purpose and personality.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          We come from diverse creative backgrounds, each bringing a unique set
          of skills and perspectives. What unites us is our shared dedication to
          design that not only looks stunning but also communicates, connects,
          and delivers real impact. Whether it’s a startup in need of a brand
          foundation or a product ready to hit the shelves, we collaborate
          closely with our clients to shape ideas into standout visual
          experiences.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          Every project we take on is a journey, and our team is your trusted
          creative partner — guiding that journey from the first sketch to the
          final print.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
