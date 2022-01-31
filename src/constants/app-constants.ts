const developerTitleName = {
  name: 'Ovidiu',
};

const headerMenuButtons = [
  {
    title: 'About me',
    ref: 'me',
  },
  {
    title: 'Skills',
    ref: 'skills',
  },
  {
    title: 'Work experience',
    ref: 'experience',
  },
  {
    title: 'Education',
    ref: 'education',
  },
  {
    title: 'Projects',
    ref: 'projects',
  },
  // {
  //   title: 'Open source',
  //   ref: 'open-source',
  // },
  {
    title: 'Contact me',
    ref: 'contact-me',
  },
];

const aboutMeSection = {
  title: 'Hi, I am Ovidiu!',
  description:
    'An enthusiast Full Stack software developer having an experience of building Web and Mobile applications using JavaScript, Angular, .NET Core, Spring Boot, HTML, CSS, SQL, Firebase, Java, Android and other nice tools.',
  buttonTittle: 'See my resume',
  resumeLink:
    'https://accounts.google.com/ServiceLogin/webreauth?service=wise&passive=1209600&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F2%2Ffolders%2F1W2qI9XFsLSIkb-_RCIs04Bho2B2jipG4&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F2%2Ffolders%2F1W2qI9XFsLSIkb-_RCIs04Bho2B2jipG4&authuser=2&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
};

const facebookLink = 'https://www.facebook.com/ovidiu.mihai.353';
const linkedinLink =
  'https://www.linkedin.com/in/ovidiu-mihai-picioru%C8%99-a0793b19b/';
const gmailLink =
  'https://mail.google.com/mail/?view=cm&fs=1&to=piciorus.ovidiu.mihai@gmail.com';
const githubLink = 'https://github.com/Piciorus-Ovidiu-Mihai';

const skillsSection = {
  title: 'What I do ?',
  subTitle: 'FULL-STACK DEVELOPER WHO LIKES TO BUILD SCALABLE WEB APPLICATION',
  skillsList: [
    {
      info: 'Develop scalable web application using Angular and .NET technologies',
    },
    {
      info: 'Build reponsive UI',
    },
    {
      info: 'Integration of third party services such as Firebase',
    },
    {
      info: 'Building mobile application using Android',
    },
    {
      info: 'Highly organized, attention to detail, problem-solving',
    },
  ],
};

const workExperienceSection = {
  title: 'Work Experience',
  jobsInfo: [
    {
      title: 'AROBS Software',
      description:
        'During this mentoring program I learned about .NET technologies. I learned how to build an application in a team. We developed a client in ASP.NET MVC Core with an email services and a library with models and for the connection with database we used an API. This application is made for completing and creating surveys of people who are trying different medical treatments.',
      timeRange: 'Jul 2021 - Aug 2022',
      jobTitle: '.NET FULL-STACK',
      jobColor: '#6FC05D',
    },
    {
      title: 'The Code Crowd',
      description:
        'I was involved in the entire process of development for several enterprise projects that optimize the repetitive processes. During this job I was able to communicate directly with the client, design the arhitecture, the models and find the best solutions for their business.',
      timeRange: 'Jul 2021 - Aug 2022',
      jobTitle: 'FULL-STACK DEVELOPER',
      jobColor: '#6cbaa6',
    },
    {
      title: 'GEP Worldwide',
      description:
        'Developed new modules on a low-code platform aimed at simplifying the development process and reducing the delivery time. I implemented a BPMN graphic designer that transforms complex business processes into visual and intuitive workflows. I created low-code reusable UI components that are consumed through a client-centric and zero downtime platform.',
      timeRange: 'Jul 2021 - Aug 2022',
      jobTitle: 'ASSOCIATE SOFTWARE ENGINEER',
      jobColor: '#006BAB',
    },
  ],
};

const personalProjectsSection = {
  title: 'Personal Projects',
  projects: [
    {
      title: 'GPS Tracker',
      description:
        'This is an api for a GPS tracker and a to do list application. This project was made using Spring Boot. Also, there is a client project for mobile, using Java and Android Studio.',
    },
    {
      title: 'Shop Management',
      description:
        'The app’s main purpose is to connect the main store chains to their clients in a more efficient and time saving way. It serves as a digital portal between the buyers and the actual physical store, and the whole package of functionalities of an online store, such as a cart to place your products, descriptions and reviews, a home page, a contact page, and an order history page.',
    },
    {
      title: 'Immunisation Trial',
      description:
        'I made this application in the program of .NET full-stack at Arobs with other four students. During this program I learned how to work in a team on a real project.',
    },
    {
      title: 'Workshop Management',
      description:
        'This is an application for managing the workshops. I used Windows Presentation Foundation for the client and web services for connecting the client with database in C#.',
    },
    {
      title: 'Daily Calories Management Android',
      description:
        'I finished the Android Fundamentals courses from Google the Digital Workshop. With all the knowledge I gained I made an application for Daily Calories Management.With this application you can track all calories that you eat everyday, take photos of your food and make a list with all food you usually eat.',
    },
    {
      title: 'Application',
      description:
        'There are some applications that I made for learning and some different algorithms. As programming languages it is used : Java,C#,Javascript,Python',
    },
    {
      title: 'Angular Application Generator',
      description:
        'The main purpose of this application is to optmize the entire developement processes for front-end',
    },
    {
      title: 'My First Website',
      description: 'This is a static website that I created in high school',
    },
  ],
};

const openSourceProjects = {
  title: 'Open Source',
  projects: [
    {
      title: 'Angular project generator',
      description:
        'It creates an angular application using angular-schematics with architecture',
    },
    {
      title: 'Personal website template',
      description:
        'This is a personal website template, which can be use by everyone who wants a personal website',
    },
  ],
};

const educationSection = {
  title: 'Education',
  educationList: [
    {
      title: 'Technical University of Cluj-Napoca',
      subTitle:
        'Master of Engineering, Applied informatics in complex systems engineering',
      dateRange: 'Oct 2021 - Present',
      description:
        'During the master degree I make research and develop a project generator for angular projects using angular-schematics, that can simplify the creation of an entire project.',
    },
    {
      title: 'Technical University of Cluj-Napoca',
      subTitle: "Engineer's Degree, Automation and Applied Informatics",
      dateRange: 'Oct 2017 - Jul 2021',
      description:
        "As a Bachelor's Thesis, I had built a web application for shop management, using Cloud Firebase and Angular. The main idea of the application was to find the best products based on quality and price.",
    },
    {
      title: 'Google the Digital Workshop',
      subTitle: 'Android Fundamentals',
      dateRange: 'Mar 2020 - Jul 2020',
      description:
        'During this course I learned how to build a mobile application using Android Tools.',
    },
    {
      title: 'National College "Jean Monnet" Ploiesti',
      subTitle: 'High School, Mathematics-Informatics bilingual English',
      dateRange: 'Sept 2013 - Jul 2017',
      description: '',
    },
  ],
};

const contactMe = {
  title: 'Contact me',
  description:
    'Do you want to discuss with me about a project or just to ask me anything? My inbox is 24/24 open.',
  info: {
    location: 'Cluj-Napoca, Cluj, Romania',
    phoneNumber: '0732378913',
    emailAddress: 'piciorus.ovidiu.mihai@gmail.com',
    linkedinAccount: '',
    facebookAccount: '',
  },
};

export {
  developerTitleName,
  headerMenuButtons,
  aboutMeSection,
  facebookLink,
  linkedinLink,
  gmailLink,
  githubLink,
  skillsSection,
  workExperienceSection,
  personalProjectsSection,
  openSourceProjects,
  contactMe,
  educationSection,
};
