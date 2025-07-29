import { facebook, whatsapp } from "../constants/media";

const Footer = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/BjWe9283Ht3E5bdI8UQDUL";
  const facebookGroupLink = "https://www.facebook.com/groups/2552475281631563/?ref=share&mibextid=NSMWBT";

  return (
    <footer className="mt-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-8 lg:px-4 py-16 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        <div className="flex-1 min-w-[200px]">
          <div className="font-black text-3xl lg:text-4xl !leading-[100%] mb-4 font-Bebas">OCS NAIJA</div>
          <p className="text-[#4B5563] text-sm mb-4 leading-[180%]">
            We’re the loudest Chelsea fan community in Naija. From matchday banter to original jerseys, giveaways, and community meetups — we don’t just watch Chelsea, we live it.
          </p>
          <a href="#" className="text-[#034694] text-xs font-semibold pt-6">OCBA CHELSEA SUPPORTERS NIGERIA</a>
        </div>
        <div className="hidden flex-1 min-w-[160px] lg:flex lg:items-center lg:justify-between px-10">
          <div className="h-[150px] w-[1px] bg-[#C4C4C4] border-0 mx-6 hidden lg:block"></div>
          <div>
            <p className="font-semibold mb-2 underline underline-offset-8">Quick Links</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li><a href="#" className="hover:text-[#034694]">Home</a></li>
              <li><a href="#" className="hover:text-[#034694]">Fixtures</a></li>
              <li><a href="#" className="hover:text-[#034694]">Shop</a></li>
              <li><a href="#" className="hover:text-[#034694]">Community</a></li>
            </ul>
          </div>
          <div className="h-[150px] w-[1px] bg-[#C4C4C4] border-0 mx-6 hidden lg:block"></div>
        </div>
        <div className="hidden lg:block flex-1 min-w-[220px]">
          <div className="font-semibold mb-2">Join the Community</div>
          <p className="text-gray-600 text-sm mb-3">Banter, chants, live commentary — and over 4,000 Naija Blues like you.</p>
          <div className="flex flex-col gap-2">
            <a 
              href={whatsappGroupLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-green-400 text-green-600 rounded-full px-6 py-2 font-semibold text-base hover:bg-green-50 transition-colors cursor-pointer"
            >
              <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
              Join WhatsApp Banter Group
            </a>
            <a 
              href={facebookGroupLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-blue-400 text-[#034694] rounded-full px-6 py-2 font-semibold text-base hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
              Join Facebook Banter Group
            </a>
          </div>
        </div>
        <div className="flex justify-between lg:hidden gap-4">
          <div className="w-1/2">
            <p className="font-semibold mb-2 underline underline-offset-8">Quick Links</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li><a href="#" className="hover:text-[#034694]">Home</a></li>
              <li><a href="#" className="hover:text-[#034694]">Fixtures</a></li>
              <li><a href="#" className="hover:text-[#034694]">Shop</a></li>
              <li><a href="#" className="hover:text-[#034694]">Community</a></li>
            </ul>
        </div>
        <div className="w-1/2">
          <div className="font-semibold mb-2">Join the Community</div>
          <p className="text-gray-600 text-sm mb-3">Banter, chants, live commentary — and over 4,000 Naija Blues like you.</p>
          <div className="hidden md:flex flex-col mt-4 gap-2 lg:hidden">
            <a 
              href={whatsappGroupLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-green-400 text-green-600 rounded-full px-4 py-2 font-semibold text-base hover:bg-green-50 transition-colors cursor-pointer"
            >
              <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
              Join WhatsApp Banter Group
            </a>
            <a 
              href={facebookGroupLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-blue-400 text-[#034694] rounded-full px-4 py-2 font-semibold text-base hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
              Join Facebook Banter Group
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:hidden px-8 mb-8">
        <a 
          href={whatsappGroupLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-green-400 text-green-600 rounded-full px-4 py-2 font-semibold text-base hover:bg-green-50 transition-colors cursor-pointer"
        >
          <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
          Join WhatsApp Banter Group
        </a>
        <a 
          href={facebookGroupLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-blue-400 text-[#034694] rounded-full px-4 py-2 font-semibold text-base hover:bg-blue-50 transition-colors cursor-pointer"
        >
          <img src={facebook} alt="Facebook" className="h-6 w-6" />
          Join Facebook Banter Group
        </a>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-[#C4C4C4]">
        © 2025 Ogba Chelsea Supporters Naija. Built by the Blues, for the Blues.
      </div>
    </footer>
  );
};

export default Footer;
