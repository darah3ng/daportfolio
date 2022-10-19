import CSIROLogo from '../assets/images/csiro.svg';
import RexlabsLogo from '../assets/images/rexlabs.svg';
import Astronaut from '../assets/images/astronaut.svg';
import Serenade from '../assets/images/Serenade_500x500px.jpeg';

const companies = [
  {
    title: 'Serenade',
    alt: 'SR image',
    role: 'Software / Blockchain Developer',
    skills: 'Typescript, Next JS, Nest JS, Polygon, Solidity, Hardhat',
    period: '2022 - Present',
    logo: Serenade,
  },
  {
    title: 'Freelance',
    alt: 'FL image',
    role: 'Software / Blockchain Developer',
    skills: 'Typescript, React, Solidity, Hardhat',
    period: '2021 - Present',
    logo: Astronaut,
  },
  {
    title: 'Rexlabs',
    alt: 'RX image',
    role: 'Software Developer',
    skills: 'Typescript, Javascript, React, Laravel, PHP',
    period: '2018 - 2021',
    logo: RexlabsLogo,
  },
  {
    title: 'CSIRO',
    alt: 'CSIRO image',
    role: 'Industrial Trainee',
    skills: 'Java, MySQL, PostgreSQL',
    period: '2017 - 2017',
    logo: CSIROLogo,
  },
];

export default companies;
