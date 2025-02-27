
import { useEffect } from "react";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import AnimatedText from "../components/AnimatedText";

const Gallery = () => {
  // All gallery images
  const galleryImages = [
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
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      alt: "Italian coastal village",
      width: 1200,
      height: 800,
      category: "travel",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      alt: "Abstract architectural lines",
      width: 1200,
      height: 1400,
      category: "architecture",
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7",
      alt: "Woman in fashion shoot",
      width: 1200,
      height: 1600,
      category: "portrait",
    },
    {
      id: "10",
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      alt: "Red shoes product photography",
      width: 1200,
      height: 900,
      category: "product",
    },
    {
      id: "11",
      src: "https://images.unsplash.com/photo-1519602035691-16ac091554a1",
      alt: "Beach sunset",
      width: 1200,
      height: 800,
      category: "nature",
    },
    {
      id: "12",
      src: "https://images.unsplash.com/photo-1508616185cce9732afabeb4bb6576ca",
      alt: "Home interior design",
      width: 1200,
      height: 1000,
      category: "architecture",
    },
    {
      id: "13",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      alt: "Woman fashion model in white",
      width: 1200,
      height: 1800,
      category: "portrait",
    },
    {
      id: "14",
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person working on laptop",
      width: 1200,
      height: 800,
      category: "lifestyle",
    },
    {
      id: "15",
      src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a",
      alt: "Food photography of dessert",
      width: 1200,
      height: 900,
      category: "food",
    },
    {
      id: "16",
      src: "https://images.unsplash.com/photo-1515388181841-887b259296f4",
      alt: "Architectural interior with staircase",
      width: 1200,
      height: 1500,
      category: "architecture",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Image Gallery"
        subtitle="Browse through my collection of photographs across various categories"
        type="half"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <AnimatedText>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-4xl mb-4 font-display">
                Photography Portfolio
              </h2>
              <p className="text-gray-600">
                Use the filters below to explore different categories or browse
                the complete collection. Click on any image to view it in full
                size.
              </p>
            </div>
          </AnimatedText>

          <ImageGrid
            images={galleryImages}
            masonry={true}
            withFilters={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
