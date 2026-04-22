import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // 1. Use MotionValues for high-performance tracking (no re-renders)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Apply separate spring physics for the "trailing" effect
  const springConfig = { damping: 30, stiffness: 300 };
  const trailConfig = { damping: 20, stiffness: 150 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set the center of the cursor
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Select all interactive elements
    const interactables = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor-hover]",
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none hidden lg:block overflow-hidden">
      {/* 3. Outer Trailing Glow (Lagging behind slightly) */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="absolute w-12 h-12 rounded-full bg-brand-cyan/10 blur-2xl"
        animate={{
          scale: isHovering ? 4 : 1.5,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />

      {/* 4. Main Cursor Ring */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="absolute w-8 h-8 rounded-full border border-brand-cyan/50 flex items-center justify-center"
        animate={{
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering
            ? "rgb(var(--brand-cyan-bright))"
            : "rgb(var(--brand-cyan))",
          borderWidth: isHovering ? "1px" : "2px",
        }}
      >
        {/* 5. Center Dot with Pulse */}
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
          animate={{
            scale: isHovering ? [1, 1.5, 1] : 1,
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
