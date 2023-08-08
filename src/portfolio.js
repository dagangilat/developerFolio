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
    "https://drive.google.com/file/d/1TsDBxlWAyHT-bsrMlk4vW475yUP5QXAs/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/dagangilat",
  linkedin: "https://www.linkedin.com/in/dagangilat/",
  gmail: "dagan.gilat@gmail.com",
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
    emoji("⚡ Developed scalable & resilient systems, employing cutting edge technologies in Distributed Systems, Cloud, and Machine Learning"),
    emoji("⚡ Special interest and focus in Software architecture and patterns, and the Go and Rust programming languages.")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {/* 
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    */},
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
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

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
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
  title: "Awards, Patents & Papers 🏆 ",
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
      title: "3rd Plateau Invention Achievement Award",
      subtitle: "",
      image: require("./assets/images/award-logo.png"),
      imageAlt: "3rd Plateau Invention Achievement Award",
      footerLink: [
      {
        name: 
        "Invention Achievement Award",
        url: ""
      },
    ]
   },

    {
      title: "Optimization Outstanding Technical Achievement Award",
      subtitle: "",
      image: require("./assets/images/IBM_Research.png"),
      imageAlt: "Awards",
      footerLink: [
      {
        name: 
        "Major Contributions",
        url: ""
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
  display: false
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
