import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  JavaScript,
  Matlab,
  Python,
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  react,
  rust,
  sass,
  tailwindCss,
  typescript,
} from '../helpers/skills';
import { PapersSection } from '@/types/sections/papers-section.types';

const PapersSectionData = {
  config: {
    title: 'Publications',
    slug: 'papers',
    icon: 'fa6-solid:fire',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  papers: [
    {
      name: 'Numerical duality of MHD stagnation point flow and heat transfer of nanofluid past a shrinking/stretching sheet: Metaheuristic approach',
      dates: [new Date('2021-07'), new Date("2021-07")],
      journal: "Chinese Journal of Physics Elsevier",
      details: [
        { label: 'Tags', value: ['ParticalSwarmOptimization', 'AI', "Numerical Methods"] },
      ],
      description:
        'Published the paper in top international journal on using partical swarm optimization to solve a differential equation which governs heat flow in nano fluid under the guidance of Dr. Ziya Uddin.',

      links: [website({ url: 'https://www.sciencedirect.com/science/article/abs/pii/S0577907321001726' })],
    },
    {
      name: 'Finite Element Simulation of Stress Propagation in Trabecular Structure for Lightweight Applications',
      dates: [new Date('2020-09'), new Date("2020-09")],
      journal: "International Journal of Mechanics Based Design of Structures and Machines",
      details: [
        { label: 'Tags', value: ['Numerical Methods', 'Finite Element', "Computer Vision"] },
      ],

      description:
        'Finite element analysis on trabecular structure of a rat femur which is generated from a micro ct image using computer vision algorithms.',

      links: [website({ url: 'https://www.tandfonline.com/doi/full/10.1080/15397734.2020.1824790' })],
    },
    {
      name: 'Stress and Deformation Analysis of Hip Joint for Design of Hip Prosthesis',
      dates: [new Date('2020-06'), new Date("2020-06")],
      journal: "Springer Advances in Materials and Mechanical Engineering",
      details: [
        { label: 'Tags', value: ['Numerical Methods', 'Finite Element', "Computer Vision"] },
      ],

      description:
        'Finite element analysis on Hip Joint to determine the optimal design of Hip Prothesis. The hip joint was 3D reconstructed using computer vision and finite element analysis was conducted on the 3D model.',

      links: [website({ url: 'https://link.springer.com/chapter/10.1007/978-981-16-0673-1_10' })],
    },
    {
      name: 'Statistical Distribution of Structural Transformation In The Elastic Regime of Nickel-Titanium Alloy ',
      dates: [new Date('2020-01'), new Date("2020-01")],
      journal: "National Conference, Emerging Trends on Advances in Material Science",
      details: [
        { label: 'Tags', value: ['Atomic Simulation', "High Performance Computing"] },
      ],

      description:
        'ISBN: 9788194364177\n Conducted atomic simulation on Nickel-Titanium Alloy material using HPC',

      links: [],
    },

  ],
} as const satisfies ReadonlyDeep<PapersSection>;

export default PapersSectionData;
