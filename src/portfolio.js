/* eslint-disable no-unused-vars */
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen with your name

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


const greeting = {
  username: "Dagan Gilat",
  title: "Hi there, I'm Dagan",
  subTitle: emoji(
    "Researcher, Architect, Software Developer 🚀 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UMYP10RWuaqUGIIaSRtMp-Vnfo0dC3g2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/dagangilat",
  //linkedin: "https://www.linkedin.com/in/dagangilat/",
  //gmail: "dagan.gilat@gmail.com",
  //gitlab: "https://gitlab.com/dagangilat",
  //facebook: "https://www.facebook.com/dagan.gilat",
  // medium: "https://medium.com/@dagan.gilat",
  //stackoverflow: "https://stackoverflow.com/users/...",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji("⚡ Experienced hands-on R&D leader."),
    emoji("⚡ Developed scalable & resilient systems, employing cutting edge technologies in Distributed Systems, Cloud, and Gen. AI"),
    emoji("⚡ Special interest and focus in Software architecture and patterns, and the Rust & Go programming languages.")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const technionLogo = require("./assets/images/technionLogo.png")
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technion, Israel Institute of Technology",
      logo: technionLogo,
      subHeader: "Ph.D in Systems Engineering",
      duration: "2003",
      desc: "Thesis: A Framework for Simulation of Discrete Events Systems Based on the Object-Process Methodology",
      descBullets: [
        "Under the supervision of Prof. Dov Dori"
      ]
    },
    {
      schoolName: "Technion, Israel Institute of Technology",
      logo: technionLogo,
      subHeader: "Master of Science in Operations Research",
      duration: "1994",
      desc: "Thesis: Adaptable Algorithms for the Estimation of Queuing Network Performance",
      descBullets: [
        "Under the supervision of Prof. Reuven Rubinstein"
      ]
    },
    {
      schoolName: "Technion, Israel Institute of Technology",
      logo: technionLogo,
      subHeader: "B.A in Computer Science",
      duration: "1988",
      desc: "",
      descBullets: [
        "Cum Laude"
      ]
    }
  ]
};

