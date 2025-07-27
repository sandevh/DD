import { useRef } from "react";
import { motion } from "framer-motion";
import video from "../assets/dd.avif";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Branding & Identity Design",
      description:
        "In today's competitive world, branding is crucial for any organization to succeed. It not only adds value to your business but also provides guidance during times of growth or uncertainty. A well-crafted brand can give your business a competitive edge and inspire customers to trust your products or services. At our company, we work with utmost passion to build brands that stand out from the crowd. Trust us to help you build a brand that not only inspires but also achieves your business goals.",
      services: [
        "Brand Strategy",
        "Logo & Identity",
        "Naming",
        "Style Guides",
        "Voice & Tone",
        "Creative Direction",
        "Design Research",
        "Packaging",
      ],
    },
    {
      title: "Packaging Design",
      description:
        "Great packaging is more than just a pretty design - it's an honest representation of your product that connects with your customers on a deeper level. By combining form, structure, materials, color, imagery, typography, and design elements, your packaging tells a compelling story that reflects your brand's unique personality and helps it stand out from the competition. After all, your packaging is the first thing that customers will see when they encounter your product, and it's what will make them want to take it home with them.",
      services: [
        "Packaging Architecture",
        "Print Design",
        "Market Research",
        "Illustration",
      ],
    },
    {
      title: "3D Design",
      description:
        "Your product's packaging is a direct reflection of what you have to offer. It is a fusion of form, structure, materials, color, imagery, typography, and design elements. Through exceptional design, your packaging should tell a compelling story that represents your brand's aesthetics and helps it to outshine the competition on a store shelf. Remember, your packaging is the first thing that your customers will see, and it is your chance to make a lasting impression. So, why not make it count?",
      services: ["Modeling", "Texturing", "Product Design", "3D Animations"],
    },
    {
      title: "Pre-Press Design",
      description:
        "You'll love working with us, especially when you see what we can do that most others won't. We know that pre-press is the final and most critical stage of design that can make or break your print project. But don't worry, we make it easy for you.",
      services: ["Print Ready", "CMYK", "Die-line"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-primary to-maroon-secondary text-white font-montserrat scroll-smooth">
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center py-24 sm:py-32 space-y-12 relative overflow-hidden"
      >
        <motion.div
          className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl backdrop-blur-md bg-white/10 border border-white/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-cover rounded-2xl"
          />
        </motion.div>

        <button
          onClick={() => scrollTo(introRef)}
          className="mt-4 text-sm font-semibold px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition hover:cursor-pointer"
        >
          Explore More ↓
        </button>
      </section>

      <section
        ref={introRef}
        className="min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 md:px-10 py-20 sm:py-28 bg-white/5 border-y border-white/10 text-left space-y-8 backdrop-blur-lg"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-5xl mx-auto text-center leading-tight drop-shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          "Experience designs that capture your heart and stimulate your mind."
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl text-white/80 space-y-6 max-w-4xl mx-auto font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            Welcome to the new era of design. You are about to experience a
            revolution in how we think about design, where innovation and
            creativity reign supreme.
          </p>
          <p>
            This era marks a turning point where boundaries are pushed, and the
            impossible becomes possible.
          </p>
          <p>
            Get ready to witness the most exciting and groundbreaking designs
            that will shape the future and inspire generations to come.
          </p>
        </motion.div>

        <div className="text-center pt-8">
          <button
            onClick={() => scrollTo(servicesRef)}
            className="text-sm font-semibold px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition hover:cursor-pointer"
          >
            See Services ↓
          </button>
        </div>
      </section>

      <section
        ref={servicesRef}
        className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-white/5 border-t border-white/10"
      >
        <motion.div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Solutions crafted to empower brands through bold strategy and
            beautiful design.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              services={service.services}
              delay={index * 2}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
