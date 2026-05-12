import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/d6aae66c-5cdc-409d-bef9-6d3997e20580/files/f5364208-d1ed-4830-9f7f-a48ca09d5ec7.jpg"
          alt="Чистая питьевая вода"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЧИСТАЯ ВОДА
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Доставляем питьевую воду прямо к вашей двери — свежую, чистую и вовремя
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
          Заказать доставку
        </button>
      </div>
    </div>
  );
}