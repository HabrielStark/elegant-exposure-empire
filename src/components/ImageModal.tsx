
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

interface ImageModalProps {
  image: Image;
  onClose: () => void;
  images: Image[];
}

const ImageModal = ({ image, onClose, images }: ImageModalProps) => {
  const [currentImage, setCurrentImage] = useState(image);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage]);

  const currentIndex = images.findIndex((img) => img.id === currentImage.id);

  const showNextImage = () => {
    if (currentIndex < images.length - 1) {
      setIsLoading(true);
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const showPrevImage = () => {
    if (currentIndex > 0) {
      setIsLoading(true);
      setCurrentImage(images[currentIndex - 1]);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left, show next
      showNextImage();
    } else if (touchStart - touchEnd < -100) {
      // Swipe right, show previous
      showPrevImage();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute top-4 right-4 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors z-10"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors z-10 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          showPrevImage();
        }}
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors z-10 ${
          currentIndex === images.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          showNextImage();
        }}
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div
        className="w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-t-white border-opacity-20 rounded-full animate-spin" />
          </div>
        )}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleImageLoad}
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageModal;
