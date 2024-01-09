import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
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

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Bolt',
      // image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2023-03'), null],
      details: [
        { label: 'Category', value: ['Programming language', 'Open source'] },
      ],
      description:
        'Bolt is a scripting language built for educational purposes.',
      tagsList: {
        title: 'Technologies',
        tags: [rust()],
      },
      links: [github({ url: 'https://github.com/saivishwak/bolt' })],
    },
    {
      name: 'BitFabRust',
      // image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2022-03'), new Date("2022-12")],
      details: [
        { label: 'Category', value: ['P2P', 'Open source'] },
      ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description:
        'Decentralized compute platform to enchance AI training, general computing written in RUST.',
      tagsList: {
        title: 'Technologies',
        tags: [rust()],
      },
      links: [github({ url: 'https://github.com/saivishwak/BitFabRust' })],
    },
    {
      name: 'Bytebook P2P File Sharing Web App',
      // image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2021-05'), new Date('2021-05')],
      details: [
        { label: 'Category', value: ['Web app', 'P2P'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      // ],
      description:
        'Bytebook P2P is a file sharing web app that allows users to transfer files between multiple devices. It uses WebRTC peer-peer connections to share file between users and socket for initial handsake. The app also has web workers to remove the load on client for large data transfers and IndexDB to store files meta data. Your files are not transfered through any central server so you have more privacy.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), JavaScript()],
      },
      links: [github({ url: 'https://github.com/saivishwak/WebrtcFileShare' })],
    },
    {
      name: 'SEGNet',
      // image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2020-06'), new Date('2020-06')],
      details: [
        { label: 'Category', value: ['Desktop App', 'Open source', "Computer Vision"] },
      ],
      description:
        'SEGNet is an open-source, multi-platform bone segmentation and Dicom viewer with the user-friendly interface. SEGNet provides ease in viewing Dicom data; Mouse integrations will help you to visualize Dicom in a detailed way. SEGNet utilizes the combined power of image processing and neural nets for fast segmentation of bone from a CT Dicom data.',
      tagsList: {
        title: 'Technologies',
        tags: [Python()],
      },
      links: [github({ url: 'https://github.com/saivishwak/SEGNet' })],
    },
    {
      name: 'Numerical Computation in MATLAB',
      // image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Category', value: ['MATLAB', 'Open source'] },
      ],
      description:
        'Solving various mathematical problems in MATLAB using numerical methods and computational techniques.',
      tagsList: {
        title: 'Technologies',
        tags: [Matlab()],
      },
      links: [github({ url: 'https://github.com/saivishwak/Matlab' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
