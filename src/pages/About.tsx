
import { useEffect } from "react";
import Hero from "../components/Hero";
import AnimatedText from "../components/AnimatedText";
import { Camera, Award, Clock, Users } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="About Elena"
        subtitle="Photographer, storyteller, and visual artist"
        type="half"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedText>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 font-display">
                  My Story
                </h2>
                <div className="space-y-5 text-gray-700">
                  <p>
                    I'm Elena, a professional photographer with over 10 years of
                    experience capturing life's most precious moments. My journey
                    began with a simple point-and-shoot camera and a passion for
                    finding beauty in everyday life.
                  </p>
                  <p>
                    After studying Fine Arts and Photography at the New York
                    Institute of Art, I began my professional career working with
                    fashion magazines and eventually branched out to develop my
                    own distinctive style that blends artistic composition with
                    authentic emotion.
                  </p>
                  <p>
                    Today, I specialize in portrait, landscape, and event
                    photography, bringing a unique perspective to every shoot.
                    Whether I'm photographing a wedding, a corporate event, or a
                    personal portrait session, my goal is always the same: to
                    create timeless images that tell your story.
                  </p>
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
                  alt="Elena in her studio"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop"
                    alt="Camera"
                    className="w-28 h-28 object-cover rounded"
                  />
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl mb-16 font-display text-center">
              Why Choose Me
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedText delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Quality</h3>
                <p className="text-gray-600">
                  State-of-the-art equipment and techniques to ensure the
                  highest quality images.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Award-Winning Vision
                </h3>
                <p className="text-gray-600">
                  Recipient of multiple photography awards with a unique artistic
                  perspective.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Timely Delivery</h3>
                <p className="text-gray-600">
                  Quick turnaround times without compromising on quality or
                  attention to detail.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Personalized Service
                </h3>
                <p className="text-gray-600">
                  Tailored approach to each client, ensuring your vision comes to
                  life.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container-custom">
          <AnimatedText>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-6 font-display">
                My Approach
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                "Photography is not about the camera, the settings, or even the
                light. It's about seeing something that others don't and
                capturing that vision."
              </p>
              <p className="text-lg italic">— Elena</p>
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default About;
