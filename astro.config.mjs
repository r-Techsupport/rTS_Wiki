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
            src: './src/assets/favicon.webp',
        },
        components: {
            Header: './src/components/customHeader.astro',
            PageFrame: './src/components/customPageFrame.astro',
            Sidebar: './src/components/customSidebar.astro',
            PageTitle: './src/components/customPageTitle.astro',
        }, 
        customCss: [
            './src/styles/main.css',
            './src/styles/callouts.css',
            './src/styles/tables.css',
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
            baseUrl: 'https://github.com/r-techsupport/rts_wiki/edit/master/',
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
        "/docs/[...slug].html": "/[...slug]",
        "/docs/[...slug]": "/[...slug]",
        "/rules": "/meta/rules",
        "/books/rules/page/rules-of-the-rtechsupport": "/meta/rules",
        "/books/rules": "/meta/rules",
        "/books/safety-and-security/page/malware-guide": "/safety-security/malware-guide",
        "/books/safety-and-security/page/security-rant": "/safety-security/security-rant",
        "/books/safety-and-security/page/ransomware": "/safety-security/ransomware",
        "/books/safety-and-security/page/mfa": "/safety-security/mfa",
        "/books/how-to-and-guides/page/eol-software": "/learning/eol",
        "/docs/guides/bsod_guide": "/learning/bsod_guide",
        "/books/learning/page/teredo-guide": "/networking/teredo",
        "/books/software-we-recommend/page/anti-virus-and-malware-tools": "/recommendations/av",
        "/books/software-we-recommend/page/reading-machine-temperatures-voltages": "/recommendations/temps-voltages",
        "/books/software-we-recommend": "/recommendations",
        "/books/software-we-recommend/page/blacklist": "/recommendations/blacklist",
        "/books/software-we-recommend/page/windows-maintenance": "/recommendations/maintenance",
        "/books/how-to-and-guides/page/linux-installation-guide": "/installations/install-linux",
        "/books/how-to-and-guides/page/clean-installing-windows-11": "/installations/install-11",
        "/books/how-to-and-guides/page/clean-installing-windows-10": "/installations/install-10",
        "/docs/learning/multiple-disks": "/guides/multiple-disks/",
        "/books/how-to-and-guides/page/how-to-install-and-use-ventoy": "/guides/ventoy",
        "/books/how-to-and-guides/page/psu-guide": "/guides/psu-guide",
        "/books/how-to-and-guides/page/running-memtest86": "/guides/memtest/memtest86",
        "/books/how-to-and-guides/page/hwinfo-full-guide": "/guides/hwinfo",
        "/books/how-to-and-guides/page/making-a-system-dossier": "/guides/making-a-system-dossier",
        "/books/how-to-and-guides/page/how-to-describe-a-technical-problem": "/guides/how-to-describe-a-technical-problem",
        "/books/how-to-and-guides/page/killer-network-drivers": "/guides/killer",
        "/books/how-to-and-guides/page/dism-and-sfc": "/guides/dism-sfc",
        "/books/software-we-recommend/page/disk-partition-management": "/disks/disk-management",
        "/books/troubleshooting-with-a-linux-live-session/page/wiping-disks": "/disks/disk-wipe",
        "/books/troubleshooting-with-a-live-session/chapter/linux-live-environment": "/live-sessions/linux-live-session",
        "/books/troubleshooting-with-a-live-session/chapter/windows-pe": "/live-sessions/windows-live-session",
    },
})