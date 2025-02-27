
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Camera } from "lucide-react";
import ImageModal from "./ImageModal";

interface Image {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

interface ImageGridProps {
  images: Image[];
  columns?: number;
  gap?: number;
  masonry?: boolean;
  withFilters?: boolean;
}

const ImageGrid = ({
  images,
  columns = 3,
  gap = 24,
  masonry = true,
  withFilters = false,
}: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [visibleImages, setVisibleImages] = useState<Image[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredImages, setFilteredImages] = useState<Image[]>(images);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Extract unique categories
  const categories = ["all", ...new Set(images.map((img) => img.category).filter(Boolean))];

  useEffect(() => {
    // Apply filtering
    if (activeFilter === "all") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter((img) => img.category === activeFilter));
    }
  }, [activeFilter, images]);

  // Load images progressively
  useEffect(() => {
    if (inView) {
      const loadNextBatch = () => {
        setVisibleImages((prevVisible) => {
          const nextBatchSize = 6;
          const nextIndex = prevVisible.length;
          const nextBatch = filteredImages.slice(
            nextIndex,
            nextIndex + nextBatchSize
          );
          return [...prevVisible, ...nextBatch];
        });
      };

      loadNextBatch();
    }
  }, [inView, filteredImages]);

  // Reset visible images when filtered images change
  useEffect(() => {
    setVisibleImages(filteredImages.slice(0, 6));
  }, [filteredImages]);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const getSpan = useCallback((height: number): number => {
    const span = Math.ceil(height / 10) + 5; // 10px row height + 5 for gap
    return span;
  }, []);

  return (
    <>
      {withFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                activeFilter === category
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      {masonry ? (
        <div className="masonry-grid" style={{ gridGap: `${gap}px` }}>
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="masonry-grid-item hover-image animate-fade-in"
              style={{
                "--grid-span": getSpan(image.height),
              } as React.CSSProperties}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                <Camera className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${
              columns > 0 ? columns : "auto-fill"
            }, minmax(250px, 1fr))`,
            gap: `${gap}px`,
          }}
        >
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="aspect-[4/5] overflow-hidden rounded-md hover-image animate-fade-in"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                <Camera className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      )}

      {visibleImages.length < filteredImages.length && (
        <div ref={ref} className="flex justify-center mt-16">
          <div className="w-16 h-16 border-4 border-t-black border-opacity-20 rounded-full animate-spin" />
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} images={filteredImages} />
      )}
    </>
  );
};

export default ImageGrid;
