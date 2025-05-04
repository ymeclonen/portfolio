import { FaCode, FaRobot, FaBroom } from 'react-icons/fa';

const skills = [
  {
    id: 'full-stack-dev',
    title: 'Full-Stack Development',
    description: 'Creating responsive web applications and mobile apps using modern frameworks and technologies.',
    icon: FaCode,
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Developing and implementing machine learning models and AI solutions for complex problems.',
    icon: FaRobot,
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning',
    description: 'Processing and transforming raw data into clean, structured formats ready for analysis and modeling.',
    icon: FaBroom,
  }
];

const technicalSkills = {
  programmingLanguages: [
    'Python',
    'C++',
    'Java',
    'JavaScript',
    'HTML/CSS',
    'Dart',
    'SQL',
    'PHP',
  ],
  technologiesFrameworks: [
    'Arduino',
    'Raspberry Pi',
    'Git',
    'TensorFlow',
    'scikit-learn',
    'Pandas',
    'Flutter',
    'Laravel',
  ],
  aiDataSkills: [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Data Preprocessing',
    'Data Visualisation'
  ]
};

const languages = [
  { name: 'English', level: 4 },
  { name: 'Dutch', level: 5 },
];

export { skills, technicalSkills, languages };