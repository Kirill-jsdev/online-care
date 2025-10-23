import { Phone } from "lucide-react";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="bg-blue-900 border-t border-blue-800 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Phone number - Left */}
          {/* <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-300" />
            <a href="tel:+998900000000" className="text-blue-100 hover:text-white transition-colors text-sm">
              +998 (90) 000-00-00
            </a>
          </div> */}

          {/* Social media - Right */}
          <div className="flex items-center gap-3">
            <span className="text-blue-300 text-sm mr-2">Мы в соцсетях:</span>
            <a
              href="https://instagram.com/zabota.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://t.me/zabota_med"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              title="Telegram"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
