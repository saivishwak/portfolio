import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  Java,
  JavaScript,
  Matlab,
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Software Engineer (SDE-2)',
      company: 'ServiceNow',
      image: import('@/assets/logos/servicenow_logo.jpg'),
      dates: [new Date('2021-06'), null],
      description: `
        - Working on products such as Problem, Incident, Change, Service Operations Workspace, Notify, and Twilio Integration with Notify as a Software Engineer in the ITSM department.
        - Instructor for new hires boot camp training.
        - Gave couple of Tech Talks comapny wide on frontend technologies.
        - Went to Egypt (Cairo) as a Bootcamp instructor.
        - Performance Engineering for applications across ITSM.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [JavaScript(), Java()],
      },
      links: [website({ url: 'https://www.servicenow.com/' }), linkedin({ url: 'https://www.linkedin.com/company/servicenow/' })],
    },
    {
      role: 'Software Engineer (SDE-1)',
      company: 'LinkedPhone',
      image: import('@/assets/logos/linkedphone_logo.jpg'),
      dates: [new Date('2020-10'), new Date('2021-06')],
      description: `
        - Developed intelligent appointment scheduling service from scratch. The service offers a chatbot, voice bot, and WebApp to schedule a meeting along with an availability check for users that needs to be added in the meeting, The power lies in checking availability up to a year for scheduling the meetings within seconds.
        - Integrating docker and devops into the organization for a better development environment..
        - Worked on implementing new features and fixing bugs across multiple applications and stacks.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), JavaScript(), typescript()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/linkedphone/' })],
    },
    {
      role: "Bachelor's Thesis Project",
      company: 'Sandvik',
      image: import('@/assets/logos/sandvik_logo.jpg'),
      dates: [new Date('2020-01'), new Date('2020-05')],
      description: `
        Worked on a project with Sandvik’s R&D department for detecting stress levels on the rotary bit that was having several failures. Performed several advanced computational simulations using numerical method algorithms. The simulations were based on algorithms like, Finite Element Method which involves various other numerical methods ranging from numerical integrations to numerical differentiation of multiple variables and Matrix computation.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [Matlab()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/sandvik/' })],
    },
    {
      role: "Engineering Intern",
      company: 'Defence Research and Development Laboratory (DRDL) - DRDO',
      image: import('@/assets/logos/drdo_logo.jpg'),
      dates: [new Date('2019-05'), new Date('2019-07')],
      description: `
       Built a standalone software with GUI using MATLAB for predesign analysis and plotting of super-sonic convergent- divergent rocket nozzle for incompressible fluids using Numerical method: Method of Characteristics for Rocket Nozzle and Analytical method: G.V Rao Nozzle Optimization. The software is capable of plotting perfect rocket nozzle contour using various parameters like ambient temperature, pressure inside combustion chamber, etc. The predicted nozzle contour data points can be exported into any CAD software for 3D Modelling. 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [Matlab()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/defence-research-and-development-laboratory-drdl-hyderabad/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
