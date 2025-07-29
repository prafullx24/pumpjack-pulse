import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pumpjackCycle': {
					'0%': { 'background-image': "url('/lovable-uploads/180a713f-81f6-4fdc-baac-8ee99d21d64b.png')" },
					'10%': { 'background-image': "url('/lovable-uploads/343068e1-9f3e-4b49-9989-4a8256e466c2.png')" },
					'20%': { 'background-image': "url('/lovable-uploads/759ce247-3df1-4e2a-9e17-1bdade0b54e9.png')" },
					'30%': { 'background-image': "url('/lovable-uploads/05a5a571-5d96-423d-b497-326261f86c85.png')" },
					'40%': { 'background-image': "url('/lovable-uploads/6ad7956c-f0c9-46f4-98bb-559d0ce4019d.png')" },
					'50%': { 'background-image': "url('/lovable-uploads/bbb321de-804d-4b03-9083-38f68e210e4b.png')" },
					'60%': { 'background-image': "url('/lovable-uploads/10d66042-ee84-48ba-bbc3-cdea319cb772.png')" },
					'70%': { 'background-image': "url('/lovable-uploads/7052744a-58a7-40fd-8fdb-24d64973fd0e.png')" },
					'80%': { 'background-image': "url('/lovable-uploads/a7a43252-0977-4be6-be31-b75b6d7bb1b8.png')" },
					'90%': { 'background-image': "url('/lovable-uploads/27494ea9-8fbc-4f5f-8d9d-323da7fdf1af.png')" },
					'100%': { 'background-image': "url('/lovable-uploads/180a713f-81f6-4fdc-baac-8ee99d21d64b.png')" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pumpjack-cycle': 'pumpjackCycle 2s steps(10) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
