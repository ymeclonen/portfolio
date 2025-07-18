const projects = [
    {
        id: 'skills-sem1',
        school: 'Thomas More',
        course: 'Skills Integration Lab 2',
        title: 'Skills Semester 1',
        description: 'A client-focused web design project for TTC Westel, a local table tennis club, where we created a custom website design based on the client’s requirements.',
        longDescription: 'This project was part of the Skills Semester 1 course. In this assignment, we collaborated with TTC Westel, a local table tennis club, to design a new website tailored to their needs. We held meetings with the client to understand their preferences and functional requirements for the site.\n\nBased on these discussions, we created several design concepts using Figma, presenting wireframes and interactive prototypes for feedback. The final result was a polished website design that reflected the club’s identity and provided visitors with clear information.\n\nThis project helped us strengthen our skills in client communication, web design, and UI/UX principles.',
        category: 'Web',
        image: '/assets/images/projects/ttcwestel.jpg', 
        technologies: ['Figma'],
        link: 'https://www.figma.com/design/tSuf94sSF5dZ17ncDHvreE/TTC-Westel?node-id=155-297&t=z9AdzumwSXgYfMY4-1',
        proofLink: '', 
        reflection: 'This project taught me the importance of clear client communication and the value of iterative design. Gathering feedback early through wireframes and prototypes helped us align the final product with the client’s expectations. It also strengthened my skills in UI/UX design and collaborating within a project team.',
        workOn: [
            'Set up the complete project structure based on the Figma design.',
            'Define global color variables for consistent styling.',
            'Create reusable layout components for a consistent UI.',
            'Build the "Materiaal beheren" page.',
            'Build the "Trainingen inplannen" page.'
        ],
        challenges: '',
        screenshots: [
            {
                image: '/assets/images/projects/skil2_1.jpg',
            },
            {
                image: '/assets/images/projects/skil2_3.jpg',
            },
            {
                image: '/assets/images/projects/skil2_2.jpg',
            },
            {
                image: '/assets/images/projects/skil2_4.jpg',
            },
            {
                image: '/assets/images/projects/skil2_5.jpg',
            }
        ],
        visible: true
    },
    {
        id: 'skills-sem2',
        school: 'Thomas More',
        course: 'Skills Integration Lab 2',
        title: 'Skills Semester 2',
        description: 'A web development project for De Beerse Bende, a local theater group, where we developed a custom website for ticket reservations, event scheduling, and management tools.',
        longDescription: 'This project was part of the Skills Semester 2 course at Thomas More. In this assignment, we teamed up with De Beerse Bende, a local theater group, to design and develop a brand new website tailored to their specific needs. The platform allows visitors to reserve tickets, check the event calendar, and access general theater information.\n\nDuring the first week of the project, we reviewed the initial Figma designs together and identified several areas for improvement. Based on client feedback and our own UX/UI insights, we made significant adjustments to the Figma prototypes to better align with the project’s requirements and improve user experience.\n\nAfter finalizing the updated designs, we moved on to building the website using Laravel, ensuring it was both functional and user-friendly. This project gave us hands-on experience in client collaboration, backend development with Laravel, and practical web development within a real-world context.',
        category: 'Web',
        image: '/assets/images/projects/debeersebende.jpg',
        technologies: ['Laravel', 'PHP', 'SQLite'],
        link: 'https://app.debeersebende.be',
        proofLink: '',
        reflection: 'This project taught me a lot about working closely with clients and iterating on designs based on real feedback. Adjusting the Figma prototypes in the first week was a valuable exercise in flexibility and collaboration. I also developed stronger backend skills with Laravel and improved my ability to create mobile-responsive layouts. Building full infrastructures for ticket sales and scanning pages, along with managing database tables for users and emails, gave me insight into how web applications function behind the scenes. Overall, this project was an excellent opportunity to apply classroom concepts to a practical, real-world scenario.',
        workOn: [
            'Collaborating with the client to revise and improve the Figma designs during the first project week.',
            'Creating reusable layout components like navigation bars and buttons.',
            'Developing the complete infrastructure for the "Ticket scannen" and "Ticket verkopen" pages.',
            'Setting up and managing the "Gebruiker" and "Mail" tables in the SQLite database.',
            'Ensuring all pages were mobile-friendly for an optimal layout across desktop and mobile devices.',
            'Designing new and updated Figma prototypes for various pages based on client input.'
        ],
        screenshots: [
            {
                image: '/assets/images/projects/skil2_6.jpg',
            },
            {
                image: '/assets/images/projects/skil2_7.jpg',
            },
            {
                image: '/assets/images/projects/skil2_8.jpg',
            },
            {
                image: '/assets/images/projects/skil2_9.jpg',
            }
        ],
        visible: true
    },    
    {
        id: 'pikassa',
        school: 'Thomas More',
        course: 'Digital Innovation',
        title: 'Pikassa',
        description: 'A custom-made cash register web application for people with intellectual disabilities.',
        longDescription: 'Pikassa is a group project created as part of the Digital Innovation course at Thomas More. For this project, we developed a web-based cash register system for MPI Oosterlo, an organization that supports people with intellectual disabilities. The goal was to create an intuitive, accessible, and easy-to-use platform tailored to their specific needs. I was mainly responsible for designing the Figma prototypes, developing the sales module of the website, and creating a system that allows users to give back the correct change without needing to be able to read. This feature uses visual cues and clear numeric displays to guide users through the process.',
        category: 'Web',
        image: '/assets/images/projects/pikassa.jpg',
        technologies: ['Laravel', 'PHP', 'SQLite', 'Figma'],
        link: '', 
        proofLink: 'https://dewagenwinkel.be', 
        reflection: 'This project taught me the importance of user-centered design, especially when working for a target audience with specific needs. Collaborating in a group setting on both the design and development process improved my teamwork and communication skills. I also gained hands-on experience working with Laravel and integrating a frontend design into a functional sales system. Designing the visual change-giving system was especially valuable as it challenged me to think creatively about accessibility beyond typical UX standards.',
        workOn: [
            'User-friendly cash register system',
            'Sales module for adding and processing purchases',
            'Accessible and clear design for people with intellectual disabilities',
            'Figma prototype designs',
            'Admin functionality for product and price management',
            'Visual-based change-giving system without the need for reading skills'
        ],
        challenges: 'One of the biggest challenges was ensuring the application was simple and intuitive enough for people with intellectual disabilities to use comfortably. We had to carefully test the designs and get regular feedback from MPI Oosterlo to make sure the interface met their needs. Technically, integrating the sales module with the database and making sure all transactions were correctly processed was also a rewarding challenge. Additionally, developing a system that could guide users to give back the correct change without needing to read required creative thinking and several rounds of iteration.',
        screenshots: [
            {
                image: '/assets/images/projects/pikassa_1.jpg',
            },
            {
                image: '/assets/images/projects/pikassa_2.jpg',
            },
            {
                image: '/assets/images/projects/pikassa_3.jpg',
            },
            {
                image: '/assets/images/projects/pikassa_4.jpg',
            }
        ],
        visible: true
    },     
    {
        id: 'trackmore',
        school: 'Thomas More',
        course: 'Digital Innovation',
        title: 'TrackMore',
        description: 'A digital attendance tracking system for students using a mobile app and web dashboard.',
        longDescription: 'TrackMore is a project developed as part of the curriculum at Thomas More and is currently still in development. It is a digital attendance tracking system where students can register their attendance via a mobile app instead of signing on paper. The app uses a 3-step security verification process to prevent cheating and unauthorized check-ins. Teachers can access a web-based interface to view and manage all attendances and quickly identify absentees. The mobile app is being developed in Flutter, while the web interface is built using React. I am actively involved in both the concept development and the UI/UX design process using Figma. Additionally, I am working closely with a client throughout the project to gather regular feedback and adjust the system to their specific needs and expectations.',
        category: 'APP',
        image: '/assets/images/projects/trackmore.jpg',
        technologies: ['Flutter', 'React', 'SQL', 'Figma'],
        link: '', 
        proofLink: '', 
        reflection: 'This project has been a great opportunity to work with both mobile and web technologies in one integrated system. It is teaching me how to manage data synchronization between an app and a web interface, and how to think about security in user flows. Designing the 3-step verification system challenges me to prioritize both security and user experience, ensuring the app remains quick and easy to use while being robust against misuse. Another valuable aspect of this project is working closely with a real client, which has taught me how to gather useful feedback, translate it into practical adjustments, and maintain good communication throughout a development process. Since the project is still in progress, I continue to learn and improve the system based on feedback and testing.',
        workOn: [
            'Mobile app for students to register attendance',
            '3-step security verification to prevent cheating',
            'Web dashboard for teachers to view and manage attendances',
            'User-friendly UI designed in Figma',
            'Live synchronization between app and web interface',
            'Project currently in development',
            'Regular client feedback sessions to improve and fine-tune the system'
        ],
        challenges: 'The biggest challenge so far has been developing a reliable 3-step verification system that is both secure and user-friendly. Ensuring smooth and real-time synchronization between the app and the web interface has also required careful database management and API integration. An additional challenge has been translating client feedback into actionable changes while staying within the project’s technical scope and timeline. Balancing technical complexity, client expectations, and a clean, intuitive user experience remains a key focus as the project progresses.',
        screenshots: [
            {
                image: '/assets/images/projects/trackmore_1.jpg',
            },
            {
                image: '/assets/images/projects/trackmore_2.jpg',
            },
            {
                image: '/assets/images/projects/trackmore_3.jpg',
            }
        ],
        featured: true,
        visible: true
    }, 
    {
        id: 'credon',
        school: 'Thomas More',
        course: 'Digital Innovation',
        title: 'Credon',
        description: 'A finalized data project for Credon to showcase intern potential using Microsoft Fabric and Power BI.',
        longDescription: 'Credon is a company based in Tessenderlo that provides incoming interns with a one-week data challenge to demonstrate their capabilities. Typically, interns only have one week to explore and present insights from the dataset, resulting in incomplete projects. My task is to create a full, polished version of this project to serve as a reference and inspiration for future interns. The solution uses Microsoft Fabric and follows the Medallion architecture (bronze, silver, gold). For the gold layer, a star schema is implemented. The project is primarily visualized in Power BI, with plans to extend it to Qlik if time permits. Additional considerations include enhancing the dataset with updates and new features to demonstrate advanced possibilities.',
        category: 'DATA',
        image: '/assets/images/projects/credon.jpg', 
        technologies: ['Microsoft Fabric', 'Power BI', 'QLik'],
        link: '', 
        proofLink: '', 
        reflection: 'This project challenged me to take ownership of a full data pipeline and showcase what is possible in just one week. It also pushed me to think beyond just reporting—considering future maintainability, scalability, and how to guide interns with a strong reference implementation.',
        workOn: [
            'Designed and built a complete Medallion architecture pipeline using Microsoft Fabric',
            'Created the Gold layer using a star schema',
            'Developed visual reports in Power BI',
            'Planned to replicate dashboard in Qlik',
            'Explored ways to improve and update data for future use'
        ],
        challenges: 'Ensuring the project could be understood by future interns while still showcasing advanced capabilities. Managing time to go beyond just displaying the data and thinking about enhancements. Learning how to efficiently work within the Medallion architecture using Microsoft Fabric.',
        screenshots: [
            {
                image: '/assets/images/projects/credon_1.jpg', 
            },
            {
                image: '/assets/images/projects/credon_2.jpg', 
            }
        ],
        visible: true
    },
    {
        id: 'mpi',
        school: 'Thomas More',
        course: 'Digital Innovation',
        title: 'MPI Oosterlo',
        description: 'A mobile and web application to manage client visits, notes, and user accounts for MPI Oosterlo.',
        longDescription: 'The MPI Oosterlo project aimed to create a digital solution to streamline employee workflows, enabling them to schedule client visits, keep track of notes, and manage employee and client information. I focused primarily on developing the mobile application using Flutter and Dart. The app includes features such as visit scheduling, adding notes via both text and speech input, and a secure login system. On the web side, I contributed by verifying that all functional requirements were met and provided assistance where needed. The backend is powered by PHP and MySQL, ensuring robust data handling and security.',
        category: 'APP',
        image: '/assets/images/projects/mpi.jpg', 
        technologies: ['Dart', 'Flutter', 'PHP', 'MySQL'],
        link: '', 
        proofLink: 'https://github.com/Thomas-More-Digital-Innovation/2425-MPI-002-jobcoachOndersteuning',
        reflection: 'This project helped me grow my skills in mobile app development and working within a team to build both front-end and back-end solutions. It taught me the importance of usability, data security, and meeting real-world client needs.',
        workOn: [
            'Developed the mobile app using Flutter and Dart',
            'Implemented visit scheduling functionality',
            'Enabled note-taking via text and speech',
            'Built a secure login system for users',
            'Tested and verified website requirements',
            'Assisted in backend development with PHP and MySQL'
        ],
        challenges: 'Ensuring data privacy and security for sensitive client information, managing real-time scheduling and updates, and balancing mobile and web development needs in a collaborative team environment.',
        screenshots: [
            {
                image: '/assets/images/projects/mpi_1.jpg', 
            },
            {
                image: '/assets/images/projects/mpi_2.jpg', 
            },
            {
                image: '/assets/images/projects/mpi_3 .jpg', 
            }
        ],
        visible: true
    },
    {
        id: 'tecktalks',
        school: 'Thomas More',
        course: 'Digital Innovation',
        title: 'Tech Talks',
        description: 'A series of tech talks presenting key technologies such as Laravel, Cloudflare, RFID, Microsoft Fabric, and Tensorflow.',
        longDescription: 'As part of the Digital Innovation course at Thomas More, I participated in Tech Talks, where I presented various modern technologies. Each talk focused on one technology from the list: Laravel (a PHP web framework), Cloudflare (a performance and security platform), RFID (Radio Frequency Identification), Microsoft Fabric (a unified data analytics platform), and TensorFlow (an open-source machine learning library). The goal was to explain their core concepts, demonstrate real-world applications, and discuss potential use cases in digital projects.',
        category: 'Talks',
        image: '/assets/images/projects/techtalk.jpg', 
        technologies: ['Laravel', 'Cloudflare', 'RFID', 'Microsoft Fabric', 'Tensorflow'],
        link: '', 
        proofLink: '',
        reflection: 'Tech Talks helped me grow as a communicator and deepened my understanding of each technology. By researching, structuring presentations, and answering questions, I learned how to break down complex topics into digestible insights. I also discovered how important it is to adapt your language depending on the technical level of your audience.',
        workOn: [
            'Prepared content and slides for each technology topic',
            'Researched up-to-date use cases and examples',
            'Presented each tech topic in front of an audience',
            'Answered questions and led small discussions afterward',
            'Collaborated with peers to ensure engaging and informative sessions'
        ],
        challenges: 'One of the main challenges was simplifying complex technologies like TensorFlow for a general audience without losing the essence of what makes them powerful. Another challenge was managing time effectively to cover all important points within a limited speaking slot.',
        visible: true
    },
    {
        id: 'pzb',
        school: 'Outside',
        title: 'Project Zomboid',
        description: 'An interactive loot-tracking map for Project Zomboid.',
        longDescription: 'This project is a custom web-based interactive map for the game Project Zomboid. I built it for a friend and myself so we could track our in-game progress, including which areas we had already looted and where we needed to explore next. It serves as a companion tool that improves planning and coordination during gameplay.',
        category: 'Web',
        image: '/assets/images/projects/pzb.jpg', 
        technologies: ['API', 'OpenSeadragon', 'JavaScript', 'HTML/CSS'],
        link: '', 
        proofLink: '',
        reflection: 'This project taught me a lot about working with large, high-resolution images on the web, and how to structure interactivity in a meaningful way for players. I also learned how to integrate third-party libraries like OpenSeadragon to make panning and zooming smooth, even on a large map.',
        workOn: [
            'Integrating the full Project Zomboid map with OpenSeadragon for smooth zoom and pan',
            'Building a custom loot-tracking system for in-game buildings',
            'Designing a user-friendly interface for quick updates and reference'
        ],
        challenges: 'The biggest challenge was getting the Project Zomboid map to display cleanly and efficiently on the web without compromising visual quality. Using OpenSeadragon helped manage large image tiles, but configuring it properly and aligning the interactive layers took a lot of fine-tuning.',
        screenshots: [
            {
                image: '/assets/images/projects/pzb_1.jpg', 
            }
        ],
        visible: true
    },
    {
        id: 'robotic-arm-controller',
        school: 'Outside',
        course: 'Elektronica-ICT Final Year Project',
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
        visible: true
    },
    {
        id: 'balancing-robot',
        school: 'Outside',
        course: 'Elektronica-ICT Final Year Project',
        title: 'Balancing Robot',
        description: 'A self-balancing robot using PID control, stepper motors, a custom PCB, and a companion mobile app for real-time adjustments and monitoring.',
        longDescription: 'This project is a two-wheeled self-balancing robot that uses a PID control algorithm to maintain stability. The system is driven by stepper motors controlled via a custom-designed PCB. A dedicated mobile app communicates with the robot for tuning PID parameters, monitoring sensor data, and issuing commands.\n\nThe robot’s body was designed using Autodesk Inventor and fabricated using 3D printing and PCB manufacturing. The control system runs on a Raspberry Pi, integrating sensor feedback from an IMU (Inertial Measurement Unit) to keep the robot upright.',
        category: 'IOT',
        image: '/assets/images/projects/balancingrobot.jpg',
        technologies: ['Python', 'EasyEDA', 'Stepper Motors', 'Inventor', 'Raspberry Pi', 'PID Control', 'Bluetooth'],
        proofLink: '', 
        reflection: 'Working on the Balancing Robot project was a valuable learning experience that pushed me to bridge the gap between hardware and software integration. The process of tuning the PID control system taught me the importance of precision and patience, as even minor changes could dramatically alter the robot’s behavior. Developing a custom PCB was a rewarding challenge that improved my circuit design skills and deepened my understanding of practical hardware constraints in compact embedded systems.\n\nAdditionally, creating a mobile app for real-time communication via Bluetooth introduced me to the complexities of wireless data exchange and the importance of reliable, low-latency connections in control systems. Through this project, I gained experience in system-wide debugging, from electrical issues on the PCB to software bugs affecting motor control and sensor feedback.\n\nOverall, this project significantly enhanced my confidence in embedded systems development, control algorithms, and multidisciplinary project management — skills I’m eager to apply and build upon in future engineering challenges.',
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
        ],
        visible: true
    },    
];

export default projects;