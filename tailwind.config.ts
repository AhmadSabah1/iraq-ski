import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5", // Lys grå baggrund
        text: "#333333", // Mørk grå tekst
        accent: "#007BFF", // Blå accentfarve
        warning: "#FF5722", // Orange advarselsfarve
        success: "#4CAF50", // Grøn succesfarve
        muted: "#666666", // Lysere grå til noter eller labels
        // Behold de eksisterende CSS-variabler
        backgroundVar: "var(--background)",
        foregroundVar: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'], // Primær skrifttype
      },
      fontSize: {
        base: ['16px', '24px'],  // Brødtekst
        lg: ['18px', '28px'],    // Lidt større brødtekst
        xl: ['24px', '32px'],    // Store overskrifter
        '2xl': ['28px', '36px'], // Meget store overskrifter
        sm: ['14px', '20px'],    // Mindre tekst som labels
        xs: ['12px', '16px'],    // Ekstra små noter eller labels
      },
    },
  },
  plugins: [],
};
export default config;
