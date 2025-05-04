const projects = [
    {
        id: 'robotic-arm-controller',
        school: 'Outside',
        title: 'Robotic Arm with Custom Controller',
        description: 'A robotic arm project powered by stepper motors and servos, featuring a custom controller with a real-time display.',
        longDescription: 'For my final year project in Elektronica-ICT, I developed a robotic arm controlled via stepper motors and servos. To operate the arm, I built a custom controller equipped with a display showing real-time statistics like motor positions and operational states.\n\nThe project involved mechanical design using Inventor, PCB creation with EasyEDA, and embedded programming for precise motor control. This system allows precise manipulation, offering valuable learning in system integration, electronics, and software development.',
        category: 'IOT',
        image: '/assets/images/projects/robotMain.jpg',
        technologies: ['Python', 'EasyEDA', 'Stepper Motors', 'Servos', 'Inventor', 'Raspberry Pi'],
        link: 'https://yme20222023.kogekaschoolverlaters.be/',
        proofLink: '', 
        reflection: 'This project taught me the importance of iterative testing and integrating hardware and software harmoniously. Managing real-time feedback on a custom controller while ensuring system safety was both a technical and personal growth experience.',
        workOn: [
            'Robotic arm driven by stepper motors and servos',
            'Custom-built controller with display for system stats',
            'Real-time monitoring of motor positions and system state',
            'Custom PCB designs for motor and controller circuits',
            'Mechanical design using Inventor software'
        ],
        challenges: 'One key challenge was achieving precise, synchronized control of multiple motors, which required careful programming and testing. Another was designing a reliable, user-friendly controller with real-time feedback, integrating both hardware and software effectively.', 
        screenshots: [
            {
                image: '/assets/images/projects/robotarm.jpg',
            },
            {
                image: '/assets/images/projects/inventor.jpg',
            },
            {
                image: '/assets/images/projects/pcbDesign.jpg',
            }
        ],
        featured: true
    },
    {
        id: 'balancing-robot',
        school: 'Outside',
        title: 'Balancing Robot',
        description: 'A self-balancing robot using PID control, stepper motors, a custom PCB, and a companion mobile app for real-time adjustments and monitoring.',
        longDescription: 'This project is a two-wheeled self-balancing robot that uses a PID control algorithm to maintain stability. The system is driven by stepper motors controlled via a custom-designed PCB. A dedicated mobile app communicates with the robot for tuning PID parameters, monitoring sensor data, and issuing commands.\n\nThe robot’s body was designed using Autodesk Inventor and fabricated using 3D printing and PCB manufacturing. The control system runs on a Raspberry Pi, integrating sensor feedback from an IMU (Inertial Measurement Unit) to keep the robot upright.',
        category: 'IOT',
        image: '/assets/images/projects/balancingrobot.jpg',
        technologies: ['Python', 'EasyEDA', 'Stepper Motors', 'Inventor', 'Raspberry Pi', 'PID Control', 'Bluetooth'],
        proofLink: '', 
        reflection: '',
        workOn: [
            'PID control system for real-time balancing',
            'Custom PCB designed and manufactured via EasyEDA',
            'Stepper motor control for precise wheel movement',
            'Mobile app for adjusting PID parameters and monitoring data',
            'Raspberry Pi-based main controller',
            '3D designed and printed robot chassis',
            'Real-time sensor data visualization'
        ],
        challenges: 'Tuning the PID values for stable balancing was one of the main challenges, as small adjustments had a significant impact on system performance. Another complex task was integrating the real-time communication between the Raspberry Pi and the mobile app via Bluetooth.\n\nDesigning a reliable and compact PCB that could handle motor drivers, IMU communication, and power management within a small footprint also presented unique hardware constraints.',
        screenshots: [
            {
                image: '/assets/images/projects/balancingrobot.jpg',
            },
            {
                image: '/assets/images/projects/pcbDesign2.jpg',
            },
            {
                image: '/assets/images/projects/balancingapp.jpg',
            }
        ]
    },
    
    {
        id: 'skills-sem1',
        school: 'Thomas More',
        title: 'Skills Semester 1',
        description: 'A client-focused web design project for TTC Westel, a local table tennis club, where we created a custom website design based on the client’s requirements.',
        longDescription: 'This project was part of the Skills Semester 1 course. In this assignment, we collaborated with TTC Westel, a local table tennis club, to design a new website tailored to their needs. We held meetings with the client to understand their preferences and functional requirements for the site.\n\nBased on these discussions, we created several design concepts using Figma, presenting wireframes and interactive prototypes for feedback. The final result was a polished website design that reflected the club’s identity and provided visitors with clear information about memberships, events, and contact details.\n\nThis project helped us strengthen our skills in client communication, web design, and UI/UX principles.',
        category: 'Web',
        image: '/assets/images/projects/ttcwestel.jpg', 
        technologies: ['Figma'],
        link: 'https://www.figma.com/design/tSuf94sSF5dZ17ncDHvreE/TTC-Westel?node-id=155-297&t=z9AdzumwSXgYfMY4-1',
        proofLink: '', 
        reflection: 'This project taught me the importance of iterative testing and integrating hardware and software harmoniously. Managing real-time feedback on a custom controller while ensuring system safety was both a technical and personal growth experience.', 
        features: [
            'Client meetings with TTC Westel to gather requirements',
            'Custom website design matching the club’s identity',
            'Wireframes and interactive prototypes in Figma',
            'Information sections for memberships, events, and club details',
            'Presentation and feedback sessions with the client',
            'Final polished design delivered as a Figma prototype'
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'skills-sem2',
        school: 'Thomas More',
        title: 'Skills Semester 2',
        description: 'A web development project for De Beerse Bende, a local theater, where we created a custom website for ticket reservations, event scheduling, and general management.',
        longDescription: 'This project was part of the Skills Semester 2 course. For this assignment, we collaborated with De Beerse Bende, a local theater group, to develop a new website that allows visitors to reserve tickets, check the event calendar, and manage general theater information.\n\nWe worked closely with the client to gather their requirements and preferences for the website. Based on this input, we designed and built the website using Laravel, ensuring that it met all functional needs while offering a clear and user-friendly experience.\n\nThis project provided us with valuable experience in client collaboration, backend development with Laravel, and applying practical web development skills in a real-world scenario.',
        category: 'Web',
        image: '/assets/images/projects/debeersebende.jpg', 
        technologies: ['Laravel', 'PHP', 'SQLite'],
        link: 'https://app.debeersebende.be', 
        proofLink: '', 
        reflection: '',
        features: [
            'Client meetings with De Beerse Bende to gather requirements',
            'Custom website for ticket reservations and event calendar',
            'Built with Laravel for efficient backend management',
            'Sections for upcoming events, ticket booking, and theater information',
            'Admin functionalities for managing events and reservations',
            'Presentation and feedback sessions with the client'
        ],
        challenges: 'A key challenge in this project was translating the wishes and identity of De Beerse Bende into a functional website that is both easy to use for visitors and manageable for the theater staff.\n\nAnother challenge was working with Laravel for the first time in a client project, which provided an excellent opportunity to learn about MVC structure, routing, and database integration in a practical setting.',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'ai-machine-learning',
        school: 'Thomas More',
        title: 'Machine Learning Opdracht',
        description: '',
        longDescription: '',
        category: 'AI',
        image: '/assets/images/projects/machinelearning.jpg', 
        technologies: ['Python', 'Sklearn'],
        link: '', 
        proofLink: '', 
        reflection: '',
        features: [
            '',
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'ai-deep-learning',
        school: 'Thomas More',
        title: 'Deep Learning Opdracht',
        description: '',
        longDescription: '',
        category: 'AI',
        image: '/assets/images/projects/deeplearning.jpg', 
        technologies: ['Python', 'TensorFlow'],
        link: '', 
        proofLink: '', 
        reflection: '',
        features: [
            '',
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'pikassa',
        school: 'Thomas More',
        title: 'Pikassa',
        description: '',
        longDescription: '',
        category: 'Web',
        image: '/assets/images/projects/pikassa.jpg', 
        technologies: ['Laravel', 'PHP', 'SQLite', 'Figma'],
        link: '', 
        proofLink: '', 
        reflection: '',
        features: [
            '',
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'mpi-oosterlo',
        school: 'Thomas More',
        title: 'MPI Oosterlo',
        description: '',
        longDescription: '',
        category: 'Web',
        image: '', 
        technologies: ['Laravel', 'PHP', 'SQLite', 'Figma', 'Flutter'],
        link: '', 
        proofLink: '', 
        reflection: '',
        features: [
            '',
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'aanwezigheidssysteem',
        school: 'Thomas More',
        title: 'Aanwezigheidssysteem',
        description: '',
        longDescription: '',
        category: 'APP',
        image: '', 
        technologies: ['Flutter', 'React', 'SQL', 'Figma'],
        link: '', 
        proofLink: '', 
        reflection: '',
        features: [
            '',
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    },
    {
        id: 'tech-talk',
        school: 'Thomas More',
        title: 'Tech Talk',
        description: 'Tech talks are presentations where experts share ideas, trends, and insights about technology to inform and inspire audiences.',
        longDescription: '',
        category: "Extra's",
        image: '/assets/images/projects/techtalk.avif', 
        technologies: ['Laravel', 'CloudFlare', 'RFID', 'Microsoft Figma'],
        link: '', 
        proofLink: '', 
        reflection: '',
        features: [
            '',
        ],
        challenges: '',
        screenshots: [
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            },
            {
                image: '/',
            }
        ]
    }
];

export default projects;