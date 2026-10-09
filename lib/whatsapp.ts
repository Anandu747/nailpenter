import { CONTACT } from "@/lib/data";

// India country code (91) add cheythu
const WA_NUMBER = `91${CONTACT.phone}`;

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// "₹1,499" -> 1499
export const parsePrice = (price: string | number) =>
  typeof price === "number"
    ? price
    : Number(price.replace(/[^\d.]/g, "")) || 0;

// 1499 -> "₹1,499"
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const singleEnquiry = (title: string, price: string) =>
  `Hi Soniya, I'd like to enquire about *${title}* (starting from ${price}). Could you share the available designs and slots?`;