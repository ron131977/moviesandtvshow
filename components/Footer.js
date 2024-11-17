
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="flex flex-col items-center justify-center px-4 py-6 mx-auto text-white bg-black">
    {/* Logo Section */}
    {/* <img src="/logo.png" alt="Logo" title="Master Logo" width={250} height={100}  /> */}

    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
        <FaYoutube className="w-6 h-6" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
        <FaTwitter className="w-6 h-6" />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
        <FaFacebook className="w-6 h-6" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
        <FaInstagram className="w-6 h-6" />
      </a>
    </div>

    <p className="text-center">© 2024 Movies & Tv Shows™ Explore. Discover. Online.  All Rights Reserved</p>
  </footer>
);

export default Footer;
