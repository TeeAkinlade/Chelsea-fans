import { chatScreenshot, facebook, whatsapp } from "../constants/media";

const BanterCentral = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/BjWe9283Ht3E5bdI8UQDUL";
  const facebookGroupLink = "https://www.facebook.com/groups/2552475281631563/?ref=share&mibextid=NSMWBT";

  return (
    <section id="community" className="max-w-3xl mx-auto my-20 px-8 lg:px-4 text-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-7">
        <span className="text-[#034694] !leading-[100%]">OCS</span> Naija Banter Central
      </h2>
      <p className="text-gray-600 mb-4 text-base !leading-[180%]">
        Where over <span className="font-bold text-[#034694]">1,000+</span> Chelsea fans go off — no filters, just vibes.<br />
        Join our <a href={facebookGroupLink} target="_blank" rel="noopener noreferrer" className="text-[#034694] font-semibold">Facebook</a> or <a href={whatsappGroupLink} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold">WhatsApp</a> banter groups across<br /> Lagos and other states.
      </p>
      <button className="bg-[#E6EDF4] text-[#1A1A1A] rounded-md px-3 lg:px-5 py-2 font-semibold text-sm my-8 transition-colors hover:bg-[#D6E0EC]">
        Your next football hot take? It belongs here.
      </button>
      <div className="flex flex-row justify-center items-center gap-4 lg:gap-8 mb-4 mt-4">
        <img src={chatScreenshot} alt="WhatsApp Banter Group" className="w-[180px] md:w-[240px] rounded-2xl shadow" />
        <img src={chatScreenshot} alt="Facebook Banter Group" className="w-[180px] md:w-[240px] rounded-2xl shadow" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 pt-10">
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
    </section>
  );
};

export default BanterCentral;