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
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				inter: ['Inter', 'system-ui', 'sans-serif'],
				jetbrains: ['JetBrains Mono', 'Consolas', 'monospace'],
				'noto-devanagari': ['Noto Sans Devanagari', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--edu-primary-light))',
					dark: 'hsl(var(--edu-primary-dark))',
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
				},
				// Educational Platform Specific Colors
				edu: {
					primary: 'hsl(var(--edu-primary))',
					'primary-light': 'hsl(var(--edu-primary-light))',
					success: 'hsl(var(--edu-success))',
					'success-light': 'hsl(var(--edu-success-light))',
					warning: 'hsl(var(--edu-warning))',
					'warning-light': 'hsl(var(--edu-warning-light))',
					info: 'hsl(var(--edu-info))',
					'info-light': 'hsl(var(--edu-info-light))',
					knowledge: 'hsl(var(--edu-knowledge))',
					'knowledge-light': 'hsl(var(--edu-knowledge-light))',
				},
				// Learning Progress Colors
				progress: {
					beginner: 'hsl(var(--progress-beginner))',
					intermediate: 'hsl(var(--progress-intermediate))',
					advanced: 'hsl(var(--progress-advanced))',
					expert: 'hsl(var(--progress-expert))',
				},
				// Quiz Colors
				quiz: {
					correct: 'hsl(var(--quiz-correct))',
					incorrect: 'hsl(var(--quiz-incorrect))',
					pending: 'hsl(var(--quiz-pending))',
				}
			},
			boxShadow: {
				'glow': '0 0 20px hsl(var(--edu-primary) / 0.3)',
				'glow-lg': '0 0 40px hsl(var(--edu-primary) / 0.4)',
				'knowledge': '0 8px 32px hsl(var(--edu-knowledge) / 0.25)',
				'soft': '0 4px 20px -4px hsl(var(--foreground) / 0.1)',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-knowledge': 'var(--gradient-knowledge)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-card': 'var(--gradient-card)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--edu-primary) / 0.3)' },
					'100%': { boxShadow: '0 0 30px hsl(var(--edu-primary) / 0.6)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--edu-primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--edu-primary) / 0.6)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' }
				},
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--progress-width, 100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'progress-fill': 'progress-fill 1s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
