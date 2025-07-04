/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class', // si tu veux activer le mode dark par classe
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				primary: 'oklch(var(--color-primary))',
				background: 'oklch(var(--color-background))',
				foreground: 'oklch(var(--color-foreground))',
			},
			borderRadius: {
				xl: '1rem',
				'2xl': '1.5rem',
			},
		},
	},
	plugins: [
		forms({
			strategy: 'class', // permet d'utiliser `.form-input` etc. au lieu de réinitialiser tous les inputs par défaut
		}),
		typography,
	],
};
