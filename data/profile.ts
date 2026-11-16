/* =====================================================================
   Profile data — built from the résumé. Edit anything here.
   Leave any URL as "" (or omit it) to hide that link/button.
   ===================================================================== */

export type Project = {
  title: string;
  category: "Work projects" | "Full stack" | "Frontend";
  duration?: string;
  blurb: string;
  points?: string[];
  tech: string[];
  live?: string;
  code?: string;
  pdf?: string;
  featured?: boolean;
};

export type Profile = {
  name: string;
  initials: string;
  photo: string;
  role: string;
  location: string;
  available: boolean;
  intro: string;
  about: string[];
  facts: [string, string][];
  stats: [string, string][];
  email: string;
  phone: string;
  resume: string;
  socials: Record<string, string>;
  skills: { group: string; items: string[] }[];
  projects: Project[];
  experience: { role: string; org: string; when: string; points: string[] }[];
  education: [string, string][];
  certifications: [string, string][];
  achievements: string[];
  hobbies: string[];
};

export const PROFILE: Profile = {
  name: "Shivani Darji",
  initials: "SD",
  photo: "",                       // optional: URL of your photo, e.g. "/me.jpg" (put the file in /public)
  role: "React Developer",
  location: "Ahmedabad, India",
  available: true,                 // shows the "Available for work" badge
  intro:
    "React.js and MERN stack developer building responsive business web applications: reusable components, validated forms, CRUD workflows, role-based access and admin dashboards.",
  about: [
    "I’m a React.js and MERN stack developer with 1 year 8 months of experience building responsive business web applications. I work with React.js, TypeScript, Redux Toolkit and REST API integration, and I’m hands-on with Node.js, Express.js and MongoDB.",
    "I focus on performance through lazy loading, memoization and component-level refactoring, and I’ve delivered enterprise features across ATS, CRM, HRMS and PMS workflows. Outside work, I enjoy open source contribution, technical blogging and competitive coding.",
  ],
  facts: [
    ["Experience", "1 year 8 months"],
    ["Focus", "React · TypeScript · MERN"],
    ["Languages", "English, ગુજરાતી, हिन्दी"],
    ["Based in", "Ahmedabad, India"],
  ],
  stats: [
    ["1y 8m", "of experience"],
    ["8", "projects built"],
    ["3", "certifications"],
    ["3.65/4", "M.Sc. GPA"],
  ],
  email: "shivanidarji5@gmail.com",
  phone: "+91-9313468495",
  resume: "",                      // add your résumé link or "/resume.pdf" (file in /public) to show the Résumé buttons
  socials: {
    GitHub: "https://github.com/shivudarji",
    LinkedIn: "",
    X: "",
    YouTube: "",
  },

  skills: [
    { group: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Ant Design", "Material UI", "Vite"] },
    { group: "State & data", items: ["Redux Toolkit", "Context API", "React Hook Form", "Axios", "REST APIs"] },
    { group: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
    { group: "Tools", items: ["Git / GitHub", "Lazy loading", "Memoization", "Refactoring & debugging"] },
  ],

  projects: [
    {
      title: "Trackivo",
      category: "Work projects",
      duration: "11 months",
      blurb: "Enterprise ATS, CRM, HRMS & PMS platform unifying hiring, client, HR and project workflows in one product.",
      points: [
        "Built React interfaces for candidate management and HRMS attendance, leave and holiday workflows, with reusable forms, validation, data tables, filters and pagination.",
        "Developed Jira-style project boards for task assignment, status updates and task tracking.",
        "Supported Node.js/Express REST APIs and MongoDB data handling for CRUD operations and filtering.",
        "Integrated REST APIs with Axios and managed complex application data using Redux Toolkit.",
      ],
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Axios"],
      featured: true,
    },
    {
      title: "Lexcru Admin Panel",
      category: "Work projects",
      duration: "11 months",
      blurb: "Enterprise RO management platform with an admin panel for day-to-day operations.",
      points: [
        "Developed React.js frontend features with Redux Toolkit and REST API integration.",
        "Built reusable admin screens with forms, validation, data tables, filters and CRUD workflows.",
      ],
      tech: ["React.js", "Redux Toolkit", "REST APIs"],
      featured: true,
    },
    {
      title: "Jalsagram",
      category: "Work projects",
      duration: "8 months",
      blurb: "Ticket booking and event admin platform with a full-featured admin panel.",
      points: [
        "Built responsive admin screens for event creation, category management, user management and ticket management with full CRUD workflows.",
        "Developed validated forms with React Hook Form and OTP-based authentication interfaces using Material UI and Ant Design.",
      ],
      tech: ["React.js", "React Hook Form", "Material UI", "Ant Design"],
    },
    {
      title: "Lexcru Service App",
      category: "Work projects",
      duration: "3 months",
      blurb: "RO service and technician management app for service and testing operations.",
      points: [
        "Developed reusable React 19 / TypeScript interfaces integrated with REST APIs and Redux-based state.",
        "Implemented user, role, permission, profile, OTP and recipe-related interfaces.",
      ],
      tech: ["React 19", "TypeScript", "Redux", "REST APIs"],
    },
    {
      title: "Thoughtify",
      category: "Full stack",
      duration: "3 months",
      blurb: "A MERN notes management app with category-based create, view, edit and delete workflows.",
      points: ["Built Node.js/Express APIs, MongoDB data handling, React screens and Redux state management."],
      tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "FakeStore",
      category: "Frontend",
      duration: "3 months",
      blurb: "A responsive e-commerce app with external API integration, product CRUD and category filtering.",
      points: ["Redux state management, light/dark mode and reusable components."],
      tech: ["React.js", "Redux", "REST APIs"],
    },
    {
      title: "YouTube Clone",
      category: "Frontend",
      duration: "3 months",
      blurb: "A YouTube Data API-based app with video and channel search, routing and responsive video browsing.",
      tech: ["React.js", "Redux", "YouTube Data API"],
    },
    {
      title: "Portfolio",
      category: "Frontend",
      duration: "3 months",
      blurb: "A responsive personal portfolio with reusable React components, mobile-first layouts and modern styling.",
      tech: ["React.js", "Tailwind CSS", "SCSS"],
    },
  ],

  experience: [
    {
      role: "React Developer",
      org: "Kriyan Infotech",
      when: "Mar 2025 — Present",
      points: [
        "Develop and maintain responsive business applications using React.js, TypeScript, JavaScript, HTML5 and CSS3.",
        "Build reusable UI components and manage application state with Redux, Redux Toolkit and Context API.",
        "Integrate REST APIs using Axios and implement validated forms, CRUD workflows, data tables, filters and error handling.",
        "Work across the React.js frontend and Node.js/Express.js & MongoDB backend for Trackivo, building UI modules and supporting API and data requirements.",
        "Improve performance through lazy loading, memoization, component optimization, refactoring and debugging.",
      ],
    },
    {
      role: "Intern",
      org: "Trackivo, Kriyan Infotech",
      when: "3 months",
      points: ["Internship on the Trackivo enterprise platform (ATS, CRM, HRMS and PMS) before joining as a React Developer."],
    },
  ],

  education: [
    ["M.Sc. Computer Applications & IT", "K. S. School of Business Management & IT, Gujarat University · 2025 · Grade 3.65/4"],
    ["B.Sc. Information Technology", "K. S. School of Business Management & IT, Gujarat University · 2023 · Grade 3.58/4"],
    ["12th (Gujarat, Gujarati medium)", "2020 · 81%"],
    ["10th (Gujarat, Gujarati medium)", "2018 · 77%"],
  ],

  certifications: [
    ["Learn the Basics of JavaScript Programming Language", "Great Learning Academy"],
    ["Learn the Basics of React.js", "Great Learning Academy"],
    ["Campus to Corporate", "Gujarat University Placement Cell"],
  ],

  achievements: [
    "Completed M.Sc. in Computer Applications & Information Technology with GPA 3.65/4 and B.Sc. in Information Technology with GPA 3.58/4.",
    "Took part in Gujarat University placement initiatives and workshops, and completed the Campus to Corporate program.",
  ],
  hobbies: ["Open source contribution", "Technical blogging", "Competitive coding"],
};
