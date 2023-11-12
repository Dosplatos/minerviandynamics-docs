import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Minervian Dynamics',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/mindytheme.scss',
				'@fontsource/titillium-web',
			],
			logo: {
				src: './src/assets/logo.png',
			},
			social: {
				discord: 'https://discord.gg/jQnsy3qWu',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Getting Started', 
							link: '/guides/getting-started' 
						},
						{ 
							label: 'Generating Isk', 
							link: '/guides/generating-isk' 
						},
					],
				},
				{
					label: 'Career Overviews',
					/* This is pretty neat, you can have it auto-populate vs items[] array */
					/* autogenerate: { directory: 'reference' }, <- that's pretty neat, you can  */
					items: [
						{
							label: `Industrialist: Markets`,
							link: `/career-overview/markets`
						},
						{
							label: `Industrialist: Mining`,
							link: `/career-overview/mining`
						},
						{
							label: `Enforcer: Abyssals`,
							link: `/career-overview/abyssals`
						},
						{
							label: `Enforcer: Missions`,
							link: `/career-overview/missions`
						},
						{
							label: `Enforcer: Ratting`,
							link: `/career-overview/ratting`
						},
						{
							label: `Exploration`,
							link: `/career-overview/exploration`
						},
						{
							label: `SoF: Faction Warfare (FW)`,
							link: `/career-overview/faction-warfare`
						},
					],
				},
				{
					label: 'Reference',
					/* This is pretty neat, you can have it auto-populate vs items[] array */
					/* autogenerate: { directory: 'reference' }, <- that's pretty neat, you can  */
					items: [
						{
							label: `Useful Websites`,
							link: `/reference/useful-websites`
						},
					],
				},
			],
		}),
	],
});
