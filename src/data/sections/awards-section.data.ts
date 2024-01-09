import type { ReadonlyDeep } from 'type-fest';
import { AwardsSection } from '@/types/sections/awards-section.types';
import { website } from '../helpers/links';

const AwardsSectionData = {
  config: {
    title: 'Honors & awards',
    slug: 'awards',
    icon: 'fa6-solid:crown',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  awards: [
    {
      name: "Q2'23 ITSM Mr. Miyagi",
      date: new Date('2023-08'),
      description:
        'Awarded to individuals who have shown exceptional mentorship.',
      company: "ServiceNow",
    },
    {
      name: "Llama Award",
      date: new Date('2022-11'),
      description:
        'UTG Llama award for Q4/2022 for outstanding contributions and achievements',
      company: "ServiceNow",
    },
    {
      name: "Llama Award",
      date: new Date('2021-12'),
      description:
        '2021 Q3 Award for making significant contributions to team and product in such a short timeAwarded to individuals who have shown exceptional mentorship.',
      company: "ServiceNow",
    },
  ],
} as const satisfies ReadonlyDeep<AwardsSection>;

export default AwardsSectionData;
