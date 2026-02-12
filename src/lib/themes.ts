export interface ThemeDefinition {
	id: string;
	label: string;
	description: string;
	swatches: [string, string, string];
}

export const DEFAULT_THEME = 't18';
export const THEME_STORAGE_KEY = 'dotmd.theme';

export const THEME_DEFINITIONS: ThemeDefinition[] = [
	{
		id: 't01',
		label: '01 Brutalist',
		description: 'Hard editorial cuts.',
		swatches: ['#f3ead9', '#faf8f2', '#bf0a1d'],
	},
	{
		id: 't02',
		label: '02 Neon Grid',
		description: 'Cyberpunk signal glow.',
		swatches: ['#050812', '#0c1326', '#2afadf'],
	},
	{
		id: 't03',
		label: '03 Garden',
		description: 'Organic botanical rhythm.',
		swatches: ['#f1efe4', '#fdfbf2', '#2f5a42'],
	},
	{
		id: 't04',
		label: '04 Deco Noir',
		description: 'Luxe art-deco framing.',
		swatches: ['#0e0e11', '#161619', '#dfc07a'],
	},
	{
		id: 't05',
		label: '05 Candy Pop',
		description: 'Playful Y2K candy.',
		swatches: ['#ffebd2', '#ffffff', '#ff3d81'],
	},
	{
		id: 't06',
		label: '06 Swiss',
		description: 'Strict poster grid.',
		swatches: ['#f4f2ee', '#ffffff', '#ff4d00'],
	},
	{
		id: 't07',
		label: '07 Terminal',
		description: 'Retro CRT command UI.',
		swatches: ['#07120a', '#0b1f11', '#1dd166'],
	},
	{
		id: 't08',
		label: '08 Bauhaus',
		description: 'Primary geometry.',
		swatches: ['#f7f5ef', '#ffffff', '#e83d27'],
	},
	{
		id: 't09',
		label: '09 Chronicle',
		description: 'Illuminated parchment.',
		swatches: ['#efe3c3', '#f6edd2', '#9f1d20'],
	},
	{
		id: 't10',
		label: '10 Chrome',
		description: 'Liquid glass future.',
		swatches: ['#07090f', '#cfe0ff', '#6ee7ff'],
	},
	{
		id: 't11',
		label: '11 Zine Riot',
		description: 'Punk collage energy.',
		swatches: ['#f9f4ea', '#ffffff', '#d72638'],
	},
	{
		id: 't12',
		label: '12 Quiet Temple',
		description: 'Minimal reader mode.',
		swatches: ['#f7f8fb', '#f9fafd', '#5a6882'],
	},
	{
		id: 't13',
		label: '13 Blueprint',
		description: 'Technical drafting mode.',
		swatches: ['#e8eef9', '#f5f8ff', '#1b5bd6'],
	},
	{
		id: 't14',
		label: '14 Coastal',
		description: 'Airy magazine coast.',
		swatches: ['#e9f6fb', '#f9fdff', '#0f7da5'],
	},
	{
		id: 't15',
		label: '15 Arcade',
		description: '8-bit cabinet style.',
		swatches: ['#fef9e7', '#ffffff', '#d94c00'],
	},
	{
		id: 't16',
		label: '16 Soft Clay',
		description: 'Tactile rounded UI.',
		swatches: ['#ede9ff', '#f8f6ff', '#7a5cff'],
	},
	{
		id: 't17',
		label: '17 Runway',
		description: 'Fashion editorial polish.',
		swatches: ['#f6f5f2', '#ffffff', '#b48d45'],
	},
	{
		id: 't18',
		label: '18 Notebook',
		description: 'Handwritten notes.',
		swatches: ['#fbf6ea', '#fffdf7', '#2f6bb2'],
	},
	{
		id: 't19',
		label: '19 Metro Slab',
		description: 'Urban transit modular.',
		swatches: ['#f0f1f3', '#ffffff', '#ff3d00'],
	},
	{
		id: 't20',
		label: '20 Solarpunk',
		description: 'Optimistic eco-tech.',
		swatches: ['#edf7e8', '#f8fff5', '#2f9d5f'],
	},
];

export const THEME_IDS = THEME_DEFINITIONS.map((theme) => theme.id);
