import { Link } from 'react-router-dom';
import { ACADEMY_NAME, PHONE_NUMBER, EMAIL } from '../constants';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold text-primary mb-6 block">
              {ACADEMY_NAME}
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering students with the beauty of Hindi language through personalized and effective teaching methods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-500 hover:text-accent transition-colors text-sm">Courses</Link></li>
              <li><Link to="/classes" className="text-gray-500 hover:text-accent transition-colors text-sm">Classes</Link></li>
              <li><Link to="/schedule" className="text-gray-500 hover:text-accent transition-colors text-sm">Schedule</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/testimonials" className="text-gray-500 hover:text-accent transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/enquiry" className="text-gray-500 hover:text-accent transition-colors text-sm">Enquiry</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-accent transition-colors text-sm">Contact</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">{EMAIL}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">Available for Online, Offline & Home Tuition</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © {currentYear} {ACADEMY_NAME}. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
