
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
}

const AnimatedText = ({
  children,
  delay = 0,
  once = true,
  className = "",
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView && !isVisible) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);
    } else if (!inView && !once) {
      setIsVisible(false);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [inView, isVisible, delay, once]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "transform 0.5s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedText;
