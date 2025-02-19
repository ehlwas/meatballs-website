import { PiRedditLogoFill } from "react-icons/pi";
import { RiDiscordFill, RiFacebookCircleFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import Image from "../common/custom/Image";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t-1 border-[#5C5C5C] text-white py-10 px-6 md:px-16">
      
      <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-1">
        <Image 
          src="/assets/images/footer/footer-bg.png"
          className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 opacity-15 -z-1"
        />
        {/* Web Services */}
        <div>
          <h3 className="text-sm font-light tracking-widest uppercase mb-8">Web Services</h3>
          <ul className="space-y-2 font-medium text-lg">
            <li className="mb-5">Pro Website</li>
            <li className="mb-5">Basic Website</li>
          </ul>
          <h3 className="text-sm font-light tracking-widest uppercase mt-14 mb-8">Add Ons</h3>
          <ul className="space-y-2 font-medium text-lg">
            <li className="mb-5">Additional Pages</li>
            <li className="mb-5">Domain Registration</li>
            <li className="mb-5">Web Hosting</li>
            <li className="mb-5">Google Workspace Setup</li>
            <li className="mb-5">Social Media Integration</li>
            <li className="mb-5">Google Maps Integration</li>
            <li className="mb-5">Analytics Integration</li>
          </ul>
        </div>

        {/* Marketing Services */}
        <div>
          <h3 className="text-sm font-light tracking-widest uppercase mb-8">Marketing Services</h3>
          <ul className="space-y-2 font-medium text-lg">
            <li className="mb-5">Logo Creation</li>
            <li className="mb-5">Logo Animation</li>
            <li className="mb-5">Promotional Poster/Banner</li>
            <li className="mb-5">Brochure Design<br /><span className="text-sm font-light">(1 Page, Bi-Fold / Tri-Fold)</span></li>
            <li className="mb-5">Catalog</li>
            <li className="mb-5">Product Photography</li>
            <li className="mb-5">Content Creation</li>
            <li className="mb-5">Social Media Branding & Enhancement</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-sm font-light tracking-widest uppercase mb-8">Work</h3>
          <ul className="space-y-2 font-medium text-lg">
            <li className="mb-5">Portfolio</li>
            <li className="mb-5">What Client Says</li>
            <li className="mb-5">Our Team</li>
            <li className="mb-5">Contact Us</li>
          </ul>
          <h3 className="text-sm font-light tracking-widest uppercase mt-14 mb-8">Advance Features</h3>
          <ul className="space-y-2 font-medium text-lg">
            <li className="mb-5">Lead Capture Forms</li>
            <li className="mb-5">Scheduling Software</li>
          </ul>
          <h3 className="text-sm font-light tracking-widest uppercase mt-14 mb-8">Stay Connected</h3>
          <ul className="space-y-2 font-light text-lg">
            <li className="mb-5 ">Email us at <a href="mailto:inquire.div@gmail.com" className="font-medium">inquire.div@gmail.com</a></li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <RiFacebookCircleFill className="text-3xl hover:text-gray-400 cursor-pointer" />
            <RiInstagramFill className="text-3xl hover:text-gray-400 cursor-pointer" />
            <RiLinkedinFill className="text-3xl hover:text-gray-400 cursor-pointer" />
            <PiRedditLogoFill className="text-3xl hover:text-gray-400 cursor-pointer" />
            <RiDiscordFill className="text-3xl hover:text-gray-400 cursor-pointer" />
            <RiYoutubeFill className="text-3xl hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-1 text-center text-sm text-gray-500 mt-8 pt-4">
        2025 | <span className="text-white font-bold">div.ae</span> | ALL RIGHTS RESERVED
      </div>

    </footer>
  );
}

export default Footer