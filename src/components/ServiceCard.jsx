import { motion } from "framer-motion";

const ServiceCard = ({ title, description, services, delay }) => (
  <motion.div
    delay={delay}
    className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01]
               rounded-3xl p-6 sm:p-8 
               border border-white/[0.06] hover:border-white/[0.12] 
               transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
               hover:scale-[1.015] 
               shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] 
               hover:shadow-[0_24px_64px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.12)]
               overflow-hidden bg-transparent"
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.02] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    />
    <div
      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/[0.1] to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-1000
                    [mask:linear-gradient(white,white)_padding-box,linear-gradient(white,white)]
                    [mask-composite:exclude]"
    />
    <div className="relative z-10">
      <h3
        className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-white to-white/90 
                     bg-clip-text text-transparent mb-4 
                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      >
        {title}
      </h3>
      <p
        className="text-white/80 group-hover:text-white/90 mb-6 leading-relaxed 
                    text-sm sm:text-base transition-colors duration-500
                    drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {services.map((service, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] 
                       text-white/90 hover:text-white rounded-xl
                       text-xs sm:text-sm font-medium
                       backdrop-blur-md border border-white/[0.08] hover:border-white/[0.15]
                       transition-all duration-400 ease-out
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.1)]
                       hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.15)]
                       hover:scale-105"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;
