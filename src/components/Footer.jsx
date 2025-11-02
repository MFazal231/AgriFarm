import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/logo.jpg"
                alt="AgriFarm Logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="text-2xl font-bold">AgriFarm</span>
            </div>
            <p className="text-gray-400">
              Connecting farmers and consumers directly for fair pricing and
              stronger communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-agri-green-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/farmer"
                  className="text-gray-400 hover:text-agri-green-light transition-colors"
                >
                  For Farmers
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer"
                  className="text-gray-400 hover:text-agri-green-light transition-colors"
                >
                  For Consumers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-agri-green mt-0.5 flex-shrink-0" />
                <span>123 Farm Street, Agricultural District, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-agri-green flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-agri-green flex-shrink-0" />
                <span>info@agrifarm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AgriFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

