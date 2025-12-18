import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp configuration
export const WHATSAPP_CONFIG = {
  phoneNumber: "9860188215", // International format without + or spaces
  defaultMessage: "Hi, I would like to inquire about Hajj/Umrah packages.",
};

// Contact information
export const CONTACT_INFO = {
  phone: "+1 (234) 567-890",
  phoneLink: "tel:+1234567890",
  email: "info@sacredjourneys.com",
  emailLink: "mailto:info@sacredjourneys.com",
  address: "123 Islamic Center Road\nNew York, NY 10001",
  mapsLink: "https://maps.google.com/?q=40.7128,-74.0060",
};

// Agency information
export const AGENCY_INFO = {
  name: "Al-Qasim Tours & Travels",
  tagline: "Hajj & Umrah Services",
  logo: "/logo-placeholder.png",
};

// Generate WhatsApp URL
export function getWhatsAppUrl(message?: string): string {
  const msg = message || WHATSAPP_CONFIG.defaultMessage;
  const encodedMessage = encodeURIComponent(msg);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}

// Open WhatsApp in new tab
export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

