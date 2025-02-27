
import { useEffect } from "react";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import Testimonial from "../components/Testimonial";
import AnimatedText from "../components/AnimatedText";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample images for the home page
  const featuredImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4",
      alt: "Beautiful landscape with mountains and forest",
      width: 1200,
      height: 900,
      category: "nature",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      alt: "Foggy morning in the mountains",
      width: 1200,
      height: 1500,
      category: "nature",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      alt: "Professional man portrait",
      width: 1200,
      height: 1200,
      category: "portrait",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      alt: "Fashion portrait of woman",
      width: 1200,
      height: 1600,
      category: "portrait",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
      alt: "Mountain peaks during winter",
      width: 1200,
      height: 800,
      category: "nature",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      alt: "Modern architectural detail",
      width: 1200,
      height: 1000,
      category: "architecture",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title="Capturing Moments, Creating Memories"
        subtitle="Professional photography that tells your unique story"
        backgroundImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070"
        scrollToId="featured-work"
        type="full"
      />

      <section className="py-24 bg-white" id="featured-work">
        <div className="container-custom">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl mb-3 font-display">
              Featured Work
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-gray-600 mb-12 max-w-2xl">
              A selection of my finest photographs from various projects,
              showcasing the diversity and quality of my portfolio.
            </p>
          </AnimatedText>

          <ImageGrid images={featuredImages} masonry={true} />

          <div className="flex justify-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              View Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl mb-12 font-display text-center">
              Client Testimonials
            </h2>
          </AnimatedText>

          <div className="grid gap-10 md:gap-16">
            <Testimonial
              quote="Elena has an incredible eye for detail. The photographs she took for our wedding were absolutely stunning and captured the essence of our special day perfectly."
              author="Sarah & James"
              authorTitle="Wedding Clients"
              imageSrc="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&h=500&fit=crop"
            />
            <Testimonial
              quote="Working with Elena for our corporate event was a pleasure. Professional, prompt and the end results exceeded all our expectations."
              author="Michael Chen"
              authorTitle="Marketing Director"
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container-custom text-center">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl mb-6 font-display">
              Ready to Create Something Beautiful?
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="max-w-2xl mx-auto mb-10 text-gray-300">
              Whether you're planning a special event, need professional
              portraits, or want to capture breathtaking landscapes, I'm here to
              bring your vision to life.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default Index;
