// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkObsidianCallout from "remark-obsidian-callout";

// https://astro.build/config
export default defineConfig({
    site: 'https://rtech.support',
    integrations: [starlight({
        title: 'rTS Wiki',
        favicon: '/favicon.ico',
        logo: {
            src: './src/assets/favicon.png',
        },
        components: {
            Header: './src/components/customHeader.astro',
            PageFrame: './src/components/customPageFrame.astro',
            Sidebar: './src/components/customSidebar.astro',
        }, 
        customCss: [
            './src/styles/main.css',
            './src/styles/callouts.css',
        ],
        sidebar: [
            {
                label: 'Information',
                autogenerate: { directory: 'meta' },
                collapsed: true,
            },
            {
                label: 'Software We Recommend',
                autogenerate: { directory: 'recommendations' },
                collapsed: true,
            },
            {
                label: 'OS Install Guides',
                autogenerate: { directory: 'installations' },
                collapsed: true,
            },
            {
                label: 'General Guides',
                autogenerate: { directory: 'guides' },
                collapsed: true,
            },
            {
                label: 'Learning',
                autogenerate: { directory: 'learning' },
                collapsed: true,
            },
            {
                label: 'Safety & Security',
                autogenerate: { directory: 'safety-security' },
                collapsed: true,
            },
            {
                label: 'Backups',
                autogenerate: { directory: 'backups' },
                collapsed: true,
            },
            {
                label: 'Networking',
                autogenerate: { directory: 'networking' },
                collapsed: true,
            },
            {
                label: 'Disks',
                autogenerate: { directory: 'disks' },
                collapsed: true,
            },
            {
                label: 'Live Sessions',
                autogenerate: { directory: 'live-sessions' },
                collapsed: true,
            },
            {
                label: 'Factoids',
                autogenerate: { directory: 'factoids' },
                collapsed: true,
            },
        ],
        editLink: {
            baseUrl: 'https://github.com/r-techsupport/rts_wiki/edit/main/',
        },
        social: {
            github: 'https://github.com/r-techsupport/rts_wiki',
            discord: 'https://rtech.support/discord',
            reddit: 'https://reddit.com/r/techsupport',
        },
        pagination: false,
        lastUpdated: true,
        credits: false,
    }),
    ],
    markdown: {
        remarkPlugins: [ 
            // @ts-ignore
            [ remarkObsidianCallout, {
                callouts: {
                    note: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
                    tip: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
                    important: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
                    caution: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>'
                }
            }] 
        ],
    },
    redirects: {
        "/docs/[...slug]": "/[...slug]"
    },
});