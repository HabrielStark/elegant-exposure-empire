
import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display">Elena Studio</h3>
            <p className="text-gray-300 max-w-xs">
              Capturing moments, emotions, and stories through the art of
              photography.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-400"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@elenastudio.com"
                className="transition-colors hover:text-gray-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+1234567890"
                className="transition-colors hover:text-gray-400"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-gray-300">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="hover:text-white transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>New York, NY 10001</p>
              <p>
                <a
                  href="mailto:hello@elenastudio.com"
                  className="hover:text-white transition-colors"
                >
                  hello@elenastudio.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Elena Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
