import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CB</span>
              </div>
              <span className="text-xl font-bold text-white">CopyBatch AI</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Generate high-quality content at scale with AI. Perfect for marketers, content creators, and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-400 text-sm hover:text-accent-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 text-sm hover:text-accent-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 text-sm hover:text-accent-400 transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm cursor-pointer hover:text-accent-400 transition-colors">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm cursor-pointer hover:text-accent-400 transition-colors">
                  Blog
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm cursor-pointer hover:text-accent-400 transition-colors">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            2024 CopyBatch AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm cursor-pointer hover:text-accent-400 transition-colors">Privacy Policy</span>
            <span className="text-gray-500 text-sm cursor-pointer hover:text-accent-400 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
