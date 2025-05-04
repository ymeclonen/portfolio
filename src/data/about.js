import { FaLightbulb, FaRobot, FaBriefcase, FaWineBottle } from 'react-icons/fa';

const aboutData = {
  name: 'Your Name',
  profileImage: '/assets/images/yme.png',
  introduction: "Hello! I'm Yme Clonen, a passionate student of Applied Computer Science. I have always been fascinated by technology and how it can be leveraged to solve real-world problems.",
  whyField: [
    "I chose this field because it perfectly combines my passion for programming with my fascination for artificial intelligence. The interdisciplinary nature of AI allows me to work on diverse projects that leverage data science, machine learning, and computational thinking to solve complex problems.",
    "What excites me most about this field is the opportunity to create intelligent systems that can learn, adapt, and improve people's lives. From developing predictive models to building natural language processing systems, I find fulfillment in teaching machines to understand patterns and make decisions that would traditionally require human intelligence."
  ],
  hobbies: [
    {
      icon: FaRobot,
      title: "Robotics",
      description: "I build small robots in my spare time, experimenting with different sensors and control systems to solve everyday problems."
    },
    {
      icon: FaLightbulb,
      title: "Social Innovation",
      description: "I'm passionate about finding creative ways to leverage ICT solutions to solve social challenges and improve people's quality of life."
    },
    {
      icon: FaBriefcase,
      title: "Tech Entrepreneurship",
      description: "I enjoy ideating and developing business concepts around emerging technologies, with a focus on sustainable and scalable solutions."
    },
    {
      icon: FaWineBottle,
      title: "Mead Making",
      description: "I craft homemade mead, experimenting with different honey varieties and flavors, combining ancient tradition with scientific precision."
    }
  ],
  ambitions: [
    "Looking ahead, I aspire to leverage my ICT skills to develop accessible technologies that can improve quality of life for people of all abilities. My goal is to create solutions that bridge digital divides and make technology more inclusive.",
    "In the next five years, I want to apply my knowledge to the real world. I plan to collaborate with non-profits and social enterprises to maximize the positive impact of my ICT expertise, while continuing to learn from other people to expand my technical skillset and better serve diverse user needs."
  ]
};

export default aboutData;