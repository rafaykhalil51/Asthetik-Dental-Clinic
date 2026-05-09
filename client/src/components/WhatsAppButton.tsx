/**
 * ASTHETIK DENTAL — WhatsApp Floating Button
 * Design: Fixed bottom-right, green pulse animation
 */
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/92XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Asthetik%20Dental%20and%20Implant%20Centre"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 whatsapp-pulse"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" stroke="white" />
    </a>
  );
}
