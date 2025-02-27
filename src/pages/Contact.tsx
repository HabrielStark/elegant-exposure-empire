
import { useEffect } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import AnimatedText from "../components/AnimatedText";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Get in Touch"
        subtitle="Let's discuss your project and create something beautiful together"
        type="half"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedText>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 font-display">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-10 max-w-md">
                  Feel free to reach out with any questions about my services,
                  availability, or pricing. I'm looking forward to hearing from
                  you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:hello@elenastudio.com"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        hello@elenastudio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Studio Location</h3>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm
                        <br />
                        Saturday: 10am - 4pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Instagram</h3>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        @elena.studio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-display mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom text-center">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl mb-10 font-display">
              Frequently Asked Questions
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <AnimatedText delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  What types of photography do you offer?
                </h3>
                <p className="text-gray-600">
                  I specialize in portrait, landscape, event, and commercial
                  photography. Each service is tailored to your specific needs
                  and vision.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  How far in advance should I book?
                </h3>
                <p className="text-gray-600">
                  For events, I recommend booking 2-3 months in advance.
                  Portrait sessions can often be accommodated with 2-3 weeks'
                  notice.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  What is your pricing structure?
                </h3>
                <p className="text-gray-600">
                  Pricing varies based on the type and duration of the shoot.
                  Please contact me for a custom quote based on your specific
                  needs.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  How long until I receive my photos?
                </h3>
                <p className="text-gray-600">
                  Typically, you'll receive a preview within 1 week and the full
                  edited collection within 2-3 weeks, depending on the project
                  scope.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
