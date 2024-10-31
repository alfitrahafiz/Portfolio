/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background colors
        bg: {
          primary: '#ffffff', // putih bersih untuk latar utama
          secondary: '#f5f5f5', // abu-abu muda untuk kontras lembut
          dark: '#1c1c1e', // hitam arang untuk area gelap
        },
        // Text colors
        text: {
          primary: '#1a1a1a', // abu-abu gelap untuk teks utama
          secondary: '#3c3c3c', // abu-abu medium untuk teks sekunder
          muted: '#7d7d7d', // abu-abu terang untuk teks yang diredam
        },
        // Navbar colors
        navbar: {
          bg: '#1a1a1a', // abu-abu sangat gelap untuk navbar
          text: '#ffffff', // putih untuk teks pada navbar
          accent: '#d4af37', // warna emas sebagai accent, menghindari warna biru
        },
        // Accent color (for buttons, icons, etc.)
        accent: {
          primary: '#d4af37', // emas untuk elemen aksen
          secondary: '#aaaaaa', // abu-abu terang untuk aksen yang lebih halus
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
