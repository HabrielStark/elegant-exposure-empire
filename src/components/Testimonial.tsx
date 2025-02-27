
import AnimatedText from "./AnimatedText";

interface TestimonialProps {
  quote: string;
  author: string;
  authorTitle?: string;
  imageSrc?: string;
}

const Testimonial = ({
  quote,
  author,
  authorTitle,
  imageSrc,
}: TestimonialProps) => {
  return (
    <AnimatedText>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {imageSrc && (
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={imageSrc}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <blockquote className="text-xl md:text-2xl font-serif italic mb-4">
            "{quote}"
          </blockquote>
          <cite className="not-italic font-medium">
            {author}
            {authorTitle && (
              <span className="font-normal text-gray-500 ml-2">
                {authorTitle}
              </span>
            )}
          </cite>
        </div>
      </div>
    </AnimatedText>
  );
};

export default Testimonial;
