import React from 'react';
import gallery1 from '../Assets/img-1.png';
import gallery2 from '../Assets/img-2.png';
import gallery3 from '../Assets/img-3.png';
import gallery4 from '../Assets/img-4.jpg';
import gallery5 from '../Assets/img-5.jpg';
import gallery6 from '../Assets/img-6.jpg';

import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]; // ✅ move here

  return (
    <footer className="bg-[#F7FAFF] text-[#4A5568] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Address */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#6B46C1]">ADDRESS</h4>
          <p className="flex items-start gap-2 mb-4 text-sm">
            <MapPin size={18} /> Headquarter Swastik Galaxy A Block, 1st Floor,
            Near Indra Square, Shahdol, MP
          </p>
          <p className="flex items-center gap-2 mb-6 text-sm">
            <Mail size={18} /> hr@whitecirclegroup.in
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#6B46C1]">
              <Twitter />
            </a>
            <a href="#" className="hover:text-[#6B46C1]">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#6B46C1]">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#6B46C1]">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#6B46C1]">QUICK LINK</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#6B46C1]">About Us</a></li>
            <li><a href="#" className="hover:text-[#6B46C1]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#6B46C1]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#6B46C1]">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-[#6B46C1]">Career</a></li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#6B46C1]">GALLERY</h4>
          <div className="grid grid-cols-3 gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className="rounded-md object-cover h-20 w-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#E2E8F0] pt-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center text-[#4A5568]">
        <span>© WhiteCircle {new Date().getFullYear()}. All rights reserved.</span>
        <div className="space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-[#6B46C1]">Home</a>
          <a href="#" className="hover:text-[#6B46C1]">Cookies</a>
          <a href="#" className="hover:text-[#6B46C1]">Help</a>
          <a href="#" className="hover:text-[#6B46C1]">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
