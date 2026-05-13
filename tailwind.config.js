/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emeraldDeep: '#123C2F',
        forest: '#0B2E24',
        cream: '#F7F2EA',
        warmWhite: '#FFFDF8',
        burntOrange: '#F26A2E',
        mutedGold: '#C8A75D',
        teal: '#0F8C83',
        charcoal: '#161616',
        softBlack: '#050505',
        muted: '#6B6B6B',
        neutralBorder: '#E9E1D6',
        stanBlack: '#181819',
        stanSurface: '#F5F5F5',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 48px rgba(18, 60, 47, 0.08)',
        premium: '0 30px 80px rgba(11, 46, 36, 0.16)',
        stan: '0 24px 70px rgba(24, 24, 25, 0.12)',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'luxury-glow':
          'radial-gradient(circle at top left, rgba(200, 167, 93, 0.16), transparent 28%), radial-gradient(circle at 85% 15%, rgba(15, 140, 131, 0.14), transparent 22%), linear-gradient(135deg, #123C2F 0%, #0B2E24 100%)',
      },
    },
  },
  plugins: [],
}
