import { Fraunces, DM_Sans, Noto_Serif_Devanagari, Noto_Serif_Bengali } from "next/font/google";

export const display = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-display", 
  axes: ["opsz"]
});

export const body = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body"
});

export const deva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva"
});

export const beng = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-beng"
});
