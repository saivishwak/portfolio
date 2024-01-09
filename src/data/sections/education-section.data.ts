import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor of Technology',
      institution: 'BML Munjal University',
      image: import('@/assets/logos/bml_logo.jpg'),
      dates: [new Date('2016'), new Date('2020')],
      description: '',
      links: [linkedin({ url: 'https://www.linkedin.com/school/bml-munjal-university/' })],
    },
    // {
    //   title: 'Information Technology',
    //   institution: 'Wrocław University of Science and Technology',
    //   image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
    //   dates: [new Date('2011.10'), new Date('2014.07')],
    //   description: "Bachelor's degree. Specialization in application development.",
    //   links: [website({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
