
import { useState, useEffect } from "react";
import { ArrowDownCircle } from "lucide-react";
import AnimatedText from "./AnimatedText";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  scrollToId?: string;
  type?: "full" | "half";
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  scrollToId,
  type = "full",
}: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToElement = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        type === "full" ? "min-h-screen" : "min-h-[60vh]"
      }`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={backgroundImage}
            alt="Background"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      )}

      <div
        className={`container-custom relative z-20 text-center ${
          backgroundImage ? "text-white" : "text-foreground"
        }`}
      >
        <AnimatedText delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
        </AnimatedText>

        {subtitle && (
          <AnimatedText delay={0.5}>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl opacity-90">
              {subtitle}
            </p>
          </AnimatedText>
        )}

        {scrollToId && (
          <div className="mt-12">
            <button
              onClick={scrollToElement}
              className="animate-bounce inline-flex"
              aria-label="Scroll down"
            >
              <ArrowDownCircle className="w-10 h-10 opacity-70 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