// Your top 4 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Research", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Architecture & Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
/*
Freelancer
Plantago · Full-time
2020 - Present · 4 yrs 2
Node.js, Python (Programming Language) and +4 skills

Co-Founder
HyperMesh
2018 - 2020 · 2 yrs
Berlin Area, Germany
Infrastructure for decentralized, Crowdsourced telecom networks
Docker Products and Kubernetes

CTO, Machine Learning
Toga NetworksToga Networks
2015 - 2017 · 2 yrs
Docker Products and Kubernetes

IBM
14 yrs 1 mo14 yrs 1 mo
Haifa Area, Israel
Senior Manager, Cloud Platforms
2009 - 2015 · 6 yrs
Kubernetes
Manager & Senior Manager, Business Transformation & Optimization
2003 - 2009 · 6 yrs
Research Staff Member
2001 - 2003 · 2 yrs
IBM Research Haifa, Israel

Founder, Logline
Logline · Full-time
1994 - 2001 · 7 yrs
Haifa, Israel
*/
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Architect",
      company: "Stealth Startup",
      companylogo: require("./assets/images/stealth-logo.jpeg.png"),
      date: "2025 – Present",
      desc: "Architect",
      descBullets: [
      ]
    },
    {
      role: "Entrepreneur",
      company: "Plantago",
      companylogo: require("./assets/images/plantagoLogo.png"),
      date: "2020 – 2025",
      desc: "Plantago, Entrepreneur",
      descBullets: [
      ]
    },
    {
      role: "Co-Founder",
      company: "HyperMesh",
      companylogo: require("./assets/images/hypermeshLogo.png"),
      date: "2018-2020",
      desc: "HyperMesh - Co-Founder & Chief Architect",
      descBullets: [
      ]
    },
    {
      role: "CTO, Machine Learning",
      company: "Toga Networks",
      companylogo: require("./assets/images/toganetworksLogo.png"),
      date: "2015-2017",
      desc: "Toga Networks - CTO, Machine Learning",
      descBullets: [
      ]
    },
    {
      role: "Senior Manager, Cloud Platforms",
      company: "IBM",
      companylogo: require("./assets/images/ibmLogo.png"),
      date: "2009 -2014",
      desc: "Senior Manager, Cloud Platforms, IBM Research",
      descBullets: [
      ]
    },
    {
      role: "Staff Member, Manager & Senior Manager, Business Transformation & Optimization",
      company: "IBM",
      companylogo: require("./assets/images/ibmLogo.png"),
      date: "2001-2009",
      desc: "Staff Member, Manager & Senior Manager, Business Transformation & Optimization, IBM Research",
      descBullets: [
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
     }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
/*
Awards & Patents
- Filed 15 patents.
- 2014, Research Division Award for OpenStack Pioneers: Key Contributions to the OpenStack
- 2010, 3rd Plateau Invention Achievement Award
- 2008, Outstanding Technical Achievement Award in appreciation for substantial contributions to Business
Optimization area,
- 2007, Ovation Award in appreciation for contribution for the Massive Collection System for Revenue Assurance
- 2006, Award in appreciation for contribution for the empty container repositioning optimization solution
- 2002, Outstanding Technical Achievement Award in appreciation for substantial contributions to the architecture,
the ADI technology and the innovation in the e-business management services offering
- Patents: https://patents.google.com/?inventor=Dagan+Gilat&oq=Dagan+Gilat
- Papers: https://scholar.google.com/scholar?hl=iw&as_sdt=0%2C5&q=Dagan+Gilat&btnG=
Awards
•	Research Division Award for OpenStack Pioneers: Key Contributions to the Open Cloud Movement, March 2014
•	3rd Plateau Invention Achievement Award, January 2010
•	Outstanding Technical Achievement Award in appreciation for substantial contributions to Business Optimization area, April 2008
•	Ovation Award in appreciation for contribution for the Massive Collection System (MCS) for Revenue Assurance, February 2007
•	Research Division Technical Group Award for contribution to the MDBT CEO Milestone accomplishment, June 2006
•	Ovation Award in appreciation for contribution for the empty container repositioning optimization solution for shipping companies, January 2006
•	Outstanding Technical Achievement Award in appreciation for substantial contributions to the architecture, the ADI technology and the innovation in the e-business management services offering, January 2002

Patents
•	IL8-2009-0157:  Social Modeling of Processes
•	IL8-2009-0106: Optimization of Workforce Scheduling and Capacity Planning
•	IL8-2009-0145: A Scheduler for Highly Parallel Jobs with Global Interdependencies
•	IL8-2008-0472: Duplicate Filtering in a Data Processing Environment
•	IL9-2008-0210: Business Process Automatic Creation through Analytical KPI Optimization
•	IL8-2008-0483: Resource Optimization for Real-time Task Assignment in Multi-Process Environments
•	IL8-2007-0135: Device, System and Method of Collaborative Distribution of Digital Merchandise
•	IL8-2007-0246: Device, System, and Method of Generating Location-Based Social Networks
•	IL8-2006-0029:  Method and Computer Program Product for Modeling an Organization
•	IL9-2005-0053: Device, Method and Computer Program Product for Determining an Importance of Multiple Business Entities
•	IL8-2005-0028: Device, Method and Computer Program Product for monitoring a group of entities
•	IL9-2005-0053: Device, Method and Computer Program Product for Determining an Importance of Multiple Business Entities
•	IL8- 2002-0069:  Method and System for Active Monitoring of dependency Models
•	IL8-2004-0070 Framework for Automatic Generation of Hybrid Performance Models
•	IL8-2003-0007: Method and System for Automatic Continuous Monitoring and On-Demand Optimization of Business IT Infrastructure According to Business Objectives

Publications
•	Autoscaler – Machine Learning Based Cloud Autoscaling, 2017 (submission in progress)
•	Creating operational shift schedules for third-level IT support: challenges, models and case study, International Journal of Services Operations and Informatics, Inderscience, 2008.
•	A top-down approach to aligning business service centers with business processes. International Journal of Services Operations and Informatics, Inderscience, 2008.
•	Shift Scheduling for Third Level IT Support: Challenges, Models and Case Study, INFORMS 2007
•	Calculating the Business Importance of Entities in a Service-Oriented Enterprise. IEEE SCC 2007: 717-718
•	Modeling and Monitoring Dynamic Dependency Environments. IEEE SCC 2005: 208-216 
•	INFORMS 2005: LPS (Logistics Planning System) for Empty Containers
•	INFORMS 2005: SWOPS – A General Shift Work Optimized Planning & Scheduling Tool. 
•	Reactive Rules-Based Dependency Resolution for Monitoring Dynamic Environments. RuleML 2005: 71-83
•	Autonomic Self-Optimization According to Business Objectives. ICAC 2004: 206-213
•	Reactive rules inference from dynamic dependency models. WWW (Alternate Track Papers & Posters) 2004: 232-233
•	Business objective based resource management. WWW (Alternate Track Papers & Posters) 2004: 236-237 
•	A Methodological Framework for Business-Oriented Modeling of IT Infrastructure. Winter Simulation Conference 2004: 474
Inference of Reactive Rules from Dependency Models. RuleML 2003: 49-64

- 3rd Plateau Invention Achievement Award
- Outstanding Technical Achievement Award in appreciation for substantial contributions to Business Optimization area
- Ovation Award in appreciation for contribution for the Massive Collection System for Revenue Assurance 
- Award in appreciation for contribution for the empty container repositioning optimization solution 
- Outstanding Technical Achievement Award in appreciation for substantial contributions to the architecture, the ADI technology and the innovation in the e-Business Management services offering

*/

const achievementSection = {
  title: "Patents & Papers 🏆 ",
  subtitle: "",
  achievementsCards: [
    {
      title: "Filed 15 USA Patents",
      subtitle: "",
      image: require("./assets/images/Google_Patents_Logo.png"),
      imageAlt: "Patents",
      footerLink: [
      {
        name: "Dagan Gilat US Patents",
        url: "https://patents.google.com/?inventor=Dagan+Gilat&oq=Dagan+Gilat"
      },
    ]
   },
   {
      title: "Published Papers",
      subtitle: "",
      image: require("./assets/images/Google_Scholar_Logo.png"),
      imageAlt: "Papers",
      footerLink: [
      {
        name: "Dagan Gilat Publications",
        url: "https://scholar.google.com/scholar?hl=iw&as_sdt=0%2C5&q=Dagan+Gilat&oq="
      },
     ]
    },
],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Some Title",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "some url"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: '',
  number: '+972-54-697-6523',
  email_address: 'dagan.gilat0@gmail.com',
  display: true
};


// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
