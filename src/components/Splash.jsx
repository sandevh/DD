import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const NUM_STARS = 600;
const MAX_CONNECTIONS = 200;
const CONNECTION_DISTANCE = 120;

function generateStars() {
  return Array.from({ length: NUM_STARS }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.8,
    brightness: Math.random() * 0.8 + 0.2,
    twinkleDuration: 2 + Math.random() * 3,
    twinkleDelay: Math.random() * 2,
  }));
}

export default function Splash() {
  const [stars] = useState(generateStars);
  const [connections, setConnections] = useState([]);
  const containerRef = useRef(null);

  const calculateConnections = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const absolutePositions = stars.map((star) => ({
      ...star,
      absoluteX: (star.x / 100) * width,
      absoluteY: (star.y / 100) * height,
    }));

    const newConnections = [];
    for (
      let i = 0;
      i < absolutePositions.length && newConnections.length < MAX_CONNECTIONS;
      i++
    ) {
      for (
        let j = i + 1;
        j < absolutePositions.length && newConnections.length < MAX_CONNECTIONS;
        j++
      ) {
        const star1 = absolutePositions[i];
        const star2 = absolutePositions[j];
        const distance = Math.hypot(
          star1.absoluteX - star2.absoluteX,
          star1.absoluteY - star2.absoluteY
        );

        if (distance < CONNECTION_DISTANCE) {
          const opacity = Math.max(
            0.05,
            ((CONNECTION_DISTANCE - distance) / CONNECTION_DISTANCE) * 0.3
          );
          newConnections.push({
            x1: star1.absoluteX,
            y1: star1.absoluteY,
            x2: star2.absoluteX,
            y2: star2.absoluteY,
            opacity,
            distance,
          });
        }
      }
    }

    newConnections.sort((a, b) => a.distance - b.distance);
    setConnections(newConnections.slice(0, MAX_CONNECTIONS));
  }, [stars]);

  useEffect(() => {
    calculateConnections();
    const handleResize = () => setTimeout(calculateConnections, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateConnections]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-maroon-primary to-maroon-secondary font-montserrat"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(176,48,96,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(107,0,0,0.1)_0%,transparent_50%)]" />
      </div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.brightness,
            animationDuration: `${star.twinkleDuration}s`,
            animationDelay: `${star.twinkleDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(176, 48, 96, ${
              star.brightness * 0.5
            })`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(176, 48, 96, 0)" />
            <stop offset="50%" stopColor="rgba(176, 48, 96, 0.4)" />
            <stop offset="100%" stopColor="rgba(176, 48, 96, 0)" />
          </linearGradient>
        </defs>
        {connections.map((connection, idx) => (
          <line
            key={idx}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="url(#lineGradient)"
            strokeWidth="0.8"
            opacity={connection.opacity}
            style={{
              animation: `fadeIn 2s ease-in-out ${idx * 0.1}s both`,
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-6 sm:px-12">
        <motion.h1
          className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold drop-shadow-lg leading-tight mb-[-1.5rem]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DOUBLE
        </motion.h1>
        <motion.h1
          className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extrabold drop-shadow-lg leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            stroke-dasharray: 10;
            stroke-dashoffset: 10;
          }
          to {
            opacity: 1;
            stroke-dasharray: 0;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
