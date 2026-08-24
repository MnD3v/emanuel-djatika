"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Si la page est déjà complètement chargée
    if (document.readyState === "complete") {
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    }

    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 600);
    };

    window.addEventListener("load", handleLoad);

    // Sécurité : forcer la fermeture du loader après 5 secondes maximum
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex items-center justify-center">
            {/* Anneau rotatif minimaliste */}
            <div className="absolute w-20 h-20 border-[2px] border-white/5 border-t-primary rounded-full animate-spin"></div>
            {/* Logo au centre */}
            <img
              src="/logo.png"
              alt="Emanuel DJATIKA"
              className="w-8 h-8 object-contain animate-pulse filter invert"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
