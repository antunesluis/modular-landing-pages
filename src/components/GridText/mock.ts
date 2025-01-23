import { GridTextProps } from '.';

export default {
  background: true, // Enables background with theme-defined image
  title: 'Our Services',
  description:
    'We offer complete software development solutions, focusing on quality and innovation. Our specialized team is ready to turn your ideas into reality.',
  grid: [
    {
      title: 'Technical Consulting',
      description:
        'We provide specialized consulting in software architecture, technology choices, and development best practices. We help your team make the best technical decisions.',
    },
    {
      title: 'Web Development',
      description:
        'We create modern and responsive web applications using the latest market technologies. Our focus is on React, Next.js, and Node.js, ensuring performance and scalability for your project.',
    },
    {
      title: 'UX/UI Design',
      description:
        'Our design team creates intuitive and attractive interfaces, focusing on user experience. We work with prototyping, usability testing, and complete design systems.',
    },
  ],
} as GridTextProps;
