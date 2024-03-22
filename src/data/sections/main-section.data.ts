import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/ProfilePic.jpg'),
  fullName: 'Sai Vishwak Korimerla',
  role: 'Senior Software Engineer',
  details: [
    // { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'saivishwak40@gmail.com', url: 'mailto:saivishwak40@gmail.com' },
    { label: 'From', value: 'India' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'mark.freeman.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    `I'm a Senior Software Engineer at ServiceNow, specializing in Performance Engineering, Building scalable applications using my skills in Full-Stack Development, JavaScript, and Java. Beyond code, I'm an avid explorer of AI, Decentralized Internet, Neuroscience, and Psychology. Driven by a passion for innovative software solutions, I actively promote the integration of advanced technology in bridging the gap between Gen AI and Human Intelligence, fostering collaborative efforts to tackle intricate software challenges. When not coding, you'll find me immersed in neuroscience texts or pursuing music. Let's connect for tech discussions or compelling conversations!`,
  tags: [{ name: 'Available for mentoring' }, { name: 'Buildiing DeepLearning Framework from scratch' }, { name: "Building AI enabled Full Stack Solutions" }],
  action: {
    label: 'Download Resume',
    url: 'https://github.com/saivishwak/portfolio/blob/main/public/cv.pdf',
    downloadedFileName: 'Resume-SaiVishwak_Korimerla.pdf',
  },
  links: [github({ url: 'https://github.com/saivishwak' }), linkedin({ url: 'https://www.linkedin.com/in/sai-vishwak-korimerla/' }), twitter({ url: 'https://twitter.com/sai_vishwak_k' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
