"use client";
import React, { useEffect, useState } from "react";

export default function HeroEntrance({ children, delay = "delay-0", className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${delay} ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
