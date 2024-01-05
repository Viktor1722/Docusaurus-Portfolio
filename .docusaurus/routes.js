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
    component: ComponentCreator('/docs', '5a2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1d0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b01'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st-Research-Phase-Evidence/AB Testing',
                component: ComponentCreator('/docs/1st-Research-Phase-Evidence/AB Testing', 'ec8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st-Research-Phase-Evidence/Competitor analysis',
                component: ComponentCreator('/docs/1st-Research-Phase-Evidence/Competitor analysis', 'c07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st-Research-Phase-Evidence/Customer Journey',
                component: ComponentCreator('/docs/1st-Research-Phase-Evidence/Customer Journey', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st-Research-Phase-Evidence/Overview',
                component: ComponentCreator('/docs/1st-Research-Phase-Evidence/Overview', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st-Research-Phase-Evidence/Persona',
                component: ComponentCreator('/docs/1st-Research-Phase-Evidence/Persona', '7d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1st-Research-Phase-Evidence/Research framing',
                component: ComponentCreator('/docs/1st-Research-Phase-Evidence/Research framing', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase Evidence/AB Testing',
                component: ComponentCreator('/docs/2nd Research Phase Evidence/AB Testing', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase Evidence/Competitor analysis',
                component: ComponentCreator('/docs/2nd Research Phase Evidence/Competitor analysis', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase Evidence/Customer Journey',
                component: ComponentCreator('/docs/2nd Research Phase Evidence/Customer Journey', '86a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase Evidence/Persona',
                component: ComponentCreator('/docs/2nd Research Phase Evidence/Persona', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/2nd Research Phase Evidence/Research framing',
                component: ComponentCreator('/docs/2nd Research Phase Evidence/Research framing', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Development/AI assistant',
                component: ComponentCreator('/docs/Development/AI assistant', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Project plan',
                component: ComponentCreator('/docs/Project plan', 'f4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/AB Testing',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/AB Testing', '927'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Comparison chart',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Comparison chart', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Conclusion',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Conclusion', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Customer Journey',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Customer Journey', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Introduction',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Introduction', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Persona',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Persona', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/1st Research Phase/Research framing',
                component: ComponentCreator('/docs/Research Report/1st Research Phase/Research framing', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/AB Testing',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/AB Testing', 'c46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Competitive analysis',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Competitive analysis', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Customer Journey',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Customer Journey', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Introduction',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Introduction', 'cb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Persona',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Persona', '3e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/2nd Research Phase/Research framing',
                component: ComponentCreator('/docs/Research Report/2nd Research Phase/Research framing', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Research Report/Reflection',
                component: ComponentCreator('/docs/Research Report/Reflection', '416'),
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
                path: '/docs/Semester Reflection/MidTerm',
                component: ComponentCreator('/docs/Semester Reflection/MidTerm', 'b39'),
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
                path: '/docs/Testing/Ai assistant results',
                component: ComponentCreator('/docs/Testing/Ai assistant results', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Testing/Introduction',
                component: ComponentCreator('/docs/Testing/Introduction', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Testing/Voice over results',
                component: ComponentCreator('/docs/Testing/Voice over results', 'b5a'),
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
