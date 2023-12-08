import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '30f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '444'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ef0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b5e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '68d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '18d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b5c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f94'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7c8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ff2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e28'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'f14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /AB Testing',
                component: ComponentCreator('/docs/1st Research Phase /AB Testing', 'a77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /Competitor analysis',
                component: ComponentCreator('/docs/1st Research Phase /Competitor analysis', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /Customer Journey',
                component: ComponentCreator('/docs/1st Research Phase /Customer Journey', '198'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /Frame the design challenge',
                component: ComponentCreator('/docs/1st Research Phase /Frame the design challenge', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /Overview',
                component: ComponentCreator('/docs/1st Research Phase /Overview', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /Persona',
                component: ComponentCreator('/docs/1st Research Phase /Persona', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st Research Phase /Research Introduction',
                component: ComponentCreator('/docs/1st Research Phase /Research Introduction', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase /Competitor analysis',
                component: ComponentCreator('/docs/2nd Research Phase /Competitor analysis', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase /Customer Journey',
                component: ComponentCreator('/docs/2nd Research Phase /Customer Journey', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase /Frame the desing challenge',
                component: ComponentCreator('/docs/2nd Research Phase /Frame the desing challenge', '038'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase /Overview',
                component: ComponentCreator('/docs/2nd Research Phase /Overview', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase /Persona',
                component: ComponentCreator('/docs/2nd Research Phase /Persona', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase /Research Introduction',
                component: ComponentCreator('/docs/2nd Research Phase /Research Introduction', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Development/Voice Over Generator',
                component: ComponentCreator('/docs/Development/Voice Over Generator', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/AB Testing',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/AB Testing', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Competitive analysis',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Competitive analysis', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Conclusion',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Conclusion', '691'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Customer Journey',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Customer Journey', '496'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Introduction',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Introduction', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Persona',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Persona', '71e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Research framing',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Research framing', 'd09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/AB Testing',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/AB Testing', '974'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Competitive analysis',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Competitive analysis', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Customer Journey',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Customer Journey', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Introduction',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Introduction', 'bad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Persona',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Persona', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Research framing',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Research framing', 'e48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Semester Reflection/Company meetings',
                component: ComponentCreator('/docs/Semester Reflection/Company meetings', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Semester Reflection/Teacher Meetings',
                component: ComponentCreator('/docs/Semester Reflection/Teacher Meetings', '926'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Testing/Results',
                component: ComponentCreator('/docs/Testing/Results', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c09'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
