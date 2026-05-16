import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923332130700?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20clinical%20consultation%20at%20Asthetik%20Dental%20and%20Implant"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group overflow-hidden"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
      <MessageCircle size={30} fill="white" stroke="white" className="relative z-10" />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 animate-ping bg-[#25D366] opacity-20 rounded-full pointer-events-none" />
    </a>
  );
}
