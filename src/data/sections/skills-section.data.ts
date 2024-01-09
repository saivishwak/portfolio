import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  mongoDb,
  nestJs,
  postgreSql,
  react,
  Solid,
  supabase,
  tailwindCss,
  typescript,
  NextJs,
  Go,
  rust,
  vue,
  CPlusPlus,
  Docker,
  Kubernetes,
  ReinforcementLearnging,
  DeepLearning
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 5,
        }),
        NextJs({
          level: 5,
        }),
        typescript({
          level: 4,
        }),
        Solid({ level: 4 }),
        vue({ level: 4 }),
        Go({ level: 3 }),
        rust({ level: 3 }),
        CPlusPlus({ level: 3 }),
        tailwindCss({ level: 4 }),
        Docker({ level: 3 }),
        Kubernetes({ level: 3 }),
        postgreSql({ level: 3 }),
        mongoDb({ level: 3 }),
      ],
    },
    {
      title: 'Currently Learning',
      skills: [ReinforcementLearnging(), DeepLearning()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English' },
        { icon: 'circle-flags:in', name: 'Hindi' },
        { icon: 'circle-flags:in', name: 'Telugu' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
