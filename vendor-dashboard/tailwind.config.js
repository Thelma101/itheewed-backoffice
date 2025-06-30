/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-black': 'var(--primary-black)',
        'primary-red': 'var(--primary-red)',
        'color-focus': 'var(--color-focus)',
        'bg-background': 'var(--bg-background)',
        'color-dark': 'var(--color-dark)',
        'color-black': 'var(--color-black)',
        
      },
    },
  },
  plugins: [],
}

  // --bg-background: #fef2f2;
  // --primary: #00838f;
  // --primary-black: #002528;
  // --primary-gray: #6c757d;
  // --primary-red: #eb1948;
  // --secondary: #6c757d;
  // --success: #198754;
  // --warning: #ffc107;
  // --light: #f8f9fa;
  // --color-dark: #212529;
  // --color-black: #002528;
  // --color-focus: #ccfdf2;