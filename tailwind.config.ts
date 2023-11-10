import { type Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: ['*'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [],
} satisfies Config
